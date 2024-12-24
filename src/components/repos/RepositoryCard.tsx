import { Repos } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getTimeAgo = (dateString: Date) => {
  const updatedDate = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - updatedDate.getTime();

  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "1 day ago";
  return `${diffInDays} days ago`;
};

const RepositoryCard = ({ repo }: { repo: Repos }) => {
  return (
    <Link
      href={repo.clone_url}
      target="blank"
      className="h-[108px] border-b hover:bg-[#FAFAFA] p-4 shadow-sm flex justify-between items-center"
    >
      <div>
        <h2 className="text-xl font-medium text-font flex items-center gap-2">
          <span className="truncate max-w-[200px] sm:max-w-[300px]">
            {repo.name}{" "}
          </span>
          <span className="bg-[#EFF8FF] border border-[#B2DDFF] py-1 px-2 text-sm text-[#175CD3] rounded-full">
            {repo.visibility[0].toUpperCase() + repo.visibility.slice(1)}
          </span>
        </h2>
        <div className="text-sm flex items-center gap-4">
          <span className="flex items-center text-font gap-1">
            {repo.language || "Unknown"}{" "}
            <span className="text-3xl text-[#1570EF]">•</span>
          </span>
          <span className="flex items-center gap-1 text-font">
            <Image
              src={"/repos/database.svg"}
              alt="..."
              height={12}
              width={10.5}
            />
            {repo.size}KB
          </span>
          <span className="text-font">
            Updated {getTimeAgo(repo.updated_at)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RepositoryCard;
