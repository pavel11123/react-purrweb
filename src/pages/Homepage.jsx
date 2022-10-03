import "./Homepage.scss";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="main">
        <section className="start__section">
          <div className="container">
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
              <div className="start__app app d-fl">
                <div className="app__block app__block-store d-fl">
                  <img src="./img/icon/app-store.svg" alt="App Store" />
                </div>
                <div className="app__block app__block-google">
                  <img src="./img/icon/google-play.svg" alt="Google Play" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info__section">
          <div className="container">
            <div className="info__main d-fl-wrap">
              <div className="info__main-block d-fl-col">
                <p>
                  Would like to become<br></br>a member, please<br></br>
                  contact us
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
          </div>
        </section>
        <section className="verification__section">
          <div className="container d-fl-col">
            <div className="verification__main d-fl">
              <div className="verification__block verification__block-left d-fl">
                <div className="verification__phone">
                  <img
                    src="./img/photo/verification-1.png"
                    alt="verification-ID"
                  />
                </div>
                <div className="verification__phone">
                  <img
                    src="./img/photo/verification-2.png"
                    alt="verification-ID"
                  />
                </div>
              </div>
              <div className="verification__block verification__block-right">
                <h2 className="title__block">ID Scanner</h2>
                <p className="text__block">
                  Scan, verify, and collect data on each person that walks
                  through your door to humanize your data. You also get a
                  digital 86 list as well as a citywide ban list to keep your
                  venue safe.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="integration__section">
          <div className="container">
            <div className="integration__section-wrapper d-fl">
              <div className="integration__block integration__block-left">
                <h2 className="title__block">BI Tool Integration</h2>
                <p className="text__block">
                  We use Business Intelligence Tool that allows you to be
                  updated what is happening in your business just by one click.
                  Track revenue<br></br>and profit by one click.
                </p>
              </div>
              <div className="integration__block integration__block-right">
                <div className="diagram diagram-1">
                  <img
                    src="./img/photo/diagram-1.svg"
                    alt="Diagram Bi Tool Integration"
                  />
                </div>
                <div className="diagram diagram-2">
                  <img
                    src="./img/photo/diagram-2.svg"
                    alt="Diagram Bi Tool Integration"
                  />
                </div>
                <div className="diagram diagram-3">
                  <img
                    src="./img/photo/diagram-3.svg"
                    alt="Diagram Bi Tool Integration"
                  />
                </div>
                <div className="diagram diagram-4">
                  <img
                    src="./img/photo/diagram-4.svg"
                    alt="Diagram Bi Tool Integration"
                  />
                </div>
                <div className="diagram diagram-5">
                  <img
                    src="./img/photo/diagram-5.svg"
                    alt="Diagram Bi Tool Integration"
                  />
                </div>
                <div className="diagram__pie d-fl">
                  <div className="diagram__pie-img">
                    <img
                      src="./img/photo/diagram-6.svg"
                      alt="Diagram Bi Tool Integration"
                    />
                  </div>
                  <div className="diagram__pie-img">
                    <img
                      src="./img/photo/diagram-7.svg"
                      alt="Diagram Bi Tool Integration"
                    />
                  </div>
                  <div className="diagram__pie-img">
                    <img
                      src="./img/photo/diagram-8.svg"
                      alt="Diagram Bi Tool Integration"
                    />
                  </div>
                  <div className="diagram__pie-img">
                    <img
                      src="./img/photo/diagram-9.svg"
                      alt="Diagram Bi Tool Integration"
                    />
                  </div>
                </div>

                <div className="diagram__indicator d-fl">
                  <div className="diagram__indicator-img">
                    <img
                      src="./img/photo/diagram-10.svg"
                      alt="Diagram Bi Tool Integration"
                    />
                  </div>
                  <div className="diagram__indicator-img">
                    <img
                      src="./img/photo/diagram-11.svg"
                      alt="Diagram Bi Tool Integration"
                    />
                  </div>
                  <div className="diagram__indicator-img">
                    <img
                      src="./img/photo/diagram-12.svg"
                      alt="Diagram Bi Tool Integration"
                    />
                  </div>
                  <div className="diagram__indicator-img">
                    <img
                      src="./img/photo/diagram-13.svg"
                      alt="Diagram Bi Tool Integration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="code__section">
          <div className="container">
            <div className="code__section-wrapper d-fl">
              <div className="code__block code__block-left">
                <h2 className="title__block">QR code</h2>
                <p className="text__block">
                  No more conflict situations due to wrong order. The guest
                  selects the positions, and after that an individual QR code of
                  his order is generated
                </p>
                <div className="app d-fl-wrap">
                  <div className="app__block app__block-store app__block-code">
                    <img src="./img/icon/app-store.svg" alt="App Store" />
                  </div>
                  <div className="app__block app__block-google app__block-code">
                    <img src="./img/icon/google-play.svg" alt="Google Play" />
                  </div>
                </div>
              </div>
              <div className="code__block code__block-right d-fl">
                <div className="code__phone">
                  <img
                    src="./img/photo/phone__code-1.png"
                    alt="verification-ID"
                  />
                </div>
                <div className="code__phone">
                  <img
                    src="./img/photo/phone__code-2.png"
                    alt="verification-ID"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="qr__section">
          <div className="qr__top">
            <div className="qr__text qr__text-1">
              <img src="./img/icon/text__notab.svg" alt="notab" />
            </div>
            <div className="qr__text qr__text-2">
              <img src="./img/icon/text__notab.svg" alt="notab" />
            </div>
            <div className="qr__text qr__text-3">
              <img src="./img/icon/text__notab.svg" alt="notab" />
            </div>
            <div className="qr__text qr__text-4">
              <img src="./img/icon/text__notab.svg" alt="notab" />
            </div>
            <div className="qr__arrow">
              <span>Scan QR-code</span>
            </div>
            <div className="qr__img">
              <img src="./img/photo/qr-code.png" alt="qr-code" />
            </div>
          </div>
          <div className="container">
            <div className="qr__bottom d-fl-wrap">
              <h2 className="title__block">Generate your QR-code</h2>
              <p className="text__block">
                The guest QR code is scanned
                <br />
                by the staff and automatically sent
              </p>
            </div>
          </div>
        </section>

        <section className="ordering__section">
          <div className="container">
            <div className="ordering__top d-fl">
              <div className="ordering__top-text d-fl-col">
                <h2 className="title__block">
                  Easier ordering.
                  <br />
                  Happier guests.
                </h2>
                <p className="text__block">
                  NoTab makes it simple for patrons to easily
                </p>
              </div>
            </div>
            <div className="ordering__main">
              <div className="ordering__img">
                <img src="./img/photo/phone__ordering.png" alt="qr-code" />
              </div>
              <div className="ordering__main-text ordering__main-text-1">
                <p>
                  No more lost or
                  <br />
                  forgotten credit cards
                </p>
              </div>
              <div className="ordering__main-text ordering__main-text-2">
                <p>
                  No more lost or
                  <br />
                  forgotten credit cards
                </p>
              </div>
              <div className="ordering__main-text ordering__main-text-3">
                <p>Skip the line</p>
              </div>
              <div className="ordering__main-text ordering__main-text-4">
                <p>
                  No more split
                  <br />
                  your tab
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section"></section>
      </div>
    </>
  );
};

export { Homepage };
