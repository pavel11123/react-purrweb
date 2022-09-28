import "./Homepage.scss";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <section className="start__section">
            <div className="d-fl">
              <div className="start__left d-fl-col">
                <h1>
                  A platform <br></br> that works smarter
                </h1>
                <div className="start__left-description d-fl">
                  <div className="start__left-description--line"></div>
                  <p>
                    NoTab allows bars & nightclubs<br></br>to manage,
                    understand, and grow<br></br>their business from a single
                    dashboard
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

            <div className="start__bottom d-fl-wrap">
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
        </div>
      </div>
    </>
  );
};

export { Homepage };
