export const fetchAllGrants = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllGrants`
    );
    const data = await res.json();
    const grants: Post[] = data.grants;
  
    return grants;
  };
  