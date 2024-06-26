import { useState } from "react";
import axios from "axios";

// const API_KEY =
const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;

const useGif = (tag) => {
  const [gif, setGif] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchGif(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useState(() => {
    fetchGif(`random`);
  }, []);

  return { gif, loading, fetchGif };
};

export default useGif;
