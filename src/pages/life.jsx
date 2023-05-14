import { useEffect } from "react";
import React, { useState } from "react";


export default function Life() {
  const [count, setCount] = useState(1); // 分割代入

  const handleClick = (e) => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [])

  return (
    <>
      <h1 className="text-4xl flex justify-center m-4">
        {count}
      </h1>
      <div className="flex justify-center items-center m-4">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          ボタン
        </button>
      </div>
    </>
  );
}
