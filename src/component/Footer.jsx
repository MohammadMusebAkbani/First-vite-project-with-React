import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <div className="py-5 px-3 bg-amber-200">
      <header className="px-[1rem] m-auto text-xl pb-8 grid grid-cols-5 max-[400px]:grid-cols-1 max-[770px]:gap-[2rem] max-[770px]:grid-cols-2">
        <h1 className="text-3xl">
          <span className="text-[tomato] font-extrabold">B</span>rand
        </h1>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
          <a href="">Portfolio</a>
          <a href="">Portfolio</a>
          <a href="">Portfolio</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
        </div>
      </header>
      <div className="bg-[tomato] w-full h-[1px]"></div>
      <div className="px-[1rem] flex m-auto justify-between pt-1 max-[770px]:flex-col max-[770px]:gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          ad.
        </p>
        <div className="flex gap-8">
          <div className=" w-7 h-7 rounded-full">
            <a
              href=""
              className="w-full h-full flex items-center justify-center"
            >
              <BsFacebook size="28" className="w-full h-full text-blue-950" />
            </a>
          </div>
          <div className=" w-7 h-7 rounded-full text-red-950">
            <a
              href=""
              className="w-full h-full flex items-center justify-center"
            >
              <RiInstagramFill size="28" className="w-full h-full" />
            </a>
          </div>
          <div className=" w-7 h-7 rounded-full">
            <a
              href=""
              className="w-full h-full flex items-center justify-center"
            >
              <SiWhatsapp size="28" className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
