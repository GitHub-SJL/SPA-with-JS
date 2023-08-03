export const fetchData = async (product) => {
    const response = await fetch(`/data/${product}.json`);
  const data = await response.json();

  return data;
};