import React from 'react';
import './ProjectsContainer.css';

import List from '../../../components/admin/list/List';
import { connect } from 'react-redux';

import { getProjectsSuccess } from '../../../actions/projectActions';
import { showpopupLayer } from '../../../actions/popupLayerActions';
import { getProjects } from '../../../apicallers/ProjectsAPI';

import { logout } from '../../../actions/userActions';

import Loader from '../../../components/admin/loader/Loader';

class ProjectsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			isErrMsg: '',
		};
	}

	componentDidMount() {
		var { logout, getProjectsSuccess } = this.props;
		var _this = this;
		getProjects()
			.then((res) => {
				let { status, data } = res;
				if (status === 200) {
					_this.setState({ isLoading: false });
					getProjectsSuccess(data.data);
				}
				if (status === 204) {
					_this.setState({ isLoading: false });
					getProjectsSuccess([]);
				}
			})
			.catch((err) => {
				let { status, data } = err;
				_this.setState({ isLoading: false });
				if (status === 401) {
					logout();
				} else {
					_this.setState({ isErrMsg: data.errorMessage });
				}
			});
	}
	render() {
		let { projects, showpopupLayer } = this.props;
		return (
			<React.Fragment>
				<List
					title="Projetcs"
					isAddIconNeeded={true}
					addHandler={() => {
						showpopupLayer('form', null, 'add', 'Add Project');
					}}>
					{this.state.isLoading ? (
						<div>
							<Loader />
							<Loader />
							<Loader />
							<Loader />
							<Loader />
						</div>
					) : Object.keys(projects).length > 0 ? (
						Object.keys(projects).map((key) => {
							let { title, images } = projects[key];
							return (
								<div key={key}>
									<Projects
										title={title}
										images={images}
										projectId={key}
										viewHandler={(id) => {
											showpopupLayer('form', id, 'view', 'Project Viewer');
										}}
										editHandler={(id) => {
											showpopupLayer('form', id, 'edit', 'Edit Project');
										}}
										deleteHandler={(id) => {
											showpopupLayer('form', id, 'delete', 'Are you sure you want to Delete?');
										}}
									/>
								</div>
							);
						})
					) : (
						<div className="noContent">No Content</div>
					)}
				</List>
			</React.Fragment>
		);
	}
}

function Projects(props) {
	let { title, images, viewHandler, editHandler, deleteHandler, projectId } = props;
	return (
		<div className="dflex projectContainer">
			<div className="flexgrow projectTitle">{title}</div>
			{images.map((image) => {
				return <img src={image} alt={image} key={image} className="projectImage" />;
			})}
			<div className="separator"></div>
			<span
				className="icon-eye cursor projectIcon"
				onClick={() => {
					viewHandler(projectId);
				}}></span>
			<span
				className="icon-pencil cursor projectIcon"
				onClick={() => {
					editHandler(projectId);
				}}></span>
			<span
				className="icon-bin cursor projectIcon"
				onClick={() => {
					deleteHandler(projectId);
				}}></span>
		</div>
	);
}

function mapStateToProps(state, props) {
	return {
		projects: state.projects,
	};
}

export default connect(mapStateToProps, { getProjectsSuccess, showpopupLayer, logout })(ProjectsContainer);
