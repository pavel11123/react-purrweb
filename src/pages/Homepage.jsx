import "./Homepage.scss";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <section className="start__section">
            <div className="start-main d-fl">
              <div className="start__left d-fl-col">
                <h1>
                  A platform <br></br> that works smarter
                </h1>
                <div className="start__left-description d-fl">
                  <div className="start__left-description--line"></div>
                  <p>
                    NoTab allows bars & nightclubs<br></br>to manage,
                    understand, and grow their business from
                    <br className="start__br-none"></br> a single dashboard
                  </p>
                </div>
              </div>
              <div className="start__right d-fl">
                <div className="start__element-gradient"></div>
                <div className="start__right-filter"></div>
                <div className="start__right-img">
                  <img src="./img/photo/phone.png" alt="App NoTab" />
                </div>
              </div>
            </div>

            <div className="start__bottom d-fl">
              <h2>Download our app</h2>
              <div className="app d-fl">
                <div className="app__block app__block-store d-fl">
                  <img src="./img/icon/app-store.svg" alt="App Store" />
                </div>
                <div className="app__block app__block-google">
                  <img src="./img/icon/google-play.svg" alt="Google Play" />
                </div>
              </div>
            </div>
          </section>
          <section className="info__section">
            <div className="info__main d-fl-wrap">
              <div className="info__main-block d-fl-col">
                <p>
                  Would like to become<br></br>a member, please<br></br>contact
                  us
                </p>
                <a href="mailto:support@notab.com">support@notab.com</a>
              </div>
              <div className="info__main-block d-fl-col">
                <p>Already a partner?</p>
                <a href="/">Login</a>
              </div>
            </div>
            <div className="mission d-fl">
              <div className="mission__block mission__block-left">
                <div className="mission__block-img">
                  <img
                    src="./img/photo/phone__mission.png"
                    alt="PurrWeb NoTab"
                  />
                </div>
              </div>
              <div className="mission__block mission__block-right">
                <h2 className="title__block">Our mission and vision</h2>
                <p className="text__block">
                  While technology is our sweet spot, we’ve developed our vision
                  alongside our customers to ensure your everyday problems are
                  solved through simplistic tools. And as your business grows,
                  we’ll grow right alongside with you.
                </p>
              </div>
              <div className="mission__block-mobile">
                <div className="mission__block-mobile--img">
                  <img src="./img/photo/phone.png" alt="PurrWeb NoTab" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export { Homepage };
