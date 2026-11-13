export default function S01ProptechBlockPart02() {
  return (
    <div className="background-investor investor">
      <div className="pop-up-block--invest">
        <div className="h4-text">
          Get an invitation to the first event of the Proptech Club
        </div>
        <div className="ditalsmasterclass _400">
          Fill out the short application form bellow.
        </div>
        <a href="https://t.me/reelly_dubai_bot?start=w19470691" className="telegram-button w-inline-block">
          <img loading="lazy" src="/cdn/63c5585ff31e74bfcf46a136/646a0d1fce52a019d8e85088_Telegram.png" alt="" className="icon-social" />
          <div className="text-block-86">
            Leave an application
          </div>
        </a>
        <div className="offer-event-form-2 _1-month-free-block w-form">
          <form id="wf-form-Form-Investor" name="wf-form-Form-Investor" data-name="Form Investor" redirect="https://soft.reelly.io/proptech-community-thank-you-page" data-redirect="https://soft.reelly.io/proptech-community-thank-you-page" method="get" className="connect-the-agency" data-wf-page-id="676e6d8551d226ebea2d2b4b" data-wf-element-id="3d5699a7-3185-d3b6-474b-7c3af091fca4" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
            <input className="input-3 book w-input" maxLength={256} name="Full-name-2" data-name="Full Name 2" placeholder="Full name" type="text" id="Full-name-2" required />
            <input className="input-3 book w-input" maxLength={256} name="Email-2" data-name="Email 2" placeholder="Your email" type="email" id="Email-2" required />
            <input className="input-3 book w-input" maxLength={256} name="Your-phone-2" data-name="Your Phone 2" placeholder="Your phone" type="tel" id="Your-phone-2" required />
            <input className="input-3 book w-input" maxLength={256} name="name-company" data-name="Name Company" placeholder="Company name" type="text" id="name-company" required />
            <input className="input-3 book w-input" maxLength={256} name="Link-company-2" data-name="Link Company 2" placeholder="Your role in the company" type="text" id="Link-company-2" required />
            <div className="input-heiding">
              {"Does your company have a website? "}
              <br />
              If yes, please provide the URL.
            </div>
            <input className="input-3 book w-input" maxLength={256} name="Link-company" data-name="Link Company" placeholder="https://company.com" type="text" id="Link-company" required />
            <div className="input-heiding">
              How much are you considering investing in technology?
            </div>
            <select id="Your-position-3" name="Your-position-3" data-name="Your Position 3" required className="input-3 book w-select">
              <option value="Up to $100k">
                Up to $100k
              </option>
              <option value="$100k - $500k">
                $100k - $500k
              </option>
              <option value="More than $500k">
                {" More than $500k"}
              </option>
            </select>
            <div className="input-heiding">
              What experiences or connections can you bring to strengthen our community?
            </div>
            <textarea id="field" name="field" maxLength={5000} data-name="Field" placeholder="" className="input-3 w-input" />
            <input type="submit" data-wait="Please wait..." className="step-button w-button" value="Submit" />
          </form>
          <div className="success-message-3 w-form-done">
            <div className="text-block-55">
              {"Check your mailbox. "}
              <br />
              We have sent you an email with a link to our Telegram channel, where all the details of the events will be.
            </div>
          </div>
          <div className="w-form-fail">
            <div>
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
        <a wized="closePopup" data-w-id="3d5699a7-3185-d3b6-474b-7c3af091fcbe" href="#" className="close-baner-4 w-inline-block">
          <div className="w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
              {" "}
              <path d="M15.166 27.8345L27.835 15.1655" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round"></path>
              {" "}
              <path d="M15.166 15.1655L27.835 27.8345" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round"></path>
              {" "}
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
