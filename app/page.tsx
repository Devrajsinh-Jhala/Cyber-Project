import HeroSection from "@/components/HeroSection";
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
        <div className="px-10 md:px-0">
          <HeroSection />
        </div>
        <PostList posts={recentPosts} />
      </main>
    </main>
  );
};
export default Home;
