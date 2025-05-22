// import React from "react";

// function Contact() {
//   return (
//     <div className="bg-green-900 relative w-full h-screen text-lg font-bold p-6">
//       <h1
//         className="text-4xl text-gray-50  cl flex flex-col items-center p-4  transform transition-transform duration-300
//         hover:scale-105"
//       >
//         Contact Us
//       </h1>
//       <br />
//       <p
//         className="text-4xl text-gray-50  cl flex flex-col items-center p-4  transform transition-transform duration-300
//         hover:scale-105"
//       >
//         Feel free to reach out to us for any inquiries.
//       </p>
//       <p
//         className="text-4xl text-gray-50  cl flex flex-col items-center p-4  transform transition-transform duration-300
//         hover:scale-105"
//       >
//         Email: info@anantapure.com
//       </p>
//       <p
//         className="text-4xl text-gray-50  cl flex flex-col items-center p-4  transform transition-transform duration-300
//         hover:scale-105"
//       >
//         Phone: +91-9872556257{" "}
//       </p>
//     </div>
//   );
// }

// export default Contact;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import "/src/styles/Contact.css";
import msgIcon from "/src/assets/contacts/icons/msg-icon.png";
import mailIcon from "/src/assets/contacts/icons/mail-icon.png";
import phoneIcon from "/src/assets/contacts/icons/phone-icon.png";
import locationIcon from "/src/assets/contacts/icons/location-icon.png";
import whitearrow from "/src/assets/contacts/white-arrow.png";

const Contact = () => {
  // Image paths (now using absolute paths from public folder)
  const icons = {
    message: msgIcon, // Use the imported variable
    mail: mailIcon,
    phone: phoneIcon,
    location: locationIcon,
    whiteArrow: whitearrow,
  };

  const [result, setResult] = useState("");

  useEffect(() => {
    // Add cursor effect for neon elements
    const handleMouseMove = (e) => {
      const neonElements = document.querySelectorAll(".neon-effect");
      neonElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty("--mouse-x", `${x}px`);
        element.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "71c4dd6f-b520-43ab-b16e-ad889c3155f3");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Submission failed");
        console.error("Submission error:", data);
      }
    } catch (error) {
      setResult("Network error. Please try again.");
      console.error("Network error:", error);
    }
  };

  return (
    <div className="service-page">
      {/* Animated Background */}
      <div className="service-bg-overlay"></div>
      <div className="service-bg-pattern"></div>

      <div className="contact-container neon-effect">
        <div className="contact-info">
          <h3 className="contact-title neon-text">
            Send us a message{" "}
            <img src={icons.message} alt="Message icon" aria-hidden="true" />
          </h3>
          <p className="contact-description neon-paragraph">
            Feel free to reach out to us if you are interested in our products.
            We would love to hear from you!, or just have a question, our team
            is here to help.
          </p>
          <ul className="contact-details neon-list">
            <h5 className="us-office">US Office</h5>
            <li className="contact-item neon-list-item">
              <img src={icons.mail} alt="Email icon" />
              <span>info@anantapure.com</span>
            </li>
            <li className="contact-item neon-list-item">
              <img src={icons.phone} alt="Phone icon" />
              <span>+1-9257667926</span>
            </li>
            <li className="contact-item neon-list-item">
              <img src={icons.location} alt="Location icon" />
              <address>
                5950 Barbosa Drive, North Las Vegas, Neveda 89031, USA
              </address>
            </li>
          </ul>

          <div>
            <ul className="contact-details neon-list">
              <h5 className="india-office">India Office</h5>
              <li className="contact-item neon-list-item">
                <img src={icons.mail} alt="Email icon" />
                <span>info@anantapure.com</span>
              </li>
              <li className="contact-item neon-list-item">
                <img src={icons.phone} alt="Phone icon" />
                <span>+91-9872556257</span>
              </li>
              <li className="contact-item neon-list-item">
                <img src={icons.location} alt="Location icon" />
                <address>
                  56 Vista Towers, Kharad, Mohali, Punjab, India
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-form-wrapper neon-effect">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="neon-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="neon-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="neon-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your E-mail"
                className="neon-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="neon-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your mobile number"
                className="neon-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="neon-label">
                Write your messages here
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Enter your message"
                className="neon-textarea"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button neon-button">
              Submit now
              <img
                src={icons.whiteArrow}
                alt=""
                className="submit-arrow"
                aria-hidden="true"
              />
            </button>
          </form>

          {result && <div className="form-result neon-text">{result}</div>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
