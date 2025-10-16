# Email Setup Guide

This guide explains how to configure email notifications for form submissions on your Lightbridge Consulting website.

## Overview

The contact form uses a serverless function (`/api/contact.js`) to send emails via **Web3Forms**, a free email service that requires no backend configuration.

## Quick Setup (5 minutes)

### Step 1: Get Your Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email address (the one where you want to receive form submissions)
3. Click "Get Access Key"
4. Check your email and copy the access key

### Step 2: Configure in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Your access key from Step 1
   - **Environment**: Production, Preview, Development (select all)
4. Click "Save"

### Step 3: Configure Admin Email in CMS

1. Go to your website's admin panel: `/src/cms/admin.html`
2. Click the **Settings** tab
3. Under **Email Notifications**, enter your email address
4. Check "Enable email notifications for new form submissions"
5. Click **Save Settings**

### Step 4: Redeploy (if needed)

If you already deployed to Vercel before adding the environment variable:
1. Go to **Deployments** in Vercel
2. Click on the latest deployment
3. Click **Redeploy**

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. You should receive an email within seconds
4. The submission will also appear in the CMS admin panel under **Submissions**

## Alternative Email Services

### Option 1: SendGrid (100 emails/day free)

1. Sign up at [https://sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Add to Vercel environment variables:
   - `SENDGRID_API_KEY=your_api_key`
4. Update `/api/contact.js` to use SendGrid SDK

### Option 2: Mailgun (100 emails/day free)

1. Sign up at [https://mailgun.com](https://mailgun.com)
2. Get your API key and domain
3. Add to Vercel environment variables:
   - `MAILGUN_API_KEY=your_api_key`
   - `MAILGUN_DOMAIN=your_domain`
4. Update `/api/contact.js` to use Mailgun SDK

## How It Works

```
User submits form
    ↓
JavaScript (main.js) validates and sends data
    ↓
Serverless function (/api/contact.js) receives data
    ↓
Web3Forms sends email to admin
    ↓
Submission saved in localStorage (visible in CMS)
    ↓
User sees success message
```

## CMS Features

### View Submissions

1. Open `/src/cms/admin.html`
2. Click **Submissions** tab
3. View all form submissions with:
   - Name, email, phone
   - Service interest
   - Message
   - Timestamp
   - Reply button (opens email client)

### Email Settings

Configure in **Settings** tab:
- **Admin Email**: Where to send notifications
- **Email Notifications**: Toggle on/off
- **Service Choice**: Appears in email subject

### Backup Submissions

1. Go to **Settings** → **Backup & Restore**
2. Click **Export All Content**
3. Save the JSON file (includes all submissions)

## Security Features

✅ **Honeypot spam protection**: Hidden field catches bots
✅ **CSRF token validation**: Prevents cross-site attacks
✅ **Input sanitization**: OWASP-compliant data cleaning
✅ **Rate limiting**: Prevents abuse (built into Web3Forms)
✅ **Email validation**: Server-side validation
✅ **XSS protection**: HTML escaped before display

## Troubleshooting

### No emails received

1. Check Vercel environment variables are set
2. Verify email in CMS Settings is correct
3. Check spam/junk folder
4. Verify Web3Forms access key is active
5. Check Vercel function logs for errors

### Submissions not appearing in CMS

- Submissions are stored in browser localStorage
- Clear browser cache and resubmit
- Check browser console for JavaScript errors

### Function errors

1. Go to Vercel dashboard → **Functions**
2. Click on `/api/contact`
3. View logs for error details
4. Common issues:
   - Missing environment variables
   - Invalid API key
   - Network/CORS issues

## Cost

- **Web3Forms**: Free (250 submissions/month)
- **Vercel Functions**: Free tier includes 100,000 invocations/month
- **Storage**: localStorage (free, browser-based)

## Support

For issues or questions:
- Email: info@lightbridgeconsulting.com
- Documentation: README.md, ADMIN.md
- Web3Forms support: https://web3forms.com/docs

