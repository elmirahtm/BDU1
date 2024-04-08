import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className=" ">
      <div className="w-full h-[2rem] bg-cyan-950 ">
        <div className="flex justify-end items-center gap-28 max-sm:gap-0   text-slate-50 ">
          <div className="flex mr-5  max-sm:mr-10 ">
            <Link href={"tel:0506807170"}>
              <h4 className="hover:text-yellow-400 hover:border-b-2 hover:transition duration-300 hover:border-yellow-400">
                Tələbədən rektora{" "}
              </h4>
            </Link>
            <Link href={"tel:0506807170"}>
              <h4 className="mx-3 hover:text-yellow-400 hover:border-b-2 hover:transition duration-300 hover:border-yellow-400 ">
                Əlaqə
              </h4>
            </Link>
          </div>
          <div className="flex gap-4 mr-64 max-sm:mr-20 max-md:mr-20 max-lg:mr-40">
            <p className=" h-[30px] bg-slate-100 text-black px-1 ">az</p>
            <p className=" hover:text-yellow-400 hover:border-b-2 hover:transition duration-300 hover:border-yellow-400 ">
              ru
            </p>
            <p className=" hover:text-yellow-400 hover:border-b-2 hover:transition duration-300 hover:border-yellow-400">
              en
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[6px] bg-yellow-600">
        
      </div>
      <div>
        <Image className="m-auto" src="/image.png" alt="png" width={1200} height={120}  />
      </div>
      <div className="w-full h-[3px] bg-yellow-600"> </div>
    </div>
  );
};

export default Homepage;
