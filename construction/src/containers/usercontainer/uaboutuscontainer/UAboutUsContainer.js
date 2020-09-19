import React from 'react';
import './UAboutUsContainer.css';

import Hero from '../../../components/user/hero/Hero';

import UTeamContainer from '../uteamcontainer/UTeamContainer';

export default function UAboutUSContainer(props) {
	return (
		<div>
			<Hero height="300">
				<h1>About US</h1>
			</Hero>

			<div className="dflex flexcolumn sectionContainer">
				<div className="ftLeadTextContainer"></div>
				<div className="flexgrow">
					<div className="aboutus">
						<h3>What we are</h3>
						<p>
							PERUNDING IRZI Sdn Bhd is an Engineering Consultant formed in 2014 as a Civil and Structural
							Engineering Consultant. The company would provide quality solutions with best quality
							practice to ensure the need of the client is met. PERUNDING IRZI Sdn Bhd led by experienced,
							dynamic and progressive team of personnel with more than 20 years experience in the
							industries is ready to grow with our own strength and capability to strive as a leading
							engineering consultant and project management firm. PERUNDING IRZI Sdn Bhd is registered as
							Civil and Structural Consultant with Suruhanjaya Syarikat Malaysia (SSM), Malaysia Ministry
							of Finance (MOF) and Board of Engineers Malaysia (BEM).
						</p>
					</div>

					<div className="vision">
						<h3>Our Vision</h3>
						<p>
							To be a globally recognized corporation that provide best Structure and Infrastructure
							solutions with quality engineering, innovative and reliable designs.
						</p>
					</div>
					<div className="mission">
						<h3>Our Mission</h3>
						<p>
							To achieve our vision through fairness, business ethics, global reach, technological
							expertise, IRZI will build long term relationships with all our partners and employees.
						</p>
					</div>
				</div>
			</div>

			<div className="dflex flexcolumn sectionContainer">
				<div className="ftLeadTextContainer">
					<h3 className="ftTitle">Our Team</h3>
					<h2 className="ftDescription">
						We have a <strong>Expert</strong> Team
					</h2>
				</div>
				<div className="flexgrow">
					<UTeamContainer />
				</div>
			</div>

			{/* <div className="sectionContainer uaboutuscontainer">
				<UTeamContainer />
				<div className="aboutus">
					<h3>About US</h3>
					<p>
						PERUNDING IRZI Sdn Bhd is an Engineering Consultant formed in 2014 as a Civil and Structural
						Engineering Consultant. The company would provide quality solutions with best quality practice
						to ensure the need of the client is met. PERUNDING IRZI Sdn Bhd led by experienced, dynamic and
						progressive team of personnel with more than 20 years experience in the industries is ready to
						grow with our own strength and capability to strive as a leading engineering consultant and
						project management firm. PERUNDING IRZI Sdn Bhd is registered as Civil and Structural Consultant
						with Suruhanjaya Syarikat Malaysia (SSM), Malaysia Ministry of Finance (MOF) and Board of
						Engineers Malaysia (BEM).
					</p>
				</div>
				<div className="dflex flexwrap">
					<div className="vision">
						<h3>Our Vision</h3>
						<p>
							To be a globally recognized corporation that provide best Structure and Infrastructure
							solutions with quality engineering, innovative and reliable designs.
						</p>
					</div>
					<div className="mission">
						<h3>Our Mission</h3>
						<p>
							To achieve our vision through fairness, business ethics, global reach, technological
							expertise, IRZI will build long term relationships with all our partners and employees.
						</p>
					</div>
				</div>
			</div> */}
		</div>
	);
}
