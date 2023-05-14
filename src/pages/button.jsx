import { useCallback } from "react";

export default function Button() {
  const foo =1;
  const handleClick = useCallback((e) => {
    alert("returnの前に関数を使用する場合、関数に名前が必要。関数は煩雑にならないのであれば、コンポーネントの外で定義することがある。しかし、引数などがおおくなってしまう場合、コンポーネントの中に定義されるが、その場合、useCallbackを使い、再レンダリングされた場合に再びロードるすることを防ぐ機能を設置する。この関数は、コンポーネント内で定義されている。onclick内に大量に書くと、見づらいので書かない");
    alert(foo);
  }, []);

  return (
  <>
    <div class='flex justify-center items-center m-4'>
      <button
        onClick={function (e){
          alert("blue");
        }}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mr-4"
      >
        ボタン
      </button>

      <a
        href="/BBB"
        onClick={(e) => {
          alert('red');
          console.log(e.target.href);
        }}
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mr-4"
      >
        ボタン
      </a>

      <button
        onClick= {handleClick}
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center"
      >
        ボタン
      </button>
    </div>
  </>
  )
}
