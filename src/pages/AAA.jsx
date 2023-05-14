// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
// import { Headline } from "../components/Headline";
import { Header } from "@/components/Header";
import { Headline } from "@/components/Headline";
import { Footer } from "@/components/Footer";// 絶対パスがわかりやすい！
import Link from "next/link"

export default function SampleHTML() {
  return (
    <>
      <Header/>
      <main>
        <Headline
        title="AAA"
        number={1}
        array={[1, 2, 3]}
        obj={{ foo: "foo", bar: "bar" }}
        boolean={false}
        // boolean
        comp={<code>hogehoge</code>} // propにjsxを渡す
        onClick={() => alert("クリック！")}
        kid// チルドレン
        />

        <section>
          <Link href="/BBB">
            <div class='flex justify-center items-center '>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                Go to BBB
              </button>
            </div>
          </Link>
        </section>

        <section>
          <h2>Our Services</h2>
          <p class="font-bold text-center">We offer a wide range of services...</p>
        </section>
        <section>
          <h2>記事１</h2>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
        </section>
        <section>
          <h2>記事２</h2>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
        </section>
        <section>
          <h2>記事３</h2>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
        </section>
        <section>
          <h2>記事４</h2>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
        </section>
      </main>
      <Footer/>
    </>
  );
}
