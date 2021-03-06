import React from "react";
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
          className="flex justify-around px-4 py-4 my-2 bg-white hover:bg-blue-50 rounded-lg shadow"
        >
          <div className="text-left flex flex-col">
            <div
              style={{
                width: "50px",
                height: "50px",
              }}
              className="overflow-hidden border"
            >
              <img alt={d.name} src={d.img} />
            </div>
            <div className="text-sm lg:w-32 text-gray-600 leading-tight font-semibold mt-2">
              {d.name}
            </div>
          </div>
          <div className="w-full ml-10 flex flex-col justify-between text-gray-600 text-sm text-right">
            <div>{d.desc}</div>
            <div className="mt-2 space-x-3 text-right">
              <a
                href={d.urlLinkedin}
                className="text-blue-700 hover:underline"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={d.urlCareer}
                className="text-blue-700 hover:underline"
                rel="noopener noreferrer"
              >
                Career
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CompanyList;
