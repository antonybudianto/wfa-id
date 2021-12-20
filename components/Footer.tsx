import Link from "next/link";
import React from "react";

function Footer({ twClass = "" }) {
  return (
    <footer
      className={`container w-full xl:w-6/12 flex justify-evenly mx-auto my-2 px-5 py-10 border-t rounded-lg text-sm ${twClass}`}
    >
      <div className="">
        <img
          className="mb-2"
          src="/favicon.ico"
          alt="favicon-footer"
          width="34"
          height="34"
        />
        <small className="d-block mb-3 text-gray-500">© WFA-ID. 2022.</small>
      </div>
      <div className="">
        <h5 className="text-gray-500">Resources</h5>
        <ul className="list-unstyled">
          <li>
            <a
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
              href="https://github.com/antonybudianto/wfa-id"
            >
              GitHub wfa-id
            </a>
          </li>
          <li>
            <a
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
              href="https://twitter.com/antonybudianto/status/1471428324140347397"
            >
              WFA List on Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <h5 className="text-gray-500">About</h5>
        <ul className="list-unstyled text-small">
          <li>
            <Link href="/contact">
              <a className="text-blue-500 hover:underline">Kontak kami</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a className="text-blue-500 hover:underline">
                Syarat dan Ketentuan
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
