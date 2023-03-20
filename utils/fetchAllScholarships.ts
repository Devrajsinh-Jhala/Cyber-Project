export const fetchAllScholarships = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllScholarships`
    );
    const data = await res.json();
    const scholarships: Post[] = data.scholarships;
  
    return scholarships;
  };
  