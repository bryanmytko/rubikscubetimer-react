import PropTypes from 'prop-types';
import React from 'react';
import ScrambleService from '../../services/ScrambleService';

const Scramble = props => (
  <p>{ new ScrambleService(props.puzzle, props.scrambleLength).call() }</p>
);

Scramble.propTypes = {
  puzzle: PropTypes.string.isRequired,
  scrambleLength: PropTypes.number.isRequired,
};

export default Scramble;
