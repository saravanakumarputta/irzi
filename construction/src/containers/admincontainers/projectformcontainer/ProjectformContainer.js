import React from 'react';
import './ProjectformContainer.css';
import { connect } from 'react-redux';

import TextBox from '../../../components/common/textbox/TextBox';
import TextArea from '../../../components/common/textarea/TextArea';
import AjaxLoader from '../../../components/common/ajaxloader/AjaxLoader';
import ErrMsg from '../../../components/admin/errmsg/ErrMsg';

import { addProjectSuccess, deleteProjectSuccess, updateProjectSuccess } from '../../../actions/projectActions';
import { hidepopupLayer } from '../../../actions/popupLayerActions';
import { logout } from '../../../actions/userActions';

import { addProject, updateProject, deleteProject } from '../../../apicallers/ProjectsAPI';

class ProjectFormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			section1: '',
			section2: '',
			disabled: true,
			type: 'add',
			images: null,
			titleErrMsg: '',
			section1ErrMsg: '',
			section2ErrMsg: '',
			errMsg: '',
			isLoading: false,
		};
		this.handleSave = this.handleSave.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.fileInput = React.createRef();
	}

	handleSave() {
		let { addProjectSuccess, hidepopupLayer, logout } = this.props;
		let { title, section1, section2 } = this.state;
		let _this = this;
		if (title.length <= 0) {
			this.setState({ titleErrMsg: 'Title is required' });
		}
		if (section1.length <= 0) {
			this.setState({ section1ErrMsg: 'Section-1 is required' });
		}
		if (section2.length <= 0) {
			this.setState({ section2ErrMsg: 'Section-2 is required' });
		}
		if (title && section1 && section2) {
			_this.setState({ isLoading: true });
			addProject({
				title,
				section1,
				section2,
				images: this.fileInput.current.files,
			})
				.then((res) => {
					let { status, data } = res;
					_this.setState({ isLoading: false });
					if (status === 200) {
						hidepopupLayer();
						addProjectSuccess(data.data);
					}
				})
				.catch((err) => {
					let { status, data } = err;
					_this.setState({ isLoading: false });
					if (status === 401) {
						logout();
					}
					_this.setState({ errMsg: data.errorMessage });
				});
		}
	}

	handleUpdate() {
		let { projectId, logout, hidepopupLayer, updateProjectSuccess } = this.props;
		let { title, section1, section2 } = this.state;
		let _this = this;
		_this.setState({ isLoading: true });
		if (title.length <= 0) {
			this.setState({ titleErrMsg: 'Title is required' });
		}
		if (section1.length <= 0) {
			this.setState({ section1ErrMsg: 'Section-1 is required' });
		}
		if (section2.length <= 0) {
			this.setState({ section2ErrMsg: 'Section-2 is required' });
		}
		if (title && section1 && section2) {
			updateProject({
				projectId,
				title,
				section1,
				section2,
			})
				.then((res) => {
					let { status, data } = res;
					_this.setState({ isLoading: false });
					if (status === 200) {
						hidepopupLayer();
						updateProjectSuccess(data.data);
					}
				})
				.catch((err) => {
					let { status } = err;
					_this.setState({ isLoading: false });
					if (status === 401) {
						logout();
					}
				});
		}
	}

	handleDelete() {
		let { projectId, deleteProjectSuccess, logout, hidepopupLayer } = this.props;
		let _this = this;
		_this.setState({ isLoading: true });
		deleteProject(projectId)
			.then((res) => {
				let { status } = res;
				_this.setState({ isLoading: false });
				if (status === 200) {
					hidepopupLayer();
					deleteProjectSuccess(projectId);
				}
			})
			.catch((err) => {
				let { status } = err;
				_this.setState({ isLoading: false });
				if (status === 401) {
					logout();
				}
			});
	}

	componentDidMount() {
		let { projectInfo, type } = this.props;
		if (projectInfo) {
			this.setState({
				title: projectInfo.title,
				section1: projectInfo.section1,
				section2: projectInfo.section2,
				images: projectInfo.images,
			});
		}
		this.setState({ type });
		if (type === 'add' || type === 'edit') {
			this.setState({ disabled: false });
		}
	}

	render() {
		return (
			<div className="dflex flexcolumn projectFormContainer h100">
				{this.state.errMsg ? <ErrMsg msg={this.state.errMsg} /> : null}
				<div className="flexgrow formElements">
					<TextBox
						label="Project Title"
						value={this.state.title}
						changeHandler={(title) => {
							this.setState({ title: title });
							if (title.length <= 0) {
								this.setState({ titleErrMsg: 'Title is required' });
							} else {
								this.setState({ titleErrMsg: '' });
							}
						}}
						errMsg={this.state.titleErrMsg}
						disabled={this.state.disabled}
					/>
					<TextArea
						label="Project Section1"
						rows={5}
						value={this.state.section1}
						changeHandler={(section1) => {
							this.setState({ section1: section1 });
							if (section1.length <= 0) {
								this.setState({ section1ErrMsg: 'Section-1 is required' });
							} else {
								this.setState({ section1ErrMsg: '' });
							}
						}}
						errMsg={this.state.section1ErrMsg}
						disabled={this.state.disabled}
					/>
					<TextArea
						label="Project Section2"
						rows={5}
						value={this.state.section2}
						changeHandler={(section2) => {
							this.setState({ section2: section2 });
							if (section2.length <= 0) {
								this.setState({ section2ErrMsg: 'Section-2 is required' });
							} else {
								this.setState({ section2ErrMsg: '' });
							}
						}}
						errMsg={this.state.section2ErrMsg}
						disabled={this.state.disabled}
					/>
					{this.state.type === 'add' ? (
						<div className="form-control">
							<label>Images</label>
							<input type="file" multiple ref={this.fileInput} />
						</div>
					) : (
						<div className="form-control">
							{this.state.images.map((image) => {
								return (
									<img
										key={image}
										src={`/${image}`}
										height="100px"
										width="100px"
										alt={image}
										style={{ margin: '10px' }}
									/>
								);
							})}
						</div>
					)}
				</div>
				<div className="formFooter dflex">
					{this.state.type === 'add' ? (
						<span className="formBtn" onClick={this.handleSave}>
							Save
						</span>
					) : this.state.type === 'edit' ? (
						<span className="formBtn" onClick={this.handleUpdate}>
							Update
						</span>
					) : this.state.type === 'delete' ? (
						<span className="formBtn" onClick={this.handleDelete}>
							Delete
						</span>
					) : (
						<span
							className="formBtn"
							onClick={() => {
								this.props.hidepopupLayer();
							}}>
							Close
						</span>
					)}
					{this.state.isLoading ? <AjaxLoader /> : null}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		projectInfo: state.projects[props.projectId],
		type: state.popupLayer.type,
	};
}

export default connect(mapStateToProps, {
	logout,
	hidepopupLayer,
	addProjectSuccess,
	deleteProjectSuccess,
	updateProjectSuccess,
})(ProjectFormContainer);
