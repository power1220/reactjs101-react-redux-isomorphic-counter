import 'babel-polyfill';
import { connect } from 'react-redux';
import Counter from '../../components/Counter';

import {
  incrementCount,
  decrementCount,
} from '../../actions';

const mapStateToProps = (state) => ({
  count: state.getIn(['count', 'count']),
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => (
    dispatch(incrementCount())
  ),
  onDecrement: () => (
    dispatch(decrementCount())
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
