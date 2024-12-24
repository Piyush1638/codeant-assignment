"use client";
import RepositoryList from "@/components/repos/RepositoryList";
import Sidebar from "@/components/repos/Sidebar";
import React from "react";
import Image from "next/image";
import { LuRefreshCw } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import Navbar from "@/components/repos/Navbar";

const page = () => {
  const [search, setSearch] = React.useState<string>("");
  const [totalRepos, setTotalRepos] = React.useState<number>(0);
  return (
    <div className="flex lg:flex-row flex-col min-h-screen sm:h-screen">
      <Sidebar />
      <Navbar/>
      <main className="flex-1 sm:p-6  bg-[#FAFAFA] min-h-screen">
        <div className="bg-white rounded-xl border border-[#E9EAEB] h-full overflow-y-auto pt-4 px-4">
          <header className="flex sm:flex-row flex-col sm:justify-between gap-2 sm:items-center py-4">
            <h1 className="text-2xl font-semibold flex flex-col">
              Repositories
              <span className="text-sm text-[#414651] font-light">
                {totalRepos} total repositories
              </span>
            </h1>
            <div className="flex items-center gap-2">
              <button className="text-sm w-1/2 sm:w-fit px-4 py-2 border border-[#D5D7DA] text-[#414651] rounded-lg shadow flex-container  gap-2">
                <span>
                  <LuRefreshCw size={20} />
                </span>
                Refresh
              </button>
              <button className="bg-blue-500 text-sm w-1/2 sm:w-fit text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex-container gap-2">
                <span>
                  <AiOutlinePlus size={20} />
                </span>{" "}
                Add Repository
              </button>
            </div>
          </header>
          <div className="bg-white rounded-lg w-full md:w-2/5 border border-[#D5D7DA] flex-container gap-2 py-3 px-2 mb-4">
            <Image src="/repos/search.svg" alt="..." height={24} width={24} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Repositories"
              className="w-full rounded-lg outline-none placeholder:text-[#414651]"
            />
          </div>
          <RepositoryList search={search} setTotalRepos={setTotalRepos} />
        </div>
      </main>
    </div>
  );
};

export default page;
