import Image from "next/image";
import Chair from "@/public/chair.png";
const Chairimage = () => {
  return (
    <div className="ml-[131px] w-[1440px] h-[1074px] flex justify-center items-center bg-white">
      <Image
        className="shrink-0"
        src={Chair}
        width={457}
        height={533}
        alt="chair"
      />
    </div>
  );
};

export default Chairimage;
