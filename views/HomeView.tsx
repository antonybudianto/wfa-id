import React, { useCallback, useState } from "react";
import Head from "next/head";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { COMPANY_DATA } from "../data/company";

const SEARCH_FIELDS = ["name", "desc"];

function CompanyList({ search }) {
  const list = COMPANY_DATA.filter((d) => {
    if (search === "") return true;
    return SEARCH_FIELDS.some(
      (sf) => d[sf].toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  if (list.length === 0) {
    return (
      <div className="text-center px-4 py-4 my-2 bg-yellow-50 text-gray-600 rounded-lg shadow">
        Hasil pencarian tidak ditemukan :(
      </div>
    );
  }

  return (
    <>
      {list.map((d, i) => (
        <div
          key={i}
          className="flex px-4 py-4 my-2 bg-white hover:bg-blue-50 rounded-lg shadow"
        >
          <div>
            <img width="80" height="80" alt="pinhome" src={d.img} />
            <div className="text-gray-600 font-semibold">{d.name}</div>
          </div>
          <div className="w-full ml-10 flex flex-col justify-between text-gray-600 text-sm text-right">
            <div className="">{d.desc}</div>
            <div className="mt-2 space-x-3 text-right">
              <a
                href={d.urlLinkedin}
                className="text-blue-500 underline"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={d.urlCareer}
                className="text-blue-500 underline"
                rel="noopener noreferrer"
              >
                Career page
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function HomeView() {
  const [search, setSearch] = useState("");

  return (
    <div className="">
      <Head>
        <title>WFA-ID | Temukan job WFA impianmu disini </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage: "url(/bg.jpg)",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-contain lg:bg-cover h-screen overflow-y-auto xl:bg-covser flex items-cfenter justify-center pt-10"
      >
        <div className="px-6 sm:px-6 md:px-8 py-6 w-full h-fit sm:w-10/12 lg:w-8/12 xl:w-6/12 bg-white/80 rounded-lg">
          <div className="text-center">
            <h1 className="text-4xl sm:text-4xl leading-none font-extrabold tracking-tight text-gray-500 mt-8 mb-8 sm:mt-14 sm:mb-10">
              WFA ID
            </h1>
            <p className="text-gray-500 text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
              Saatnya temukan job WFA impianmu disini!
            </p>
            <div className="flex md:flex-row flex-wrap justify-center space-y-2 sm:space-y-0 sm:space-x-4 ">
              <input
                type="text"
                placeholder="masukkan kata kunci..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-auto px-6 py-3 text-center lg:text-left text-xl text-gray-600 font-bold shadow border rounded-lg"
              />
            </div>
            <div className="mt-14">
              <CompanyList search={search} />
            </div>
            <div className="rounded-lg py-4 bg-white/50 text-gray-500 text-sm">
              <div>Note: Data didapatkan dari profil LinkedIn</div>
              <div className="mt-2">
                Background by{" "}
                <a
                  className="underline text-blue-500"
                  href="https://unsplash.com/@dan0911?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Daniel Faust
                </a>{" "}
                on{" "}
                <a
                  className="underline text-blue-500"
                  href="https://unsplash.com/s/photos/bali-villa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Unsplash
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeView;
