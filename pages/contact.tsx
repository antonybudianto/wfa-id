import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Kontak kami</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-16 pt-12 pb-20 bg-white text-gray-600">
        <div className="pb-10">
          <h1 className="font-extrabold text-4xl text-gray-600 py-5">
            Kontak kami
          </h1>
          <div>
            <p>
              Hi, WFA-ID merupakan projek open-source software untuk membantu
              pencarian perusahaan/start-up yang menawarkan benefit WFA
              (Work-From-Anywhere) atau WFH Permanent; dimana pekerja dapat
              bekerja dari mana saja tanpa perlu ke kantor.
              <br /> Seluruh sumber kode untuk situs ini bersifat terbuka
              (open-souce), dan dapat diakses di{" "}
              <a
                rel="noreferrer noopener"
                className="text-blue-500 hover:underline"
                href="https://github.com/antonybudianto/wfa-id"
              >
                GitHub
              </a>
            </p>
            <p className="mt-5">
              Apabila kamu memiliki kritik, saran, atau masukan untuk situs ini,
              silahkan mengunjungi{" "}
              <a
                rel="noreferrer noopener"
                className="text-blue-500 hover:underline"
                href="https://github.com/antonybudianto/wfa-id"
              >
                GitHub
              </a>{" "}
              kami.
            </p>
            <p>Terima kasih.</p>
          </div>
          <div className="mt-5 text-blue-500 hover:underline">
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
