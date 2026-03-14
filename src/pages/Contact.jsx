import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import siteConfig from "../data/siteConfig";

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact HiAnime Alternative",
    url: `${siteConfig.siteUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.siteName,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.location.address,
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        postalCode: siteConfig.location.zip,
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact Us - HiAnime Alternative"
        description="Get in touch with the HiAnime Alternative team in New York, USA. Suggest new HiAnime alternatives, report broken links, or ask questions."
        path="/contact"
        jsonLd={jsonLd}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> &rsaquo; <span>Contact Us</span>
          </nav>
          <h1>Contact HiAnime Alternative</h1>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We&apos;d love to hear from you! Whether you have a suggestion
                for a new <Link to="/alternatives">HiAnime alternative</Link>,
                found a broken link, or just want to say hello — reach out to
                us using any of the methods below.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </p>
                  <p>We typically respond within 24-48 hours.</p>
                </div>

                <div className="contact-method">
                  <h3>Discord Community</h3>
                  <p>
                    <a
                      href={siteConfig.social.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join our Discord Server
                    </a>
                  </p>
                  <p>
                    Chat with fellow anime fans and get real-time support.
                  </p>
                </div>

                <div className="contact-method">
                  <h3>Our Office</h3>
                  <p>
                    {siteConfig.location.address}
                    <br />
                    {siteConfig.location.city}, {siteConfig.location.state}{" "}
                    {siteConfig.location.zip}
                    <br />
                    {siteConfig.location.country}
                  </p>
                </div>
              </div>

              <h2>How Can We Help?</h2>
              <ul>
                <li>
                  <strong>Suggest a Site:</strong> Know a great{" "}
                  <strong>HiAnime alternative</strong> we should add? Email us
                  with the site name and URL.
                </li>
                <li>
                  <strong>Report Issues:</strong> Found a broken link or
                  inaccurate information on our{" "}
                  <Link to="/alternatives">alternatives list</Link>? Let us
                  know so we can fix it.
                </li>
                <li>
                  <strong>Partnership:</strong> Interested in collaborating?
                  We&apos;re open to partnerships that benefit the anime
                  community.
                </li>
                <li>
                  <strong>General Inquiries:</strong> Any other questions about{" "}
                  {siteConfig.siteName}? We&apos;re happy to help.
                </li>
              </ul>

              <p>
                You can also learn more <Link to="/about">about our team</Link>{" "}
                or read our <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
