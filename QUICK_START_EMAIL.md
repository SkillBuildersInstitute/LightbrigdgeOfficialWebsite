# 🚀 Quick Start: Email Setup (5 Minutes)

Your contact form is now ready to send email notifications! Follow these simple steps to activate it.

## ✅ Step 1: Get Your Free Web3Forms Key (2 minutes)

1. Visit **https://web3forms.com**
2. Enter your email: `info@lightbridgeconsulting.com` (or your preferred email)
3. Click **"Get Access Key"**
4. Check your email and **copy the access key** (looks like: `a1b2c3d4-e5f6-...`)

## ✅ Step 2: Add Key to Vercel (2 minutes)

1. Go to **https://vercel.com/dashboard**
2. Select your **Lightbridge Consulting** project
3. Click **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Paste your key from Step 1
   - **Environments**: Check all three (Production, Preview, Development)
5. Click **Save**

## ✅ Step 3: Configure in CMS (1 minute)

1. Go to your website's admin panel:
   - **https://lightbrigdge-official-website.vercel.app/cms/admin.html**
2. Click the **Settings** tab (gear icon)
3. Under **"Email Notifications"**:
   - Enter email: `info@lightbridgeconsulting.com`
   - Check: ☑ "Enable email notifications"
4. Click **Save Settings**

## ✅ Step 4: Test It! (30 seconds)

1. Go to your contact page: **/pages/contact.html**
2. Fill out the form with test data
3. Click **"Start the Conversation"**
4. Check your email inbox (should arrive within seconds!)
5. Check CMS → **Submissions** tab to see it saved

---

## 📧 What Happens When Someone Submits?

```
User fills form → Validates → Sends to serverless function
                                      ↓
                     Web3Forms emails you immediately
                                      ↓
                     Submission saved in CMS panel
                                      ↓
                     User sees success message
```

## 🎯 Where to View Submissions

**Option 1: Email** (instant notification)
- Check `info@lightbridgeconsulting.com`
- Each submission arrives as formatted email
- Includes name, email, phone, service, message

**Option 2: CMS Panel** (view all submissions)
- Go to: `/cms/admin.html` → **Submissions** tab
- See all inquiries with timestamps
- Click **Reply** button to respond
- Use **Export** to backup submissions

## ⚙️ Managing Email Settings

**Turn off notifications temporarily:**
1. CMS → Settings
2. Uncheck "Enable email notifications"
3. Submissions still save in CMS, just no emails

**Change email address:**
1. CMS → Settings → Email Notifications
2. Update admin email address
3. Click Save Settings

**Backup submissions:**
1. CMS → Settings → Backup & Restore
2. Click "Export All Content"
3. Save JSON file with all submissions

## 🛠️ Troubleshooting

**Not receiving emails?**
- ✅ Check spam/junk folder
- ✅ Verify Web3Forms key in Vercel environment variables
- ✅ Check email address in CMS Settings is correct
- ✅ Verify "Enable email notifications" is checked
- ✅ Go to Vercel → Functions → `/api/contact` to check logs

**Submissions not showing in CMS?**
- ✅ Clear browser cache and try again
- ✅ Open browser console (F12) and check for errors
- ✅ Submissions use localStorage (browser-specific)

**Form shows error?**
- ✅ Check Vercel deployment completed successfully
- ✅ Verify environment variable is set for all environments
- ✅ Check browser console for specific error messages

## 📊 Free Tier Limits

**Web3Forms Free Plan:**
- ✅ 250 submissions per month
- ✅ No credit card required
- ✅ Unlimited recipients
- ✅ Spam protection included

**Vercel Free Plan:**
- ✅ 100,000 serverless function calls/month
- ✅ More than enough for small-medium traffic

## 📝 Next Steps

1. **Test the form** - Submit a test inquiry
2. **Check email works** - Verify you received notification
3. **Customize email** - Edit `/api/contact.js` if needed
4. **Monitor submissions** - Check CMS weekly
5. **Respond promptly** - Use Reply button for quick responses

## 🆘 Need Help?

- **Full Documentation**: [EMAIL_SETUP.md](EMAIL_SETUP.md)
- **Admin Guide**: [ADMIN.md](ADMIN.md)
- **Web3Forms Docs**: https://web3forms.com/docs
- **Vercel Support**: https://vercel.com/support

---

**You're all set! 🎉**

Your contact form now sends professional email notifications automatically. Every inquiry is saved in your CMS panel and emailed to you instantly.

