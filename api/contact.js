// Vercel Serverless Function for Contact Form
// Sends email notifications for form submissions

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message, honeypot } = req.body;

    // Honeypot spam protection
    if (honeypot) {
      return res.status(400).json({ error: 'Spam detected' });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Get admin email from request (set by CMS) or use default
    const adminEmail = req.body.adminEmail || process.env.ADMIN_EMAIL || 'info@lightbridgeconsulting.com';
    
    // Prepare email content
    const emailSubject = `New ${service || 'Contact'} Inquiry from ${name}`;
    const emailBody = `
New contact form submission from Lightbridge Consulting website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Message:
${message}

---
Submitted: ${new Date().toLocaleString()}
IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}
    `.trim();

    // Store submission in memory/database (for CMS)
    // In production, you'd store this in a database
    // For now, we'll use the Web3Forms API as a fallback
    
    // Option 1: Use Web3Forms (free, no API key needed for basic use)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_KEY',
        subject: emailSubject,
        from_name: 'Lightbridge Consulting Website',
        name: name,
        email: email,
        phone: phone || '',
        message: emailBody,
        to: adminEmail
      })
    });

    const result = await response.json();

    if (result.success) {
      // Store in localStorage on client side will be handled by frontend
      return res.status(200).json({
        success: true,
        message: 'Thank you! We\'ve received your inquiry and will respond within 24 hours.'
      });
    } else {
      throw new Error('Failed to send email');
    }

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({
      error: 'Failed to submit form. Please try emailing us directly.',
      details: error.message
    });
  }
}

