import { useEffect } from "react";

export default function Life() {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, [])

  return (
    <>
      <div class="flex justify-center items-center m-4">
        <button
          // onClick={handleClick}
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          ボタン
        </button>
      </div>
    </>
  );
}
