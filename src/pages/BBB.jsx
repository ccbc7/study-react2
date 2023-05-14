import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import Link from "next/link"

export default function SampleHTML() {
  return (
    <>
      <Header/>
      <main>
        <Headline title="BBB" />
        <section>
          <h2>About Us</h2>
          <p>We are a company that values...</p>
          <Link href="/AAA">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to AAA
            </button>
          </Link>
        </section>
        <section>
          <h2>Our Services</h2>
          <p>We offer a wide range of services...</p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>You can reach us at...</p>
        </section>
      </main>
      <Footer/>
    </>
  );
}

