// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

const query = groq`
*[_type == 'grants']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
type Data = {
  grants: Post[];
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const scholarships: Post[] = await sanityClient.fetch(query);
//   res.status(200).json({ scholarships });
// }

export async function GET(request: Request) {
    const grants: Data = await sanityClient.fetch(query);
    return new Response(JSON.stringify(grants), {
        status: 200,
      });
  }
  
