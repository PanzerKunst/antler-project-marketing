import "./ContactPage.scss"

export function ContactPage() {
  return (
    <div className="page simple contact">
      <main className="container two-col">
        <div>
          <h1>Contact us</h1>
          <p>We're just getting started, and would love to hear from you. How can we build the best possible product for you?</p>
          <p>Don't hesitate to email us at <span className="underlined disappears">metis@chelsea.se</span>.</p>
        </div>
        <img src="https://metis-grc.b-cdn.net/images/contact/oscar-nord-7WlEdxOy-QA-unsplash.jpg" alt="Stockholm" className="desktop"/>
      </main>
      <img src="https://metis-grc.b-cdn.net/images/contact/raphael-andres-3cwvFD-YPtk-unsplash.jpg" alt="Stockholm" className="mobile"/>
    </div>
  )
}
