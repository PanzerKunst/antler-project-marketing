import { faCirclePlay, faEye } from "@fortawesome/free-regular-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { IconWithDualBgColor } from "./_CommonComponents/IconWithDualBgColor.tsx"

import "./LandingPage.scss"

export function LandingPage() {
  /* eslint-disable react/no-unescaped-entities */
  return (
    <div className="page landing">
      <main>
        <section id="hero" className="text-block-and-img">
          <div>
            <h1>20-20 Oversight</h1>
            <p>Operating in a regulated or controlled environment?</p>

            <p>We've supported dozens of companies just like yours. We're taking all this experience and designed a product for you.</p>

            <p>Battle-tested for the finance, healthcare and xyz industries.</p>
            <a href="https://app.metis.8b.nu" className="button lg">
              <FontAwesomeIcon icon={faCirclePlay} />
              <span>Try it out</span>
            </a>
          </div>
          <img src="/images/landing/app-preview.png" alt="App preview"/>
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
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>No overview for the CEO</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="product-modules">
          <header>
            <span>Metis</span>
            <h2>A suite of modules working together</h2>
            <p>And nimble enough for any department in you company.</p>
          </header>

          <ul className="styleless">
            <li>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>Risk Manager</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
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
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>Contract Manager</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye} />
                </IconWithDualBgColor>
                <h3>Compliance Manager</h3>
                <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
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
            <span>Metis</span>
            <h2>Oversight for your company</h2>
            <p>All Metis modules share a single source of truth for your company data.</p>
          </header>

          <div className="text-block-and-img">
            <ul className="styleless">
              <li>
                <FontAwesomeIcon icon={faXmark}/>
                <div>
                  <h3>Company legal structure</h3>
                  <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark}/>
                <div>
                  <h3>Company legal structure</h3>
                  <p>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. Some text here.</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark}/>
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

          <ul className="styleless container">
            <li>
              <div>
                <span>$499/mth</span>
                <h3>Starter plan</h3>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                </ul>
                <button className="button"><span>Get started</span></button>
              </div>
            </li>
            <li>
              <div>
                <span>$699/mth</span>
                <h3>Business plan</h3>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                </ul>
                <button className="button"><span>Get started</span></button>
              </div>
            </li>
            <li>
              <div>
                <span>$899/mth</span>
                <h3>Enterprise plan</h3>
                <ul className="styleless">
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Another feature</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark}/>
                    <span>Feature</span>
                  </li>
                </ul>
                <button className="button"><span>Get started</span></button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
  /* eslint-enable react/no-unescaped-entities */
}
