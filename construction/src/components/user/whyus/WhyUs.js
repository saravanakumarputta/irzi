import React from 'react';
import './WhyUs.css';
import about_1 from '../../../images/about_1.jpg';

export default function WhyChoose() {
	return (
		<div className="whyusContainer">
			<div className="site-section dflex flexcolumn sectionContainer">
				<div className="">
					<div className="dflex flexwrap alignVertical">
						<div className="whyusImg">
							<div className="whyusLeadContainer">
								<h3 className="whyusLeadText">Why Choose Us</h3>
								<h2 className="whyusLeadTitle">
									More than <strong>50 years experience</strong> in industry
								</h2>
							</div>
							<img src={about_1} alt="about" />
						</div>
						<div className="flexgrow whyusService">
							<div className="dflex alignVertical whyusServiceItem">
								<span className="myicon-oil-platform whyusServiceIcon"></span>
								<div>
									<h4 className="whyusServiceTitle">Expert in Buildings</h4>
									{/* <p className="whyusServiceText">Lorem ipsum dolor sit amet.</p> */}
								</div>
							</div>
							<div className="dflex alignVertical whyusServiceItem">
								<span className="myicon-planning whyusServiceIcon"></span>
								<div>
									<h4 className="whyusServiceTitle">Leading in Planning</h4>
									{/* <p className="whyusServiceText">Lorem ipsum dolor sit amet.</p> */}
								</div>
							</div>
							<div className="dflex alignVertical whyusServiceItem">
								<span className="myicon-compass whyusServiceIcon"></span>
								<div>
									<h4 className="whyusServiceTitle">Modern Design</h4>
									{/* <p className="whyusServiceText">Lorem ipsum dolor sit amet.</p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
