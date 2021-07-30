import axios from "axios";

export const blockApi = async () => {
  const { data } = await axios(
    "https://rpback.com/api/games/test_blocks?project_id=2"
  );
  return data.blocks;
};

export const minuteApi = async () => {
  const { data } = await axios.get(
    "https://rpback.com/api/games/test_minutes?project_id=2"
  );
  return data.minutes;
};

export const categoryApi = async () => {
  const { data } = await axios(
    "https://rpback.com/api/games/test_categories?project_id=2"
  );
  return data.categories;
};
