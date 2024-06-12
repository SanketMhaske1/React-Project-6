import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {
  const [tag, setTag] = useState();
  const { gif, loading, fetchGif } = useGif(tag);

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <p className=" mt-[15px] text-2xl font-bold  uppercase">
        random {tag} gif
      </p>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <img src={gif} width="450" alt="tagGif"></img>
      )}
      <input
        type="text"
        value={tag}
        onChange={(event) => {
          setTag(event.target.value);
        }}
        className="w-10/12  text-lg py-2 rounded-lg mb-[3px] border border-black text-center"
      />
      <button
        onClick={() => fetchGif(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      >
        Genderate
      </button>
    </div>
  );
}

export default Tag;
