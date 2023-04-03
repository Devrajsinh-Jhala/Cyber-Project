import Navbar from "@/components/Navbar";
import PostList from "@/components/PostList";

import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const recentPostsQuery = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)[0...4]
`;

const Home = async () => {
  // console.log(recentScholarships);
  const recentPosts = await sanityClient.fetch(recentPostsQuery);

  return (
    <main>
      <Navbar />

      <main className="max-w-[900px] mx-auto">
        <p className="max-w-[850px] mx-auto">Recent Grants and Scholarships:</p>
        <PostList posts={recentPosts} />
      </main>
    </main>
  );
};
export default Home;
