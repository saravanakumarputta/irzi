import React from 'react';
import './UProjectDetailContainer.css';

import { getProject } from '../../../apicallers/ProjectsAPI';

export default class Projectdetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {},
		};
	}
	componentDidMount() {
		let projectId = this.props.match.params.id;
		let _this = this;
		getProject(projectId)
			.then((res) => {
				let { data } = res;
				_this.setState({ project: data.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		let { title, images, section1, section2, location, type, client } = this.state.project;

		return (
			<div className="dflex flexcolumn site-section sectionContainer">
				<h2 className="uProjectTitle">{title}</h2>
				<div className="uProjectImageContainer dflex">
					{images &&
						images.map((image, index) => {
							return (
								<div className="uProjectImage" key={index}>
									<img src={`/${image}`} alt={`${index}_pimg`} />
								</div>
							);
						})}
				</div>
				<div className="uProjectDetail dflex">
					<div className="uProjectInfo">
						<ul>
							<li>
								<h4>CLIENT</h4>
								<p>{client}</p>
							</li>
							<li>
								<h4>PROJECT TYPE</h4>
								<p>{type}</p>
							</li>
							<li>
								<h4>LOCATION</h4>
								<p>{location}</p>
							</li>
						</ul>
					</div>
					<div className="uProjectSummary">
						<p>{section1}</p>
						<p>{section2}</p>
					</div>
				</div>
			</div>
		);
	}
}

// function mapStateToProps(state, props) {
// 	return {
// 		project: state.projects[props.match.params.id],
// 	};
// }

// export default connect(mapStateToProps, {})(Projectdetail);
