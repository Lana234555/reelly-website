export default function S04AssistantPopup() {
  return (
    <div className="assistant-popup">
      <div className="modal-w hero-1">
        <a data-w-id="40a5b0f1-a5ae-c9ef-9549-8bacfadde4ed" href="#" className="modal-bg-2 w-inline-block"></a>
        <div className="modal w-clearfix">
          <a data-w-id="40a5b0f1-a5ae-c9ef-9549-8bacfadde4ef" href="#" className="close-btn-w w-inline-block" data-ix="clouse">
            <div className="close-btn-line is--1st"></div>
            <div className="close-btn-line is--2nd"></div>
          </a>
          <div className="modal-content-w">
            <div className="w-layout-grid network-top-grid pop-ups-form-1 tablet">
              <div id="w-node-_40a5b0f1-a5ae-c9ef-9549-8bacfadde4f4-c0a61e78" className="gradient-grid pop-up agent"></div>
              <div id="w-node-_40a5b0f1-a5ae-c9ef-9549-8bacfadde519-c0a61e78" className="form-registration-wrapper pop-up agent">
                <div className="form-wrapper">
                  <h1 className="heading-form agent">
                    Fill out the form to contact your assistant
                  </h1>
                  <p className="p-form">
                    We will select for you an agent who has the maximum competence in your request for the purchase of real estate.
                  </p>
                  <div className="form-block-2 w-form">
                    <form id="assistant-form" name="wf-form-assistant-form" data-name="assistant-form" redirect="https://www.reelly.io/thank-you-page-assistant" data-redirect="https://www.reelly.io/thank-you-page-assistant" method="get" className="form" data-wf-page-id="62fa2f18e0ceed43c0a61e78" data-wf-element-id="40a5b0f1-a5ae-c9ef-9549-8bacfadde523" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                      <div className="block-text-1">
                        <div className="text-field-form">
                          <label htmlFor="Phone" className="field-label">
                            Phone number
                          </label>
                          <input className="text-field w-input" maxLength={256} name="Phone" data-name="Phone" placeholder="+971 4 555 7733" type="tel" id="Phone" />
                        </div>
                      </div>
                      <div id="w-node-a81a601d-df9d-d41e-7c9d-7a91eed3931c-c0a61e78" className="or-block">
                        <div className="agent-form-text">
                          or
                        </div>
                      </div>
                      <div className="text-field-form">
                        <label htmlFor="Email" className="field-label">
                          Email
                        </label>
                        <input className="text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="yourname@mail.com" type="email" id="Email" />
                      </div>
                      <input type="submit" data-wait="Submitting the form..." id="w-node-_40a5b0f1-a5ae-c9ef-9549-8bacfadde534-c0a61e78" className="form-button w-button" value="Get access" />
                    </form>
                    <div className="or-block">
                      <div className="agent-form-text">
                        or
                      </div>
                    </div>
                    <div className="buttom-block-website">
                      <a id="w-node-_4a66ad80-2073-2ca7-836b-2a307aeab94d-c0a61e78" href="https://t.me/reelly_bot?start=w17343658" className="form-button w-inline-block">
                        <img src="/cdn/6297c98631a984c162542adb/62cd771306acf56136e99b6d_Vector.svg" loading="lazy" alt="" />
                        <div className="telegram-text">
                          Telegram
                        </div>
                      </a>
                      <a id="w-node-_2948498f-1396-4365-3f07-714fc3905af4-c0a61e78" href="https://wa.me/35795140574?text=w17544446" className="form-button w-inline-block">
                        <img src="/cdn/6297c98631a984c162542adb/62cd771357675c35e75a8ef4_WhatsApp.svg" loading="lazy" alt="" />
                        <div className="telegram-text">
                          WhatsApp
                        </div>
                      </a>
                    </div>
                    <div className="w-form-done">
                      <div>
                        Thank you! Your submission has been received!
                      </div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-terms agent">
                  <span className="text-span">
                    By signing up you are agreeing to our
                  </span>
                  {" "}
                  <br />
                  Terms and Conditions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
