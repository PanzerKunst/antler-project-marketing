import {faCircleCheck, faCirclePlay} from "@fortawesome/free-regular-svg-icons"
import {
  faArrowRightArrowLeft,
  faArrowsToDot,
  faCheck,
  faEye,
  faFileSignature,
  faMaximize,
  faPeopleGroup,
  faScaleBalanced,
  faSitemap,
  faSliders,
  faSquareCheck,
  faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useState} from "react"
import {Link} from "react-router-dom"

import {Banner} from "./_CommonComponents/Banner.tsx"
import {FadeIn} from "./_CommonComponents/FadeIn.tsx"
import {IconWithDualBgColor} from "./_CommonComponents/IconWithDualBgColor.tsx"
import {SubscribeToMailingListForm} from "./_CommonComponents/SubscribeToMailingListForm.tsx"
import {VideoPlayer} from "./_CommonComponents/VideoPlayer.tsx"
import {AnalyticsEvent, triggerAnalyticsEvent} from "../Util/AnalyticsUtils.ts"

import s from "/src/UI/_CommonStyles/_exports.module.scss"
import "./LandingPage.scss"

export function LandingPage() {
  const [playVideo, setPlayVideo] = useState(false)

  const handlePlayVideo = () => {
    setPlayVideo(true)
  }

  return (
    <div className="page landing">
      <Banner>
        <span>Make an impact by filling in <Link
          to="/survey"
          className="underlined disappears negative"
          onClick={() => triggerAnalyticsEvent(AnalyticsEvent.CLICK_PRICE_CTA_TIER_3)}
        >
          our survey
        </Link></span>
      </Banner>
      <main>
        <section id="hero" className="text-block-and-img">
          <div>
            <FadeIn duration={s.animationDurationMd}>
              <h1>20-20 Oversight</h1>
            </FadeIn>

            <FadeIn delay={0.4} duration={s.animationDurationMd}>
              <p>Operating in a regulated or controlled environment?</p>
              <p>We have grown up supporting companies just like yours. We're taking all this experience and designing a product for you.</p>
              <p>Battle-tested for finance, healthcare and insurance.</p>
            </FadeIn>

            <FadeIn delay={0.7} duration={s.animationDurationMd}>
              <SubscribeToMailingListForm/>
            </FadeIn>
          </div>
          <img src="https://metis-grc.b-cdn.net/images/landing/hero-mobile.png" alt="GRC app" className="mobile"/>
          <img src="https://metis-grc.b-cdn.net/images/landing/hero-desktop.png" alt="GRC app" className="desktop"/>
        </section>

        <section id="why">
          <div className="container">
            <header>
              <span>Why?</span>
              <h2>Get away from siloed systems</h2>
              <p>Combine Legal, Risk, Compliance, Operations, IT & Procurement.</p>
            </header>
            <ul className="styleless">
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Full overview for the CEO and Board</h3>
                <p>Siloed systems mean the CEO and Board need to request data from each department individually.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faArrowsToDot}/>
                </IconWithDualBgColor>
                <h3>Golden source of truth</h3>
                <p>Siloed systems mean that basic company data is not updated or available for everyone.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faMaximize}/>
                </IconWithDualBgColor>
                <h3>Gain benefits of scale</h3>
                <p>Multiple solutions require multiple implementations and procurement processes.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faSliders}/>
                </IconWithDualBgColor>
                <h3>Reduce complexity</h3>
                <p>Siloed systems have duplicated functionality that work differently and requires understanding of new terms and workflows.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faPeopleGroup}/>
                </IconWithDualBgColor>
                <h3>Senior management works together</h3>
                <p>In siloed solutions, each department solves its problems individually, making reporting and tracking basic tasks
                  time-consuming.</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="product-modules">
          <header>
            <span>Code:metis</span>
            <h2>A suite of modules working together</h2>
            <p>And nimble enough for any department in you company.</p>
          </header>

          <ul className="styleless">
            <li>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faTriangleExclamation}/>
                </IconWithDualBgColor>
                <h3>Risk Manager</h3>
                <p>Financial, Operational and Strategic risks – all catered for under one platform.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Support for multi-level and jurisdiction organisations</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Risk library and risk instances fully customiseable</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Audited review, allocation and tracking of risks</span>
                  </li>
                </ul>
              </div>
              {!playVideo ? (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
                <div className="video-preview" role="button" onClick={handlePlayVideo}>
                  <img src="https://metis-grc.b-cdn.net/images/landing/risk-mobile.png" alt="GRC Risk module" className="mobile"/>
                  <img src="https://metis-grc.b-cdn.net/images/landing/risk-desktop.png" alt="GRC Risk module" className="desktop"/>
                  <button className="button icon-only light"><FontAwesomeIcon icon={faCirclePlay} /></button>
                </div>
              ) : (
                <VideoPlayer url="https://youtu.be/nm2vW3hIxdY" autoPlay/>
              )}
            </li>
            <li>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faFileSignature}/>
                </IconWithDualBgColor>
                <h3>Vendor Manager</h3>
                <p>Keep your vendor documents, key data, legal entities in one place.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Simple periodic audits and follow up of vendors</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Resources for Legal, Sales, Procurement & Vendor Management</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Track agreements by type, counterparty and conditions</span>
                  </li>
                </ul>
              </div>
              <img src="https://metis-grc.b-cdn.net/images/landing/vendor-mobile.png" alt="GRC Vendor module" className="mobile"/>
              <img src="https://metis-grc.b-cdn.net/images/landing/vendor-desktop.png" alt="GRC Vendor module" className="desktop"/>
            </li>
            <li>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faSquareCheck}/>
                </IconWithDualBgColor>
                <h3>Policy Manager</h3>
                <p>Managing Policies, Instructions, Guidelines, Handbooks.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Hierarchy of Rules, Instructions, Policies</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Simple review, approve and publish workflow</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Auditable history of all changes</span>
                  </li>
                </ul>
              </div>
              <img src="/images/landing/policy-mobile.png" alt="GRC Policy module" className="mobile"/>
              <img src="/images/landing/policy-desktop.png" alt="GRC Policy module" className="desktop"/>
            </li>
          </ul>
        </section>

        <section id="product-overview">
          <header>
            <span>Code:metis</span>
            <h2>Your company's overview</h2>
            <p>All Code:metis modules share a single source of truth for your company data.</p>
          </header>

          <div className="text-block-and-img">
            <ul className="styleless">
              <li>
                <div className="icon-with-square-border">
                  <FontAwesomeIcon icon={faScaleBalanced}/>
                </div>
                <div>
                  <h3>Company legal structure</h3>
                  <p>Track and map your ownership structure, jurisdictions, boards, officers.</p>
                </div>
              </li>
              <li>
                <div className="icon-with-square-border">
                  <FontAwesomeIcon icon={faSitemap}/>
                </div>
                <div>
                  <h3>Company management structure</h3>
                  <p>Track and map your management structure, departments, divisions, units, managers.</p>
                </div>
              </li>
              <li>
                <div className="icon-with-square-border">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
                </div>
                <div>
                  <h3>Connect Code:metis to your IT infrastructure</h3>
                  <p>Connect with your existing applications via our REST API. For example: feed your incidents or contracts from existing solutions
                    for an overview in Code:metis.</p>
                </div>
              </li>
            </ul>
            <img src="/images/landing/home-mobile.png" alt="App preview" className="mobile"/>
            <img src="/images/landing/home-desktop.png" alt="App preview" className="desktop"/>
          </div>
        </section>

        <section id="pricing">
          <header>
            <span>Pricing</span>
            <h2>Enterprise software pricing can be simple</h2>
            {/* <h2>Sign up for 30-day free trial. No credit card required.</h2> */}
          </header>

          <ul className="styleless">
            <li>
              <div className="pricing-data">
                <h3>Starter</h3>
                <div>
                  <span>399 €</span>
                  <span>/ month</span>
                </div>
                <ul className="styleless">
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>1 module between: Risks, Vendors, Policies</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Full integration with One Drive or Google Drive</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Unlimited audit history of all changes</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Unlimited individual users</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Priority email support</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-cta">
                {/* <button className="button">Start your free trial</button> */}
                <Link
                  to="/contact"
                  className="underlined appears"
                  onClick={() => triggerAnalyticsEvent(AnalyticsEvent.CLICK_PRICE_CTA_TIER_1)}
                >
                  CONTACT US
                </Link>
              </div>
            </li>
            <li>
              <div className="pricing-data">
                <h3>Business</h3>
                <div>
                  <span>999 €</span>
                  <span>/ month</span>
                </div>
                <ul className="styleless">
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Everything from the Starter tier</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>All modules: Risks, Vendors, Policies</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Legal and Management database</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Priority email and phone support</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-cta">
                <Link
                  to="/contact"
                  className="underlined appears"
                  onClick={() => triggerAnalyticsEvent(AnalyticsEvent.CLICK_PRICE_CTA_TIER_2)}
                >
                  CONTACT US
                </Link>
              </div>
            </li>
            <li>
              <div className="pricing-data">
                <h3>Enterprise</h3>
                <div><span>Custom</span></div>
                <ul className="styleless">
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Everything from the Business tier</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Extensive onboarding support</span>
                  </li>
                  <li>
                    <div className="icon-with-bg-color">
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>Self-hosting option</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-cta">
                <Link
                  to="/contact"
                  className="underlined appears"
                  onClick={() => triggerAnalyticsEvent(AnalyticsEvent.CLICK_PRICE_CTA_TIER_3)}
                >
                  CONTACT US
                </Link>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
