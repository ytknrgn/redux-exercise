import { connect } from 'react-redux';
import Results from '../components/Results';
import {} from '../actions';

const mapStateToProps = (state) => {
  return {
    results: state.searchResults,
  };
};

export default connect(mapStateToProps)(Results);
