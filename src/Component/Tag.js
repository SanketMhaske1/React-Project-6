import React, { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

function Tag() {
  const [imageSource, setImageSource] = useState();
  const [inputValue, setInputValue] = useState();
  const [loading, setLoading] = useState(false);

  function changeHandler(event) {
    setInputValue(event.target.value);
  }

  function clickHandler() {
    fetchGif();
  }

  async function fetchGif() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S&tag=${inputValue}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setImageSource(imageSource);
    setLoading(false);
  }

  useState(() => {
    fetchGif();
  }, []);

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <p className=" mt-[15px] text-2xl font-bold  uppercase">
        random {inputValue} gif
      </p>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <img src={imageSource} width="450"></img>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
        className="w-10/12  text-lg py-2 rounded-lg mb-[3px] border border-black text-center"
      />
      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      >
        Genderate
      </button>
    </div>
  );
}

export default Tag;
