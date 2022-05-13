const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialState = { categories: [] };
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const checkReducer = (state = initialState, { type }) => {
  switch (type) {
    case CHECK_STATUS:
      return { categories: ['Under construction...'] };
    default:
      return state;
  }
};

export default checkReducer;
