import React from 'react';
import './UServiceContainer.css';
import Hero from '../../../components/user/hero/Hero';
import about_1 from '../../../images/about_1.jpg';

export default class UServiceContainer extends React.Component {
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
								<img src={about_1} alt="service1"></img>
							</div>
							<div className="uServiceContent">
								<h3>Highway and road design</h3>
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
								<img src={about_1} alt="service2"></img>
							</div>
							<div className="uServiceContent">
								<h3>Structural design for bridges</h3>
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
								<img src={about_1} alt="service3"></img>
							</div>
							<div className="uServiceContent">
								<h3>Geotechnical and foundation design</h3>
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
								<img src={about_1} alt="service3"></img>
							</div>
							<div className="uServiceContent">
								<h3>Structural (building) & infrastructure design</h3>
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
								<img src={about_1} alt="service3"></img>
							</div>
							<div className="uServiceContent">
								<h3>Water supply and reticulation system</h3>
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
								<img src={about_1} alt="service3"></img>
							</div>
							<div className="uServiceContent">
								<h3>Coastal design</h3>
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
								<img src={about_1} alt="service3"></img>
							</div>
							<div className="uServiceContent">
								<h3>Flood mitigation design</h3>
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
								<img src={about_1} alt="service3"></img>
							</div>
							<div className="uServiceContent">
								<h3>Project management consultant</h3>
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
