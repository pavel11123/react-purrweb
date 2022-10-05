import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-gradient"></div>
        <div className="container">
          <div className="footer__main d-fl">
            <div className="footer__block footer__block-left d-fl-col">
              <a href="/">
                <img src="../../img/icon/footer__notab.svg" alt="notab" />
              </a>
              <a href="/">
                Contact us: <br />
                support@notab.com
              </a>
              <span>© 2020 - NoTab®</span>
            </div>
            <div className="footer__block footer__block-right d-fl-col">
              <a href="/">Terms to use</a>
              <a href="/">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
