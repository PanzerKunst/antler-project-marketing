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

            <p>Are you growing and are finding it harder to keep track of the key elements of your business?</p>

            <p>Do external requests for information on processes, controls, risks and compliance overwhelm your main focus?</p>

            <p>We have grown up supporting companies just like yours. We're taking all this experience and designing a product for you.</p>

            <p>Battle-tested for finance, healthcare and insurance.</p>
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
                <p>Siloed systems mean the CEO and Board need to request data from each department individually.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Duplicated, out-of-date data</h3>
                <p>Siloed systems mean that basic company data is not updated or available for everyone.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>No scale benefits</h3>
                <p>Each solution requires a new implementation and a new procurement process.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Unnecessary complexity</h3>
                <p>Each system has duplicated functionality that works differently and requires understanding of new terms and workflows.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Integration costs are often expensive</h3>
                <p>DD, RFP, Audit of each new supplier takes time, implementation is costly.</p>
              </li>
              <li>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Senior management work alone</h3>
                <p>Without a common solution, each department solves its problems individually, making reporting and tracking basic tasks
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
                  <FontAwesomeIcon icon={faEye}/>
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
              <img src="/images/landing/app-preview-risk-manager.png" alt="App preview"/>
            </li>
            <li>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Contract Manager</h3>
                <p>Keep your documents, key data, legal entities in one place.</p>
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
              <img src="/images/landing/app-preview-risk-manager.png" alt="App preview"/>
            </li>
            <li>
              <div>
                <IconWithDualBgColor>
                  <FontAwesomeIcon icon={faEye}/>
                </IconWithDualBgColor>
                <h3>Compliance Manager</h3>
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
              <img src="/images/landing/app-preview-risk-manager.png" alt="App preview"/>
            </li>
          </ul>
        </section>

        <section id="product-overview">
          <header>
            <span>Code:metis</span>
            <h2>Overview for your company</h2>
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
                  <p>Connect with your existing applications via our REST API. For example: feed your incidents or contracts from existing
                    solutions for an overview in Code:metis.</p>
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
                  <span>All modules: Risks, Contracts, Compliance</span>
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
                  <span><strong>Links</strong> to One Drive or Google Drive</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span><strong>1 year</strong> audit history of all changes</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Priority email support</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Up to 50 individual users</span>
                </li>
              </ul>
              <button className="button"><span>Get started</span></button>
            </li>
            <li>
              <span>$1 499/mth</span>
              <h3>Business plan</h3>
              <ul className="styleless">
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>All modules: Risks, Contracts, Compliance</span>
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
                  <span><strong>Full integration</strong> with One Drive or Google Drive</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span><strong>5 year</strong> audit history of all changes</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Priority email support</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Up to 100 individual users</span>
                </li>
              </ul>
              <button className="button"><span>Get started</span></button>
            </li>
            <li>
              <span>$14 500/mth</span>
              <h3>Enterprise plan</h3>
              <ul className="styleless">
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>All modules: Risks, Contracts, Compliance</span>
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
                  <span><strong>Full integration</strong> with One Drive or Google Drive</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span><strong>10 year</strong> audit history of all changes</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Priority email and phone support</span>
                </li>
                <li>
                  <div className="icon-with-bg-color">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <span>Unlimited individual users</span>
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
