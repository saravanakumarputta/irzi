import React from 'react';
import './UServiceContainer.css';
import Hero from '../../../components/user/hero/Hero';
import about_1 from '../../../images/about_1.jpg';

export default class UServiceContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Hero height="300">
					<h1>Our Services</h1>
				</Hero>

				<div className="dflex flexcolumn site-section">
					<div className="sectionContainer">
						<div className="uServiceContainer dflex">
							<div className="uServiceImage">
								<img src={about_1}></img>
							</div>
							<div className="uServiceContent">
								<h3>Lorm Ipsum Dolor</h3>
								<h4>Welcome To Builder</h4>
								<p>
									Excellence in architecture engineering and intrior design Lorem Ipsum is simply
									dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
									text of the printing and typesetting industry.
								</p>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</div>
						<div className="uServiceContainer dflex">
							<div className="uServiceImage">
								<img src={about_1}></img>
							</div>
							<div className="uServiceContent">
								<h3>Lorm Ipsum Dolor</h3>
								<h4>Welcome To Builder</h4>
								<p>
									Excellence in architecture engineering and intrior design Lorem Ipsum is simply
									dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
									text of the printing and typesetting industry.
								</p>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</div>
						<div className="uServiceContainer dflex">
							<div className="uServiceImage">
								<img src={about_1}></img>
							</div>
							<div className="uServiceContent">
								<h3>Lorm Ipsum Dolor</h3>
								<h4>Welcome To Builder</h4>
								<p>
									Excellence in architecture engineering and intrior design Lorem Ipsum is simply
									dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
									text of the printing and typesetting industry.
								</p>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
