import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  isLoading: state.jokes.loading,
  items: state.jokes.dataJokes,
});
export default connect(mapStateToProps)(App);
