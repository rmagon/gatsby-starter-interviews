import React from 'react';
import './subscribe-form.scss';

const SubscribeForm = () => {

    return (
      <div style={{
        padding: '0rem 1rem'
      }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h4 className="is-size-4 has-text-centered">Get future articles in your inbox!</h4>
            <form
              action="#"
              method="post"
              target="_blank"
              noValidate
              style={{
                maxWidth: '500px',
                width: '100%'
              }}
            >
                <div className="field is-grouped" style={{
                  maxWidth: '500px',
                  width: '100%'
                }}>
                  
                  <p className="control is-expanded has-icons-left email-wrapper">
                    <input
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      placeholder="Your Email Address"
                      required
                      className="input"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </p>

                <p className="control">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button is-primary"
                  />
                </p>

                </div>
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            </form>
          </div>
          </div>
    );
}

export default SubscribeForm;
