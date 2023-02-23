const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/plants`

const index = async (): Promise<any> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export {
  index,
};
