// src/pages/Contact.jsx
import PageBanner from '../PageBanner';
import contactImg from '../assets/farmPic.jpeg';

function Contact() {
  return (
    <div>
      <PageBanner title="Contact" image={contactImg} />
      <div className="page-content">
        <h2>Get In Touch</h2>
      </div>
    </div>
  );
}
export default Contact;