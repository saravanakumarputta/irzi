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
				let { status, data } = res;
				_this.setState({ project: data.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		let { title, images, section1, section2 } = this.state.project;

		return (
			<div className="dflex flexcolumn site-section sectionContainer">
				<h2 className="uProjectTitle">{title}</h2>
				<div className="uProjectImageContainer dflex">
					{images &&
						images.map((image) => {
							return (
								<div className="uProjectImage">
									<img src={`/${image}`} alt="project Image" />
								</div>
							);
						})}
					{/* <div>
						<img src={product_thumb}></img>
					</div>
					<div className="uProjectImage">
						<img src={product_thumb}></img>
					</div>
					<div className="uProjectImage">
						<img src={product_thumb}></img>
					</div> */}
				</div>
				<div className="uProjectDetail dflex">
					<div className="uProjectInfo">
						<ul>
							<li>
								<h4>CLIENT</h4>
								<p>Studio Massimo, Italy</p>
							</li>
							<li>
								<h4>PROJECT TYPE</h4>
								<p>Contruction, Brading</p>
							</li>
							<li>
								<h4>LOCATION</h4>
								<p>Mountain View CA 94043</p>
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