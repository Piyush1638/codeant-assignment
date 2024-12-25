"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import RepositoryCard from "./RepositoryCard";
import { Repos } from "@/lib/types/types";

const RepositoryList = ({
  search,
  setTotalRepos,
}: {
  search: string;
  setTotalRepos: Dispatch<SetStateAction<number>>;
}) => {
  const [repositories, setRepositories] = useState<Repos[]>([]);
  const [searchRepository, setSearchRepository] = useState<Repos[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/piyush1638/repos"
      );
      const data = await response.json();
      setRepositories(data);
      setTotalRepos(data.length);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search === "") {
      setSearchRepository(repositories);
    } else {
      const filtered = repositories.filter((repo: Repos) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchRepository(filtered);
    }
  }, [search, repositories]);

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="h-full flex justify-center items-center py-20">
          <div className="h-10 w-10 rounded-full animate-spin border-b border-blue-500 mx-auto my-auto" />
        </div>
      ) : searchRepository.length > 0 ? (
        searchRepository.map((repo: Repos, index: number) => (
          <RepositoryCard key={index} repo={repo} />
        ))
      ) : (
        <div className="h-full flex justify-center items-center py-20">
          <h1 className="text-xl font-semibold text-font">
            No repositories found
          </h1>
        </div>
      )}
    </div>
  );
};

export default RepositoryList;
