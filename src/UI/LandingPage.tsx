import { faCircleCheck, faEye } from "@fortawesome/free-regular-svg-icons"
import { faArrowRightArrowLeft, faCheck, faScaleBalanced, faSitemap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { IconWithDualBgColor } from "./_CommonComponents/IconWithDualBgColor.tsx"
import { useViewportSize } from "../Util/BrowserUtils.ts"

import s from "/src/UI/_CommonStyles/_exports.module.scss"
import "./LandingPage.scss"

export function LandingPage() {
  const viewportWidth = useViewportSize().width
  const viewportWidthMd = parseInt(s.vwMd || "")
  const isMobile = viewportWidth < viewportWidthMd

  return (
    <div className="page landing">
      <main>
        <section id="hero" className="text-block-and-img">
          <div>
            <h1>20-20 Oversight</h1>
            <p>Operating in a regulated or controlled environment?</p>

            <p>We've supported dozens of companies just like yours. We're taking all this experience and designed a product for you.</p>

            <p>Battle-tested for the finance and healthcare industries.</p>
            {/* <a href="https://app.metis.8b.nu" className="button lg">
              <FontAwesomeIcon icon={faCirclePlay}/>
              <span>Try it out</span>
            </a> */}
          </div>
          {isMobile
            ? <img src="/images/landing/hero-mobile.png" alt="App preview"/>
            : <img src="/images/landing/hero-desktop.png" alt="App preview"/>}
        </section>

        <section id="why">
          <div className="container">
            <header>
              <span>Why</span>
              <h2>Traditional control systems are siloed</h2>
              <p>Legal, Risk, Compliance, Operations, IT, Procurement. All these departments using different, expensive control systems.</p>
            </header>
            <ul className="styleless">
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
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
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Risk Manager</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Feature</span>
                  </li>
                </ul>
              </div>
              <img src="/images/landing/app-preview-risk-manager.png" alt="App preview"/>
            </li>
            <li>
              <img src="/images/landing/app-preview-risk-manager.png" alt="App preview"/>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Contract Manager</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Feature</span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Compliance Manager</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>Feature</span>
                  </li>
                </ul>
              </div>
              <img src="/images/landing/app-preview-risk-manager.png" alt="App preview"/>
            </li>
          </ul>
        </section>

        <section id="product-oversight">
          <header>
            <span>Code:metis</span>
            <h2>Oversight for your company</h2>
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
                  <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                </div>
              </li>
              <li>
                <div className="icon-with-square-border">
                  <FontAwesomeIcon icon={faSitemap}/>
                </div>
                <div>
                  <h3>Company legal structure</h3>
                  <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                </div>
              </li>
              <li>
                <div className="icon-with-square-border">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
                </div>
                <div>
                  <h3>Company legal structure</h3>
                  <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                </div>
              </li>
            </ul>
            <img src="/images/landing/app-preview.png" alt="App preview"/>
          </div>
        </section>

        <section id="pricing">
          <header>
            <span>Pricing</span>
            <h2>Simple, transparent pricing</h2>
            <p>The onboarding cost? Zero.</p>
          </header>

          <ul className="styleless">
            <li>
              <span>$499/mth</span>
              <h3>Starter plan</h3>
              <ul className="styleless">
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Feature</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Another feature</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Feature</span>
                </li>
              </ul>
              <button className="button"><span>Get started</span></button>
            </li>
            <li>
              <span>$699/mth</span>
              <h3>Business plan</h3>
              <ul className="styleless">
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Feature</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Another feature</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Feature</span>
                </li>
              </ul>
              <button className="button"><span>Get started</span></button>
            </li>
            <li>
              <span>$899/mth</span>
              <h3>Enterprise plan</h3>
              <ul className="styleless">
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Feature</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Another feature</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Feature</span>
                </li>
              </ul>
              <button className="button"><span>Get started</span></button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
