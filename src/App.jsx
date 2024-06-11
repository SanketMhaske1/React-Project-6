import Heading from "./Component/Heading";
import Random from "./Component/Random";
import Tag from "./Component/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background  overflow-x-hidden items-center">
      <Heading />
      <div className=" flex flex-col w-full  items-center gap-y-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
