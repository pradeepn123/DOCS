import React from "react";

export default () => {

    return (
        <div data-menu-depth="1" data-pane-key="account-info" data-scroll-lock-ignore="" aria-hidden="true" inert="true">                        
            <li className="mobile-menu__item mobile-menu__item--header">
                <button className="mobile-menu__item--heading-back-link fs-body-100 " data-action="home" aria-label="Back to Main Menu">
                    <span className="icon icon-arrow-short back-link-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12.4016H11.5H23M23 12.4016L13.8 3M23 12.4016L13.8 21.8032" stroke="currentColor" strokeWidth="1.75"></path>
                        </svg>
                    </span>
                    Back to Main Menu 
                </button>
            </li>

            <div className="login" data-scope="component" data-account-login="">
                <div className="login__success-wrapper">
                    <div className="login__success" data-success-message="">
                        <div className="ff-body fs-body-100">
                            We've sent you an email with a link to update your password.
                        </div>
                    </div>
                </div>

                <div id="login-form" className="login__wrapper" data-part="login" aria-hidden="false">
                    <header className="login__header">
                        <h4 className="login__heading ff-heading fs-heading-4-base">Login</h4>
                    </header>

                    <div className="login__main">
                        <form method="post" action="/account/login" id="mobile-menu-account-login" acceptCharset="UTF-8" data-login-with-shop-sign-in="true" noValidate="novalidate" className="login__form">
                            <input type="hidden" name="form_type" defaultValue="customer_login" />
                            <input type="hidden" name="utf8" defaultValue="✓" />
                            <label htmlFor="mobile-menu-account-login-CustomerEmail">Email</label>
                            <input type="email" className="input " name="customer[email]" id="mobile-menu-account-login-CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" />
                            
                            <div className="login__label-wrapper">
                                <label htmlFor="mobile-menu-account-login-CustomerPassword">Password</label>
                                <button type="button" className="btn btn--text-link fs-body-75" data-toggle="" aria-controls="mobile-menu-account-login-register-form">
                                    Forgot password?
                                </button>
                            </div>
                            <input type="password" className="input " defaultValue="" name="customer[password]" id="mobile-menu-account-login-CustomerPassword" />
                            
                            <button type="submit" className="login__button btn btn--primary btn--full">Sign in</button>
                            <div className="login__links ff-body fs-body-100">
                                <span>New customer?</span>
                                <a className="link" href="https://shopify.com/58773962883/account?locale=en">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="mobile-menu-account-login-register-form" className="login__wrapper hide" data-part="reset" aria-hidden="true">
                    <div className="login__header">
                        <h2 className="login__heading ff-heading fs-heading-3-base">Reset your password</h2>
                        <p className="login__subheading fs-body-75">We will send you an email to reset your password.</p>
                    </div>

                    <div className="login__main">
                        <form method="post" action="/account/recover" acceptCharset="UTF-8" className="login__form">
                            <input type="hidden" name="form_type" defaultValue="recover_customer_password" />
                            <input type="hidden" name="utf8" defaultValue="✓" />
                            <label htmlFor="mobile-menu-account-login-RecoverEmail">Email address</label>
                            <input type="email" defaultValue="" name="email" id="mobile-menu-account-login-RecoverEmail" className="input" autoCorrect="off" autoCapitalize="off"/>
                            <button type="submit" className="login__button btn btn--primary btn--full">Submit</button>
                            <div className="login__links ff-body fs-body-100">
                                <button type="button" data-toggle="" className="btn btn--text-link" aria-controls="login-form">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>                    
            </div>
        </div>
    )
}