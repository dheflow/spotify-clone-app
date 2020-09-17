export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: "BQBdOuAoTR2kHcRGkpK5ooayrokzadcqRWZkxHyH1yYtzzjdKd6ZJ-kBIvUd4HROY4EjOMHgPujxyYPxFlFjYYfeA9gJiSfYCpwDmW_t-zKMAtnMOXYARXpQVqWkSaa47f-jHgOlZj6oFPPy8sVi7EQoJKn4duk3rUhXiupKj9yJtbc6fha8",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state;
  }
}

export default reducer;