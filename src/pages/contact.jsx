import "./page.css";

function Contact() {
  return (
    <div className="page contact">
      <h1>Contact Us</h1>
      <p>Have a question or need support? We’d love to hear from you.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button className="btn" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
