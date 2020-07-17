import React from 'react';
import FreezeLayer from '../../../components/admin/freezelayer/FreezeLayer';
import Appdrawer from '../../../components/admin/appdrawer/Appdrawer';
import { connect } from 'react-redux';

import ProjectFormContainer from '../projectformcontainer/ProjectformContainer';
import ChangepasswordContainer from '../changepasswordcontainer/ChangepasswordContainer';

import { hidepopupLayer } from '../../../actions/popupLayerActions';

class PopupContainer extends React.Component {
	componentDidMount() {
		let { hidepopupLayer } = this.props;
		hidepopupLayer();
	}
	render() {
		let { isShow, component, id, title, hidepopupLayer } = this.props;
		return (
			<React.Fragment>
				<FreezeLayer show={isShow} />
				<Appdrawer show={isShow} closeHandler={hidepopupLayer} title={title}>
					{component === 'form' ? (
						<ProjectFormContainer projectId={id} />
					) : component === 'changepassword' ? (
						<ChangepasswordContainer />
					) : null}
				</Appdrawer>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		isShow: state.popupLayer.isShow,
		component: state.popupLayer.component,
		id: state.popupLayer.entityId,
		title: state.popupLayer.title,
	};
}

export default connect(mapStateToProps, { hidepopupLayer })(PopupContainer);
