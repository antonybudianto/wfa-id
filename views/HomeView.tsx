import React, { useCallback, useState } from "react";
import Head from "next/head";

import Footer from "../components/Footer";
import CompanyList from "../components/CompanyList";
import Link from "next/link";

function HomeView() {
  const [search, setSearch] = useState("");

  return (
    <div className="relative">
      <Head>
        <title>WFA-ID | Temukan job WFA impianmu disini </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundImage: "url(/bg.jpg)",
        }}
        className="w-full absolute bg-cover bg-no-repeat bg-center"
      >
        <div
          className="relative h-60 xl:h-96"
          style={{
            marginBottom: "-1px",
            transform: "rotate(180deg)",
          }}
        >
          <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgba(255,255,255,1)"
              d="M 0 101 C 349.5 101 349.5 39 699 39 L 699 39 L 699 0 L 0 0 Z"
              strokeWidth="0"
            ></path>{" "}
            <path
              fill="rgba(255,255,255,1)"
              d="M 698 39 C 1069 39 1069 74 1440 74 L 1440 74 L 1440 0 L 698 0 Z"
              strokeWidth="0"
            ></path>{" "}
          </svg>
        </div>
      </div>
      <div className="container relative flex justify-center mx-auto w-full xl:w-6/12 overflow-y-auto">
        <div className="px-6 sm:px-6 md:px-12 py-2 mt-8 h-fit w-full bg-white/0 rounded-lg">
          <div className="text-center">
            <div>
              <div className="text-4xl inline-block rounded bg-white/80 px-4 py-2 font-extrabold my-2">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                  WFA ID
                </h1>
              </div>
            </div>
            <div className="bg-white/90 inline-block rounded px-4 py-2">
              <p className="bg-clip-text lg:text-xl text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                Saatnya temukan job WFA impianmu disini!
              </p>
            </div>
            <div className="flex mt-10 md:flex-row flex-wrap justify-center space-y-2 sm:space-y-0 sm:space-x-4 ">
              <input
                type="text"
                placeholder="masukkan kata kunci..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-auto px-6 py-3 text-center text-xl text-gray-600 font-bold shadow border rounded-lg focus:outline-none focus:ring focus:border-green-500"
              />
            </div>
            <div className="mt-10">
              <CompanyList search={search} />
            </div>
            <div className="rounded-lg mt-5 py-4 px-2 bg-white/90 text-gray-500 text-sm">
              <div>
                <strong>Note:</strong> Data didapatkan langsung dari profil
                LinkedIn. Apabila menemukan kesalahan data, silakan{" "}
                <Link href="/contact">
                  <a className="hover:underline text-blue-500">Kontak kami</a>
                </Link>
                . Terima kasih.
              </div>
              <div className="mt-2">
                Background by{" "}
                <a
                  className="hover:underline text-blue-500"
                  rel="noopener noreferrer"
                  href="https://unsplash.com/@dan0911?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Daniel Faust
                </a>{" "}
                on{" "}
                <a
                  className="hover:underline text-blue-500"
                  rel="noopener noreferrer"
                  href="https://unsplash.com/s/photos/bali-villa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Unsplash
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer twClass="bg-white/80" />
    </div>
  );
}

export default HomeView;
