export const fetchRecentGrants = async () => {
    const res = await fetch(
      `http://localhost:3000/api/getRecentGrants`
    );
    const data = await res.json();
    const recentGrants: Post[] = data.recentGrants;
    
    console.log(recentGrants);
    return recentGrants;
  };
  