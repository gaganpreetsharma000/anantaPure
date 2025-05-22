import { useEffect } from "react";
import "../styles/Cookies.css";

const Cookies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
    // className="cookies-page"
    // style={{ backgroundImage: `url(${background_img})` }}
    >
      <div className="cookies-container">
        <h1>Cookie Policy</h1>
        <p className="last-updated">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="cookies-content">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help improve user experience, track website
            performance, and personalize content.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>Ananta Promotix uses cookies for the following purposes:</p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Necessary for website
              functionality.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Track website traffic and user
              behavior (Google Analytics, Meta Ads, etc.).
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used for remarketing and
              targeted ads.
            </li>
          </ul>

          <h2>3. Third-Party Cookies</h2>
          <p>
            We may allow third-party services (e.g., Google, Meta) to place
            cookies for analytics and advertising purposes.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can manage or disable cookies in your browser settings. Note
            that disabling cookies may affect website functionality.
          </p>

          <p className="contact-highlight">
            For more details, contact us at{" "}
            <strong>privacy@anantapure.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
