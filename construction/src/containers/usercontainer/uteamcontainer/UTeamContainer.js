import React from 'react';
import './UTeamContainer.css';

import Hero from '../../../components/user/hero/Hero';

import person from '../../../images/person3.jpg';

export default function UTeamContainer() {
	return (
		<React.Fragment>
			{/* <div className="dflex">
					<div className="teamInfo">
						<h3 className="name">Ir. Ts. Hj. ZAINI BIN IBRAHIM</h3>
						<span className="designation">Managing Director</span>
						<div className="education">
							<h4>Education</h4>
							<div className="content">Master Business Administration, MEIJI University</div>
							<div className="content">Master of Science (Eng. Business Management), UTM</div>
							<div className="content">Bachelor of Engineering (Civil), UTM</div>
							<div className="content">Diploma Civil Engineering, UTM</div>
						</div>
						<div className="membership">
							<h4>Membership</h4>
							<div className="content">Professional Engineer, BEM (PE No: 17669)</div>
							<div className="content">Institution of Engineers Malaysia (Member No: 58004)</div>
							<div className="content">International Project Management Associate (Member No: 0062)</div>
							<div className="content">
								Chartered Institution of Highway & Transportation (Member No: P000084879)
							</div>
							<div className="content">
								Professional Technologists, Malaysia Board of Technologists (PT20050121)
							</div>
						</div>
					</div>
				</div> */}
			<div className="dflex teamcontainer alignAround">
				<div className="personcard">
					<div className="">
						<img src={person} alt="Name" className="personimg" />
					</div>
					<div className="personcontent">
						<h4>Ir. Ts. Hj. ZAINI BIN IBRAHIM</h4>
						<div className="designation">Managing Director</div>
					</div>
				</div>
				<div className="personcard">
					<div className="">
						<img src={person} alt="Name" className="personimg" />
					</div>
					<div className="personcontent">
						<h4>Ir. Hj. NOR IZAM BIN MUHAMMAD RAZALI</h4>
						<div className="designation">Director</div>
					</div>
				</div>
				<div className="personcard">
					<div className="">
						<img src={person} alt="Name" className="personimg" />
					</div>
					<div className="personcontent">
						<h4>Ir. YUSOFF BIN MD NASIR</h4>
						<div className="designation">Director</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
