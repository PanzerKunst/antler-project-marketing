import "./SimplePage.scss"
import "./ConsultingPage.scss"

export function ConsultingPage() {
  return (
    <div className="page simple consulting">
      <main className="container two-col">
        <div>
          <h1>Consulting Services</h1>
          <p>There are more than 200 GRC solutions available from €100 to €100 000 per month, with new options coming out every couple of months.</p>
          <p>Our extensive research can help you choose the right solution for your company by finding the right mix of homegrown and professional
            solutions for Risk, Compliance, Operations, Vendors, Contracts.</p>
          <p>We'll find the right solution for you. Send an email to <span className="underlined disappears">grace@chelsea.se</span> and let's
            setup a call!</p>
        </div>
        <img src="/images/consulting/consulting-desktop.jpg" alt="Consultancy" className="desktop"/>
      </main>
      <img src="/images/consulting/consulting-mobile.jpg" alt="Consultancy" className="mobile"/>
    </div>
  )
}
