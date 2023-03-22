export const fetchAllScholarships = async () => {
    const res = await fetch(
      `http://localhost:3000/api/getAllPosts`
    );
    const data = await res.json();
    const posts: Post[] = data.posts;
    console.log(posts)
    return posts;
  };