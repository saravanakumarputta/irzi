import React from 'react';
import './Footer.css';
import logo2 from '../../../images/logo2.png';
import qec_logo from '../../../images/qec_logo.png';

export default function footer() {
	return (
		<div className="footer">
			<div className="sectionContainer">
				<div className="dflex flexwrap" style={{ justifyContent: 'space-evenly' }}>
					<div className="footer-section">
						<p className="mb-4">
							<img src={logo2} className="img-fluid logo2" alt="IrZi" />
						</p>
						<p>Engineers & Project Managers.</p>
					</div>
					<div className="footer-section">
						<p className="mb-4">
							<img src={qec_logo} alt="IrZi" className="qec_logo" />
						</p>
						<p>We are QEC Certified.</p>
					</div>
					<div className="footer-section">
						<h3 className="footer-heading">
							<span>Our Services</span>
						</h3>
						<div className="addrText">Project Managment</div>
						<div className="addrText">Building Construction</div>
						<div className="addrText">Building Renovation</div>
						<div className="addrText">Remodeling</div>
					</div>
					<div className="footer-section">
						<h3 className="footer-heading">
							<span>Contact</span>
						</h3>
						<div>
							<div className="addrText">PERUNDING IRZI SDN BHD,</div>
							<div className="addrText">11-2 Jalan Inpian Perdana 1,</div>
							<div className="addrText">Saujana Impian,</div>
							<div className="addrText">43000 Kajang,</div>
							<div className="addrText">Selangor.</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<p>Copyright All rights Reserved Irzi Engineers</p>
				</div>
			</div>
		</div>
	);
}
