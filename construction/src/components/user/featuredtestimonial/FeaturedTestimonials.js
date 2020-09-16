import React from 'react';
import './FeaturedTestimonials.css';

// import person from '../../../images/person_3_sq.jpg';

export default function FeaturedTestimonials() {
	return (
		<div className="sectionContainer">
			<div className="site-section dflex flexcolumn">
				<div className="ftLeadTextContainer">
					<h3 className="ftTitle">Testimonial</h3>
					<h2 className="ftDescription">What our customers say</h2>
				</div>
				<div>
					<div className="dflex flexwrap">
						<div className="ftContent">
							<div>
								{/* <img src={person} alt="img" /> */}
								<blockquote>
									<p>
										“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti
										iusto molestias, dolore vel fugiat ab placeat ea?”
									</p>
								</blockquote>
							</div>
							<p className="ftClientName">Matt Keygen</p>
						</div>
						<div className="ftContent">
							<div>
								{/* <img src={person} alt="img" /> */}
								<blockquote>
									<p>
										“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti
										iusto molestias, dolore vel fugiat ab placeat ea?”
									</p>
								</blockquote>
							</div>
							<p className="ftClientName">Matt Keygen</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
