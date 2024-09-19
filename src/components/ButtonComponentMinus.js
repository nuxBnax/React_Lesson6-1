import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../reducers/counterSlice';

const ButtonComponentMinus = (props) => {
	return (
		<button onClick={props.decrement}> Minus 1</button>
	);
}

const mapDispatchToProps = {
	decrement
}
export default connect(null, mapDispatchToProps)(ButtonComponentMinus);