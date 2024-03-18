import "./LandingPage.scss"

export function LandingPage() {
  return (
    <div className="page landing">
      <main>
        <section id="hero">
          <div>
            <h1>20-20 Oversight</h1>
            <p>Operating in a regulated or controlled environment?
              <br/>
              We've supported dozens of companies just like yours. We're taking all this experience and designed a product for you.
              <br/>
              Battle-tested for the finance, healthcare and xyz industries.
            </p>
            <a href="https://app.metis.8b.nu" className="button">Try it out</a>
          </div>
          <img src="/images/hero/app-preview.png" alt="App preview" />
        </section>
      </main>
    </div>
  )
}
