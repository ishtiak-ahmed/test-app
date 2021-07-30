import { blockApi, categoryApi, minuteApi } from "../../Api";

export const LOAD_BLOCKS = "LOAD_BLOCKS";

export const LOAD_MINUTES = "LOAD_MINUTES";

export const LOAD_CATEGORY = "LOAD_CATEGORY";

export const loadCourse = () => async (dispatch: any) => {
  try {
    const blocks = await blockApi();
    dispatch({
      type: LOAD_BLOCKS,
      payload: {
        blocks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadMinutes = () => async (dispatch: any) => {
  try {
    const minutes = await minuteApi();
    dispatch({
      type: LOAD_MINUTES,
      payload: {
        minutes,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadCategory = () => async (dispatch: any) => {
  try {
    const categories = await categoryApi();
    dispatch({
      type: LOAD_CATEGORY,
      payload: { categories },
    });
  } catch (error) {
    console.log(error);
  }
};
