import React from "react";

function ContactPage() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  };

  const detailsStyle = {
    flex: 1,
    paddingRight: '50px',
    paddingLeft: '100px',
  };

  const headingStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    color: 'ooo',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '10px',
    lineHeight: '1.4',
  };

  const contactInfoStyle = {
    fontSize: '16px',
    lineHeight: '1.4',
  };

  const contactInfoItemStyle = {
    marginBottom: '5px',
  };

  const contactInfoLabelStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
  };

  const formStyle = {
    flex: 1,
  };

  const formHeadingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '16px',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#555',
  };

  return (
    <div style={containerStyle}>
      <div style={detailsStyle}>
        <h1 style={headingStyle}>Contact Us</h1>
        <p style={paragraphStyle}>For any inquiries or feedback, please feel free to reach out to us:</p>
        <div style={contactInfoStyle}>
          <div style={contactInfoItemStyle}>
            <span style={contactInfoLabelStyle}>Email:</span> contact@example.com
          </div>
          <div style={contactInfoItemStyle}>
            <span style={contactInfoLabelStyle}>Phone:</span> 123-456-7890
          </div>
          <div style={contactInfoItemStyle}>
            <span style={contactInfoLabelStyle}>Address:</span> 123 Main Street, City, Country
          </div>
        </div>
      </div>
      <div style={formStyle}>
        <h2 style={formHeadingStyle}>Send us a message</h2>
        <form>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Name:</label>
            <input type="text" id="name" name="name" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input type="email" id="email" name="email" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="message" style={labelStyle}>Message:</label>
            <textarea id="message" name="message" rows="5" style={textareaStyle} required></textarea>
          </div>
          <button type="submit" style={buttonStyle}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
