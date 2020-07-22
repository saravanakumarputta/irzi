import React from 'react';
import './UProjectConatiner.css';

import Hero from '../../../components/user/hero/Hero';

import ProjectCard from '../../../components/user/projectcard/ProjectCard';
import { getProjects } from '../../../apicallers/ProjectsAPI';
import { getProjectsSuccess } from '../../../actions/projectActions';
import { connect } from 'react-redux';

class UProjectContainer extends React.Component {
	componentDidMount() {
		let { getProjectsSuccess } = this.props;
		getProjects().then((res) => {
			let { status, data } = res;
			if (status === 200) {
				getProjectsSuccess(data.data);
			}
		});
	}
	render() {
		let { projects } = this.props;
		return (
			<React.Fragment>
				<Hero height="300">
					<h1>Our Recent Projects</h1>
				</Hero>
				<div className="dflex flexwrap site-section sectionContainer">
					{Object.keys(projects).map((projectId) => {
						let { title, section1, images } = projects[projectId];
						return (
							<div className="pcardContainer" key={title}>
								<ProjectCard title={title} section1={section1} location="New York!" image={images[0]} />
							</div>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		projects: state.projects,
	};
}

export default connect(mapStateToProps, { getProjectsSuccess })(UProjectContainer);
