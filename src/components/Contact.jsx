// src/components/Contact.jsx

import React, { useState } from 'react'; 
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); 
  const [phoneError, setPhoneError] = useState(false); 

  // Points to the new Vercel Serverless Function file (api/contact.js)
  const CONTACT_API_ENDPOINT = '/api/contact'; 

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const filteredValue = value.replace(/\D/g, ''); 
      const limitedValue = filteredValue.slice(0, 10);

      if (limitedValue.length > 0 && limitedValue.length !== 10) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
      
      setFormData({ ...formData, [name]: limitedValue });

    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.phone.length !== 10) {
      setPhoneError(true);
      setStatus('error'); 
      setTimeout(() => setStatus(null), 3000);
      return; 
    }
    
    setStatus('sending'); 

    try {
      // Sending data as JSON to the Vercel API endpoint
      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        setStatus('success'); 
        setFormData({ name: '', phone: '', message: '' }); 
        setTimeout(() => setStatus(null), 5000); 
      } else {
        // If the API returns a 500 status (error in sending email)
        setStatus('error');
        setTimeout(() => setStatus(null), 5000); 
      }
    } catch (error) {
      // If the API endpoint is unreachable
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000); 
    }
  };

  const getButtonText = () => {
    if (status === 'sending') return 'Sending...';
    if (status === 'success') return 'Sent Successfully!';
    if (status === 'error' && phoneError) return 'Fix Phone Number';
    if (status === 'error') return 'Error! Try Again';
    return 'Send Message';
  };
  
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Ready to Order? Get in Touch!</h2>
      <p className="section-subtitle">
        The fastest way to place an order is by calling us directly, or send us a quick message below.
      </p>

      <div className="contact-grid">
        {/* 1. Direct Contact Info Block - RESTORED */}
        <div className="contact-info-block">
          <h3>Direct Order & Support</h3>
          
          <div className="contact-detail">
            <span className="icon">📞</span>
            <p>
              **Primary Call:** <a href="tel:+918500342029" className="phone-link">
                +91 85003 42029
              </a>
            </p>
          </div>
          
          <div className="contact-detail">
            <span className="icon">📞</span>
            <p>
              **Alternate Call:** <a href="tel:+919059682029" className="phone-link">
                +91 90596 82029
              </a>
            </p>
          </div>
          
          <div className="contact-detail">
            <span className="icon">📍</span>
            <p>
              **Our Location:** NehruStreet last, SanthiNagar, Bangarupalem, AP 517416
            </p>
          </div>
          
          <div className="contact-detail">
            <span className="icon">📧</span>
            <p>
              **Email:** <a href="mailto:chandumineralwater@gmail.com" className="email-link">
                chandumineralwater@gmail.com
              </a>
            </p>
          </div>
        </div>
        {/* END 1. Direct Contact Info Block */}

        {/* 2. Simple Contact Form */}
        <div className="contact-form-block">
          <h3>Send a Quick Inquiry</h3>
          
          <form className="order-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} disabled={status === 'sending' || status === 'success'} /> 
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number (10 Digits)</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                placeholder="e.g., 9876543210" 
                value={formData.phone} 
                onChange={handleChange} 
                maxLength="10" 
                pattern="\d{10}" 
                title="Phone number must be exactly 10 digits"
                className={phoneError ? 'input-error' : ''}
                disabled={status === 'sending' || status === 'success'}
              /> 
              {phoneError && (
                <small className="phone-validation-text">Please enter a valid 10-digit phone number.</small>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Order/Message</label>
              <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} placeholder="e.g., I need 2 x 20L cans delivered tomorrow." disabled={status === 'sending' || status === 'success'}></textarea>
            </div>
            
            {/* Show status messages directly below the form fields */}
            {status === 'success' && 
              <p className="status-message success-message">✅ Order sent successfully! We will call you shortly to confirm.</p>
            }
            {status === 'error' && !phoneError &&
              <p className="status-message error-message">❌ Error sending. Check Vercel logs or contact us directly.</p>
            }
            {status === 'error' && phoneError &&
              <p className="status-message error-message">⚠️ Please correct the phone number and try again.</p>
            }

            <button type="submit" className={`cta-button ${status === 'sending' ? 'sending' : ''} ${status === 'success' ? 'success' : ''}`} disabled={status === 'sending' || status === 'success' || phoneError}>
              {getButtonText()}
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;