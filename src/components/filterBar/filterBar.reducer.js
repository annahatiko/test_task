const defaultFiltersState = {
  searchStr: '',
  searchCategories: []
};

export default (filtersState = defaultFiltersState, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'CHANGE_SEARCH_STR':
            return {
                ...filtersState, searchStr: payload
            }
        case 'ADD_SEARCH_CATEGORY':
            return {
                ...filtersState, searchCategories: [...filtersState.searchCategories, payload]
            }
        case 'REMOVE_SEARCH_CATEGORY':
            return {
                ...filtersState, searchCategories: [...filtersState.searchCategories.filter( item => item !== payload )]
            }
        default:
            return filtersState
    }
}