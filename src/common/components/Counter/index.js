import React, { PropTypes } from 'react';

const Counter = ({
  count,
  onIncrement,
  onDecrement,
}) => (
  <div>
    Clicked: {count} times
    {' '}
    <button onClick={onIncrement}>
      +
    </button>
    {' '}
    <button onClick={onDecrement}>
      -
    </button>
    {' '}
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  count: 0,
  onIncrement: () => {},
  onDecrement: () => {},
};

export default Counter;
