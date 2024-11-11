import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.css";
import { useEffect } from "react";

export default function CatImage() {
  const [catImg, setCatImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCatImg(response.data[0].url);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  //   const url = response.data[0].url;
  return (
    <div className={styles.container}>
      {isLoading ? <p>loading...</p> : <img src={catImg} alt="" />}
      <button onClick={getData}>change cat</button>
    </div>
  );
}
