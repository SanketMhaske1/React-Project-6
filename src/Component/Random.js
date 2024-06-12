import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random({ props }) {
  const { gif, loading, fetchGif } = useGif();

  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <p className=" mt-[15px] text-2xl font-bold  uppercase">A RANDOM GIF</p>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <img src={gif} width="450" alt="randomGif"></img>
      )}
      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={() => fetchGif()}
      >
        Genderate
      </button>
    </div>
  );
}

export default Random;
