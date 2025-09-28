import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="py-2 px-5 bg-amber-200">
      <header className="flex px-[1rem] justify-between m-auto items-center text-xl">
        <h1 className="text-3xl">
          <span className="text-[tomato] font-extrabold">B</span>rand
        </h1>
        <div className="flex gap-7 items-center max-[770px]:hidden">
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
        </div>
        <Button tittle={"Join Us"} />
      </header>
    </div>
  );
}

export default Header;
