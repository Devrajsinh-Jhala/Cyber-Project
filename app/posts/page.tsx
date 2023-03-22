import React from "react";
import { groq } from "next-sanity";
import PostsComponents from "@/components/PostsComponent";
import Navbar from "@/components/Navbar";
import { sanityClient } from "@/sanity";
import PostList from "@/components/PostList";

const allPostsQuery = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const Posts = async () => {
  const allPosts = await sanityClient.fetch(allPostsQuery);
  return (
    <main>
      <Navbar />

      <main className="max-w-[900px] mx-auto">
        <PostsComponents posts={allPosts} />
      </main>
    </main>
  );
};

export default Posts;
