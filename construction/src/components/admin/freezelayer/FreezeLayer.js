import React from 'react';
import './FreezeLayer.css';

export default class FreezeLayer extends React.Component {
	render() {
		let isShow = this.props.show;
		return <div className={`freezelayerContainer ${isShow ? 'block' : 'none'}`}></div>;
	}
}
