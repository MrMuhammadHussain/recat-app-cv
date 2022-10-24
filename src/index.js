import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

function Hi() {
  return <div>
    <div id="home" className="container-fluid resume-container">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 resume-box">
              <div className="row">
                <div className="col-lg-4 col-md-12 basic-profile">
                  <div className="row no-margin">
                    <div className="col-lg-12 col-md-3 col-sm-3 col-12 no-padding">
                      <img src="https://mrmuhammadhussain.github.io/My_CV/assets/images/profile_image.jpg" alt="img"/>
                    </div>
                    <div className="col-lg-12 col-md-9 col-sm-9 ccol-12 baci-cc no-padding">
                      <div className="basic-detail no-padding">
                        <span>Name</span>
                        <h5>Muhammad Hussain</h5>
                        <span>Father Name</span>
                        <h5>Muhammad Qasim</h5>
                        <p>Chatbot / Web Develper / Graphic Designer</p>
                        <span>Available</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 detail-profile no-padding">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home-1"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Portfolio
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home-1"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="detal-jumbo">
                        <h3>Hi! I'm Web Designer / Developer</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries,text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book. It has
                          survived not only five centuries,
                        </p>
                      </div>
                      <div className="links">
                        <div className="row ">
                          <div className="col-md-6 col-sm-12"></div>
                          <div className="col-md-6 col-sm-12"></div>
                        </div>
                      </div>
                      <div className="jumbo-address">
                        <div className="row">
                          <div className="col-sm-6 no-padding">
                            <table className="addrss-list">
                              <tr>
                                <th>E-mail</th>
                                <td>mugq678@gmail.com</td>
                              </tr>
                              <tr>
                                <th>Phone</th>
                                <td>03154568887</td>
                              </tr>
                              <tr>
                                <th>Date of birth</th>
                                <td>22-04-1999</td>
                              </tr>
                              <tr>
                                <th>Education</th>
                                <td>Alim Course | درس نظامی</td>
                              </tr>
                            </table>
                          </div>
                          <div className="col-sm-6 no-padding">
                            <table className="addrss-list">
                              <tr>
                                <th>Address</th>
                                <td>Baldia Town Karachi, Pakistan</td>
                              </tr>
                              <tr>
                                <th>Website</th>
                                <td>www.mrmuhammadhusasin.com</td>
                              </tr>
                              <tr>
                                <th>Languages</th>
                                <td>English,Urdu,Arabic</td>
                              </tr>
                              <tr>
                                <th>Skills</th>
                                <td>Graphic Designer / Ai & Chatbot </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));
