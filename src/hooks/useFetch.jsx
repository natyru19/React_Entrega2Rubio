import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
      })
      .catch((e) => console.log(e));
  }, []);
  return { data };
};
