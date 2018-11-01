function searchCategory(state = '', action) {
  switch (action.type) {
    case 'SET_SEARCH_CATEGORY':
      return action.searchCategory;
    default:
      return state;
  }
}

export default searchCategory;
