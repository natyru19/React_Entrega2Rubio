import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, updateDoc, doc, getDoc, query, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"  


const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useCartContext()

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
    e.preventDefault()

        if(values.nombre.length === 0){
            alert("El nombre es obligatorio.")
            return
        }

        if(values.direccion.length === 0){
            alert("La direccion es obligatoria.")
            return
        }

        if (values.email.length === 0){
            alert("El email es obligatorio.")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        
        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if(stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            }else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            vaciarCarrito()
                        })  
                        .catch(err => console.log(err))
                })
        } else {
            alert("Hay items sin stock.")
        }
}

if (orderId) {
    return (
        <div className="container my-5">
            <h2>Tu compra se realizó correctamente!</h2>
            <hr/>
            <p>Tu número de compra es: <strong>{orderId}</strong></p>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>
    )
}

if (cart.length === 0) {
    return <Navigate to="/"/>
}

return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          value={values.nombre}
          type="text"
          placeholder="Nombre"
          onChange={handleInputChange}
          className="form-control my-2"
          name="nombre"
        />

        <input
          value={values.direccion}
          type="text"
          placeholder="Dirección"
          onChange={handleInputChange}
          className="form-control my-2"
          name="direccion"
        />

        <input
          value={values.email}
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          className="form-control my-2"
          name="email"
        />

        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;