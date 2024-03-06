export const GetAllCards = async () => {
  try {
    const data = await fetch(`/seed/seed.json`);
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
};
