import axios from "axios";
import React, { useEffect, useState } from "react";

function Random({ props }) {
  const [gif, setGif] = useState("");

  async function fetchGif() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;

    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
  }
  useEffect(() => {
    fetchGif();
  }, []);

  function clickHandler() {
    fetchGif();
  }

  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <p className=" mt-[15px] text-2xl font-bold  uppercase">A RANDOM GIF</p>
      <img src={gif} width="450"></img>
      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={clickHandler}
      >
        Genderate
      </button>
    </div>
  );
}

export default Random;
