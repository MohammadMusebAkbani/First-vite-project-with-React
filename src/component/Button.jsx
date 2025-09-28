import React from "react";

function Button({tittle}) {
  return (
    <button
      className="max-[500px]:text-sm bg-red-600 text-[white] rounded-[10px] px-4 py-2 hover:bg-red-900 duration-200"
      onClick={() => alert("Hello")}
    >
      {tittle}
    </button>
  );
}

export default Button;
