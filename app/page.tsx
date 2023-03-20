import Navbar from "@/components/Navbar";
import PostList from "@/components/PostList";
import { GetServerSideProps } from "next";

import { fetchRecentGrants } from "@/utils/fetchRecentGrants";
import { fetchRecentScholarships } from "@/utils/fetchRecentScholarships";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const recentGrantsQuery = groq`
*[_type == 'grants']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)[0...3]
`;
const recentScholarshipsQuery = groq`
*[_type == 'scholarships']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)[0...3]
`;

const Home = async () => {
  // console.log(recentScholarships);
  const recentScholarships = await sanityClient.fetch(recentScholarshipsQuery);
  const recentGrants = await sanityClient.fetch(recentGrantsQuery);

  return (
    <main>
      <Navbar />

      <main className="max-w-[900px] mx-auto">
        <p className="max-w-[850px] mx-auto">Recent Scholarships:</p>
        <PostList posts={recentScholarships} />
        <p className="max-w-[850px] mx-auto">Recent Grants:</p>
        <PostList posts={recentGrants} />
      </main>
    </main>
  );
};
export default Home;
