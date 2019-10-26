import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let aboutData = this.props.aboutData;
    return (
      <React.Fragment>
      {/*generated code*/}
      {/* About Section
   ================================================== */}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{aboutData.About_Me}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{aboutData.Contact_Details.Name}</span><br />
                  <span>{aboutData.Contact_Details.Address}
                  </span><br />
                  <span>{aboutData.Contact_Details.Mobile}</span><br />
                  <span>{aboutData.Contact_Details.Email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1Kdt70Pk6np6Itzjt4PnIDpITbTH_e0of/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
    );
      </React.Fragment>
    );
  }
}