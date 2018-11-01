import { connect } from 'react-redux';
import Search from '../components/Search';
import { setSearchInput, setSearchCategory, performSearch } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchInput: state.searchInput,
    searchCategory: state.searchCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (searchInput) => {
      dispatch(setSearchInput(searchInput));
    },
    handleSubmit: (event) => {
      event.preventDefault();
      dispatch(performSearch());
    },
    setSearchCategory: (searchCategory) => {
      dispatch(setSearchCategory(searchCategory));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
