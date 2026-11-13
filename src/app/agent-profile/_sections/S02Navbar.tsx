export default function S02Navbar() {
  return (
    <div data-animation="over-right" className="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
      <div className="container w-container">
        <div className="navbar-wrapper">
          <a href="/" className="brand w-nav-brand">
            <img src="/cdn/6297c98631a984c162542adb/62cd5b307ea6f83ab2ffe65a_logo-reelly.png" loading="lazy" height="Auto" alt="" className="reelly-logo" />
          </a>
          <nav role="navigation" className="nav-menu hero w-nav-menu">
            <a href="#sektion-Benefits" className="nav-link mignait-blue w-nav-link">
              For developer
            </a>
            <a href="#" className="nav-link mignait-blue w-nav-link">
              Advantages
            </a>
            <a href="#" className="nav-link mignait-blue w-nav-link">
              Selection
            </a>
            <a href="#" className="nav-link mignait-blue w-nav-link">
              Consultation
            </a>
            <a href="#" className="nav-link mignait-blue no w-nav-link">
              Agents
            </a>
            <a href="#" className="nav-link mignait-blue w-nav-link">
              Blog
            </a>
            <a href="#" className="nav-link mignait-blue w-nav-link">
              Webinars
            </a>
            <div data-w-id="33c85ffc-50b0-9e82-5804-a1526ae145da" className="wg-element-wrapper sw3">
              <a lang="en" data-w-id="33c85ffc-50b0-9e82-5804-a1526ae145db" href="#" className="wg-selector-2 s1 w-inline-block">
                <div className="wg-selector-2-fill f1"></div>
                <div className="wg-selector2-text-lang1">
                  EN
                </div>
              </a>
              <a lang="ru" data-w-id="33c85ffc-50b0-9e82-5804-a1526ae145df" href="#" className="wg-selector-2 s2 w-inline-block">
                <div className="wg-selector-2-fill f2"></div>
                <div className="wg-selector2-text-lang2">
                  RU
                </div>
              </a>
              <div className="wg-code w-embed w-script">
                {" "}
              </div>
            </div>
          </nav>
          <div className="profile-butoom">
            <a data-ms-content="!members" href="/password/sign-up" className="header-button registration w-button">
              Sign up
            </a>
            <a href="/agent-profile" aria-current="page" className="header-button profile w-button w--current">
              Profile
            </a>
            <a href="#/ms/logout" className="header-button log-out w-button">
              Log out
            </a>
          </div>
          <div className="menu-button w-nav-button">
            <img src="/cdn/6297c98631a984c162542adb/62bac866f04e59745e88ef32_Group-1394.svg" loading="lazy" alt="" width="24" />
          </div>
        </div>
      </div>
    </div>
  );
}
