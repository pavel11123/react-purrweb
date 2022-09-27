import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__main d-fl">
            <div className="header__logo d-fl">
              <div className="header__logo-cube">
                <img src="./img/icon/logo.png" alt="logo PurrWeb" />
              </div>
              <div className="header__logo-name">
                <img src="./img/icon/logo__notab.svg" alt="logo PurrWeb" />
              </div>
            </div>
            <div className="header__login d-fl">
              <a href="/">Login</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
