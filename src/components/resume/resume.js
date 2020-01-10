import React, { Component } from "react";
export default class Header extends Component {
	render() {
		return (
			<React.Fragment>
				{/*generated code*/}
				{/* Resume Section
   ================================================== */}
				<section id="resume">
					{/* Education
      ----------------------------------------------- */}
					<div className="row education">
						<div className="three columns header-col">
							<h1>
								<span>Education</span>
							</h1>
						</div>
						<div className="nine columns main-col">
							<div className="row item">
								<div className="twelve columns">
									<h3>Aligarh Muslim University</h3>
									<p className="info">
										Btech Mechanial Engineering <span>•</span>{" "}
										<em className="date">August 2018</em>
									</p>
									<p>Graduated with 7.22 CGPA out of 10.</p>
								</div>
							</div>{" "}
							{/* item end */}
							<div className="row item">
								<div className="twelve columns">
									<h3>Senior Secondary School AMU</h3>
									<p className="info">
										PCM <span>•</span> <em className="date">March 2014</em>
									</p>
									<p>Scored 85% and distinction in each subject</p>
								</div>
							</div>{" "}
							{/* item end */}
						</div>{" "}
						{/* main-col end */}
					</div>{" "}
					{/* End Education */}
					{/* Work
      ----------------------------------------------- */}
					<div className="row work">
						<div className="three columns header-col">
							<h1>
								<span>Work</span>
							</h1>
						</div>
						<div className="nine columns main-col">
							<div className="row item">
								<div className="twelve columns">
									<h3>Tata Consultancy Services</h3>
									<p className="info">
										Assistant System Engineer Trainee <span>•</span>{" "}
										<em className="date">November 2018 - Present</em>
									</p>
									<p>
										Working here on POC for various blockchain use cases in
										manufacturing industry.Worked with azure blockchain
										workbench and other private blockchains like ethereum POA
										and Quorum. Worked on hyperledger fabric for a POC
									</p>
								</div>
							</div>{" "}
							{/* item end */}
							<div className="row item">
								<div className="twelve columns">
									<h3>www.ixxo.io</h3>
									<p className="info">
										Blockchain Intern <span>•</span>{" "}
										<em className="date">September 2018 - October 2018</em>
									</p>
									<p>
										Worked with go-ethereum implementation for the private
										network with POA consensus. Using geth deployed a private
										network with 6 nodes and deployed on azure using docker.
										Initialised the network with initial token supply defined in
										genesis block. Worked on a smart contract. Developed a
										faucet for testnet tokens.
									</p>
								</div>
							</div>{" "}
							{/* item end */}
						</div>{" "}
						{/* main-col end */}
					</div>{" "}
					{/* End Work */}
					{/* Skills
      ----------------------------------------------- */}
					<div className="row skill">
						<div className="three columns header-col">
							<h1>
								<span>Skills</span>
							</h1>
						</div>
						<div className="nine columns main-col">
							{/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p> */}
							<div className="bars">
								<ul className="skills">
									<li>
										<span className="bar-expand photoshop" />
										<em>Node.js</em>
									</li>
									<li>
										<span className="bar-expand illustrator" />
										<em>Express</em>
									</li>
									<li>
										<span className="bar-expand wordpress" />
										<em>Solidity</em>
									</li>
									<li>
										<span className="bar-expand css" />
										<em>Docker</em>
									</li>
									<li>
										<span className="bar-expand html5" />
										<em>Blockchain</em>
									</li>
									<li>
										<span className="bar-expand jquery" />
										<em>React</em>
									</li>
								</ul>
							</div>
							{/* end skill-bars */}
						</div>{" "}
						{/* main-col end */}
					</div>{" "}
					{/* End skills */}
				</section>{" "}
				{/* Resume Section End*/})
			</React.Fragment>
		);
	}
}
