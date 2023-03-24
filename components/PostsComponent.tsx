"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import urlFor from "@/sanity";
import ClientSideRoute from "./ClientSideRoute";
import { usePagination, Pagination } from "pagination-react-js";

type Props = {
  posts: Post[];
};

const PostsComponent = ({ posts }: Props) => {
  // Tags Functionality
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterWorks, setFilterWorks] = useState<Post[]>([]);
  const handleFilter = (item: any) => {
    setActiveFilter(item);
    if (item == "All") {
      setFilterWorks(posts);
    } else {
      setFilterWorks(posts.filter((post) => post.categories[0].title === item));
    }
  };

  useEffect(() => {
    setFilterWorks(posts);
  }, []);

  // Search Functionality
  const [search, setSearch] = useState("");

  // Implement Pagination
  const { currentPage, entriesPerPage, entries } = usePagination(1, 4);
  return (
    <section className="">
      <hr className="border-[#f7ab0a] mb-10" />
      <form className="max-w-[900px] px-10 mx-auto">
        <label className="mb-5 block">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="shadow border rounded py-2 px-3 mt-1 block w-full focus:outline-none ring-yellow-500"
            type="text"
            placeholder="Search grants or scholarships by title..."
          />
        </label>
        {/* Tags */}
        <div className="tag flex items-center gap-5 mt-5 mb-10 max-w-[900px] mx-auto justify-start">
          {["All", "Scholarships", "Grants"].map((item, i) => (
            <div
              key={i}
              onClick={() => handleFilter(item)}
              className={`${
                activeFilter === item
                  ? "activeFilter text-white bg-blue-500"
                  : ""
              } tags px-2 py-1 border hover:text-white hover:bg-blue-500 border-gray-500 rounded-lg cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {filterWorks
          .filter((post) => {
            return search.toLowerCase() == ""
              ? post
              : post.title.toLowerCase().includes(search.toLowerCase());
          })
          .slice(entries.indexOfFirst, entries.indexOfLast)
          .map((post) => (
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <div className="flex flex-col cursor-pointer group">
                <div className="relative w-full z-[-10] h-52 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    className="object-cover   lg:object-center"
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                    <div>
                      <p className="font-bold">{post.title}</p>

                      <p>
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {post.categories.map((category, i) => (
                        <div
                          key={i}
                          className="bg-[#f7ab0a] text-xs text-center text-black px-3 py-1 rounded-full font-semibold"
                        >
                          <p>{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex-1">
                  <p className="line-clamp-1 underline text-lg font-bold">
                    {post.title}
                  </p>
                  <p className="line-clamp-1 text-sm">{post.description}</p>
                </div>
              </div>
            </ClientSideRoute>
          ))}
      </div>
      <Pagination
        entriesPerPage={entriesPerPage.get}
        totalEntries={filterWorks.length}
        currentPage={{ get: currentPage.get, set: currentPage.set }}
        offset={3}
        classNames={{
          wrapper: "pagination m-auto",
          item: "pagination-item",
          itemActive: "pagination-item-active",
          navPrev: "pagination-item nav-item",
          navNext: "pagination-item nav-item",
          navStart: "pagination-item nav-item",
          navEnd: "pagination-item nav-item",
          navPrevCustom: "pagination-item",
          navNextCustom: "pagination-item",
        }}
        showFirstNumberAlways={true}
        showLastNumberAlways={true}
        navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navPrevCustom={{
          steps: 5,
          content:
            "Prev" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
        }}
        navNextCustom={{
          steps: 5,
          content:
            "Next" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
        }}
      />
    </section>
  );
};

export default PostsComponent;
