import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

const query = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
type Data = {
  posts: Post[];
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const scholarships: Post[] = await sanityClient.fetch(query);
//   res.status(200).json({ scholarships });
// }

export async function GET(request: Request) {
    const posts: Data = await sanityClient.fetch(query);
    return new Response(JSON.stringify(posts), {
        status: 200,
      });
  }