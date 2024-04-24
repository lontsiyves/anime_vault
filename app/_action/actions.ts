"use server";

export const fetchAnime = async (page: number) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}?page=${page}&limit=8&order=popularity`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
