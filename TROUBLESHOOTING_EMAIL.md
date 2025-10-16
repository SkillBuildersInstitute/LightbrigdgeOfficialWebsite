# 🔧 Email Troubleshooting Guide

Not receiving emails from your contact form? Let's fix it! Follow these steps in order.

---

## ✅ Step 1: Verify Vercel Environment Variable

### Check if the key is set correctly:

1. Go to **https://vercel.com/dashboard**
2. Click your **Lightbridge Consulting** project
3. Go to **Settings** → **Environment Variables**
4. Look for: `WEB3FORMS_ACCESS_KEY`

### ⚠️ Common Issues:

**Issue**: Variable not found
- **Fix**: Add it! Click "Add New" → Name: `WEB3FORMS_ACCESS_KEY` → Value: (paste your key)

**Issue**: Wrong environment selected
- **Fix**: Make sure ALL THREE are checked:
  - ✅ Production
  - ✅ Preview  
  - ✅ Development

**Issue**: Key has spaces or special characters
- **Fix**: Key should look like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
- Remove any quotes, spaces, or line breaks

### After fixing: **REDEPLOY**
1. Go to **Deployments** tab
2. Click **...** (three dots) on latest deployment
3. Click **Redeploy**

---

## ✅ Step 2: Check Your Web3Forms Account

### Verify the key is active:

1. Go to **https://web3forms.com**
2. Log in with the email you used to sign up
3. Check your dashboard:
   - ✅ Key should show "Active"
   - ✅ Email address should be correct
   - ✅ Verify limit hasn't been reached (free = 250/month)

### Test the key directly:

Open your browser console (F12) and run:

```javascript
fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'YOUR_KEY_HERE',  // Replace with your actual key
    name: 'Test',
    email: 'test@example.com',
    message: 'Testing Web3Forms',
    to: 'info@lightbridgeconsulting.com'  // Your admin email
  })
})
.then(r => r.json())
.then(data => console.log(data));
```

**Expected result**: `{ success: true, message: "..." }`
**If error**: Check the error message for details

---

## ✅ Step 3: Check CMS Email Settings

### Verify admin email is configured:

1. Go to: **https://lightbrigdge-official-website.vercel.app/cms/admin.html**
2. Click **Settings** tab
3. Check **Email Notifications** section:
   - ✅ Admin email should be: `info@lightbridgeconsulting.com` (or your preferred email)
   - ✅ "Enable email notifications" should be **CHECKED**
4. Click **Save Settings**

---

## ✅ Step 4: Check Vercel Function Logs

### See what's happening behind the scenes:

1. Go to **Vercel Dashboard** → Your project
2. Click **Functions** (in left sidebar)
3. Look for: `/api/contact`
4. Click to view logs

### What to look for:

**✅ Good signs:**
- Status: `200 OK`
- No error messages
- Shows "success: true"

**❌ Bad signs:**
- `404 Not Found` → Function not deployed
- `500 Error` → Check error details
- `Missing access_key` → Environment variable not set
- `Invalid access_key` → Wrong key in Vercel

---

## ✅ Step 5: Test the Form

### Submit a test inquiry:

1. Go to: **https://lightbrigdge-official-website.vercel.app/pages/contact.html**
2. Fill out the form with test data
3. Open browser console (F12) **BEFORE** submitting
4. Click **Submit**

### Watch for:

**✅ Success:**
- Green success message appears
- Console shows: `Form submitted successfully`
- No red error messages

**❌ Errors:**
- Red error message
- Console shows error details
- Form doesn't clear

### Check the response:

In the **Network** tab (F12):
1. Look for request to `/api/contact`
2. Click on it
3. Check **Response** tab
4. Should show: `{ success: true, message: "..." }`

---

## ✅ Step 6: Check Email Spam/Junk Folder

### Don't forget the basics!

1. Check **Spam/Junk** folder
2. Check **Promotions** tab (Gmail)
3. Check **All Mail** (Gmail)
4. Search for "Lightbridge" or "New Contact"

### Add to contacts:

If you find it in spam:
1. Mark as "Not Spam"
2. Add `noreply@web3forms.com` to contacts
3. Add your domain to safe senders

---

## 🔍 Advanced Debugging

### Enable detailed logging:

Update `/api/contact.js` temporarily (lines 73-83):

```javascript
const result = await response.json();

// ADD THIS FOR DEBUGGING:
console.log('Web3Forms Response:', result);
console.log('Admin Email:', adminEmail);
console.log('Access Key Present:', !!process.env.WEB3FORMS_ACCESS_KEY);

if (result.success) {
  return res.status(200).json({
    success: true,
    message: 'Thank you! We\'ve received your inquiry and will respond within 24 hours.',
    // TEMPORARY DEBUG INFO:
    debug: {
      emailSent: true,
      recipient: adminEmail
    }
  });
}
```

After testing, **remove the debug lines** and redeploy.

---

## 🆘 Common Error Messages

### "Method not allowed"
- **Cause**: Form using GET instead of POST
- **Fix**: Check form submission in main.js

### "Missing required fields"
- **Cause**: Name, email, or message is empty
- **Fix**: Check form validation

### "Invalid email address"
- **Cause**: Email format validation failed
- **Fix**: Use valid email format

### "Failed to send email"
- **Cause**: Web3Forms API error
- **Fix**: Check access key and Web3Forms status

### "Network error"
- **Cause**: Can't reach /api/contact
- **Fix**: Verify function is deployed, check Vercel Functions logs

---

## 📋 Quick Checklist

Copy this and check off each item:

- [ ] Web3Forms access key obtained from email
- [ ] Access key added to Vercel Environment Variables
- [ ] All 3 environments selected (Production, Preview, Development)
- [ ] Site redeployed after adding environment variable
- [ ] CMS Settings → Admin email configured
- [ ] CMS Settings → Email notifications enabled
- [ ] Tested form submission
- [ ] Checked browser console for errors
- [ ] Checked Vercel Functions logs
- [ ] Checked spam/junk folder
- [ ] Checked Web3Forms dashboard for delivery status

---

## 🎯 Still Not Working?

### Manual Test with cURL:

```bash
curl -X POST https://lightbrigdge-official-website.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-0123",
    "service": "Test",
    "message": "Testing email functionality",
    "adminEmail": "info@lightbridgeconsulting.com"
  }'
```

**Expected**: `{ "success": true, "message": "..." }`

---

## 🔄 Start Fresh (Last Resort)

### If nothing else works:

1. **Get a new Web3Forms key:**
   - Visit https://web3forms.com
   - Use a different email address
   - Copy the new access key

2. **Update Vercel:**
   - Delete old `WEB3FORMS_ACCESS_KEY`
   - Add new key
   - Redeploy

3. **Clear browser cache:**
   - Clear localStorage
   - Hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)

4. **Test again**

---

## 📞 Get Help

If you've tried everything above:

1. **Check Vercel Functions logs** - Most issues show up here
2. **Check Web3Forms status** - https://web3forms.com/status
3. **Email me the error** - Include:
   - Screenshot of Vercel Environment Variables (hide key value)
   - Screenshot of Vercel Functions logs
   - Browser console errors
   - What you've tried so far

---

## ✅ Working Now? Quick Test

1. Submit form from website
2. Email arrives within 10 seconds
3. Submission shows in CMS → Submissions tab
4. No errors in console

**🎉 Success!** You're all set up.

