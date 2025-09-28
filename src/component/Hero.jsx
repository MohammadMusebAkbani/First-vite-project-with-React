import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="px-[1rem] max-w-[55rem] m-auto py-[8rem] text-center">
      <h1 className="max-[500px]:text-3xl text-7xl font-bold font-serif">
        The best way to <br />
        <span className="bg-amber-200 rounded-3xl px-3"> review</span> creative
        assets
      </h1>

      <p className="text-lg py-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus
        ut metus interdum fringilla vitae sed neque. Nulla facilisi. Sed varius,
        mauris vitae dictum rutrum.
      </p>
      <div className="text-3xl">
        <Button tittle="Join Subscription" />
      </div>
    </div>
  );
}

export default Hero;
