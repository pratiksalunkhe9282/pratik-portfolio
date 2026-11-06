
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";
import "./Contact.css";

// EmailJS configuration
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Update input values
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Send email
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ type: "", message: "" });

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured. Check your .env file.",
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,

            template_params: {
              from_name: form.name.trim(),
              from_email: form.email.trim(),
              reply_to: form.email.trim(),
              message: form.message.trim(),
              to_email: personalInfo.email,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for contacting me.",
      });

      // Clear form after successful sending
      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: "Message could not be sent. Please try again later.",
      });

    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      className="section-pad section section-alt"
      id="contact"
    >
      <div className="container">

        <SectionHeading
          eyebrow="LET'S CONNECT"
          title={
            <>
              Have an idea?{" "}
              {/* <span className="accent-text">Let's talk.</span> */}
            </>
          }
          description="Have a role, project or opportunity in mind? Send me a message. I'd be happy to connect."
        />

        <div className="contact-layout">

          {/* Contact information */}
          <div className="contact-details">

            <h3>Make the first move.</h3>

            <p>
              I’m open to conversations about software development,
              collaborations and opportunities to grow.
            </p>

            <a href={`mailto:${personalInfo.email}`}>
              <span><Mail size={18} /></span>
              <div>
                <small>EMAIL ME</small>
                {personalInfo.email}
              </div>
              <ArrowUpRight size={16} />
            </a>

            <a href={personalInfo.phoneLink}>
              <span><Phone size={18} /></span>
              <div>
                <small>CALL ME</small>
                {personalInfo.phone}
              </div>
              <ArrowUpRight size={16} />
            </a>

            <div className="contact-location">
              <span><MapPin size={18} /></span>
              <div>
                <small>BASED IN</small>
                {personalInfo.location}
              </div>
            </div>

            <div className="contact-social">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
            </div>

          </div>

          {/* Contact form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-heading">
              <span>01 — DROP A MESSAGE</span>
              <Send size={18} />
            </div>

            <label>
              Your name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                maxLength={100}
                required
              />
            </label>

            <label>
              Your email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                maxLength={5000}
                required
              />
            </label>

            {/* Success or error message */}
            {status.message && (
              <p
                className={`form-status form-${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}

            <button
              className="button button-primary form-submit"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send message"}

              {!isSending && <ArrowUpRight size={17} />}
            </button>

            <p className="form-hint">
              <CheckCircle2 size={14} />
              Your message will be sent directly to my inbox.
            </p>

          </form>

        </div>
      </div>
    </section>
  );
}
