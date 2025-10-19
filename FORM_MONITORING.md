# Contact Form Monitoring & Maintenance Guide

## Overview
This guide ensures the Lightbridge Consulting contact form remains functional during your marketing campaign. After the previous issue where the form stopped working, we've implemented monitoring and testing procedures.

## Quick Health Check (Do This Weekly)

### 1. Manual Form Test (2 minutes)
1. Visit https://lightbridgeconsulting.com/pages/contact.html
2. Open browser DevTools (F12) → Console tab
3. Fill out the form with test data:
   - Name: Test User
   - Email: your-email@example.com
   - Service: Any option
   - Message: "Weekly health check - ignore"
4. Submit the form
5. ✅ **Success indicators:**
   - Green success message appears
   - No red errors in console
   - You receive email notification (if enabled)

### 2. Console Error Check (1 minute)
With DevTools open (F12 → Console):
- ❌ **Red errors** = Problem - investigate immediately
- ⚠️ **Yellow warnings** = Usually okay, but note them
- ℹ️ **Blue info** = Normal, no action needed

### 3. Email Notification Test (if enabled)
- Check that test submission emails arrive within 5 minutes
- Verify email formatting is correct
- Confirm all form fields are included

## Common Issues & Solutions

### Issue 1: "X-Frame-Options may only be set via HTTP header"
**Cause:** Security headers being set incorrectly via meta tags  
**Solution:** Security headers are now in vercel.json (lines 12-33) - DO NOT add them to HTML meta tags  
**Prevention:** Never add security headers to HTML `<meta>` tags

### Issue 2: "Refused to connect... violates Content Security Policy"
**Cause:** External resources blocked by CSP  
**Solution:** Add allowed domains to CSP in vercel.json (line 32)  
**Current allowed domains:**
- unpkg.com (for Lucide icons)
- fonts.googleapis.com
- cdn.quilljs.com
- fonts.gstatic.com

### Issue 3: Form submits but no email received
**Cause:** Email API issue or CMS settings disabled  
**Check:**
1. CMS admin panel → Settings → Email notifications enabled
2. Vercel logs for API errors
3. Form submissions saved in localStorage (backup)

### Issue 4: "Security validation failed"
**Cause:** CSRF token mismatch or rate limiting  
**Solution:** 
- Clear browser localStorage
- Wait 1 minute (rate limit reset)
- Try again

## Monitoring Checklist

### Daily (Automated - see below)
- [ ] Form loads without errors
- [ ] Console shows no CSP violations
- [ ] Icons render correctly

### Weekly (Manual - 5 minutes)
- [ ] Submit test form
- [ ] Check email delivery
- [ ] Review Vercel analytics for form activity
- [ ] Check localStorage for any failed submissions

### Monthly (Manual - 15 minutes)
- [ ] Review all form submissions in CMS
- [ ] Check for spam submissions (honeypot effectiveness)
- [ ] Verify all form fields work correctly
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Review security logs in localStorage

### Before Major Marketing Campaigns
- [ ] Full form testing on all devices
- [ ] Verify email notifications working
- [ ] Test rate limiting (submit 5+ times quickly)
- [ ] Check that CMS storage is working
- [ ] Backup form submissions data
- [ ] Document current working state

## Critical Files - DO NOT MODIFY Without Testing

### vercel.json (lines 12-33)
Contains all security headers including CSP. Changes here affect entire site security.
**Test after changes:** Redeploy and check console for errors

### src/js/security.js (lines 197-213)
Contains CSP meta tag (backup for client-side). Must match vercel.json CSP.
**Test after changes:** Check console for CSP violations

### src/js/main.js (lines 90-239)
Form submission logic and validation.
**Test after changes:** Submit test form and verify email delivery

### api/contact.js
Email sending serverless function.
**Test after changes:** Check Vercel logs for errors

## Automated Monitoring Setup (Recommended)

### Option 1: Simple Browser Extension
Install "Check My Links" or similar extension to test your contact page weekly.

### Option 2: UptimeRobot (Free)
1. Sign up at uptimerobot.com
2. Add monitor for: https://lightbridgeconsulting.com/pages/contact.html
3. Set check interval: Every 5 minutes
4. Add alert email
5. Tests that page loads successfully

### Option 3: Better Uptime (Free tier available)
Monitors both uptime AND form functionality
- Website uptime monitoring
- HTTP checks
- SSL certificate monitoring
- Status page

### Option 4: Custom Health Check (See FORM_HEALTH_CHECK.html)
We can create a dedicated health check page that automatically tests form functionality.

## Security Considerations

### Current Security Measures
1. ✅ CSRF token protection
2. ✅ Rate limiting (5 submissions/minute)
3. ✅ Input sanitization
4. ✅ Honeypot spam prevention
5. ✅ Security event logging
6. ✅ Server-side security headers

### What Could Break Form
1. ❌ Modifying vercel.json CSP without testing
2. ❌ Adding new external resources without CSP update
3. ❌ Changing security.js without understanding impact
4. ❌ Email API credentials expiring
5. ❌ Vercel deployment failures

### Security Audit Schedule
- **Weekly:** Check security logs in browser localStorage
- **Monthly:** Review failed submission attempts
- **Quarterly:** Update dependencies if security patches available

## Troubleshooting Workflow

If form stops working:

1. **Check Console** (30 seconds)
   - Open DevTools → Console
   - Look for red errors
   - Note exact error message

2. **Check Vercel Dashboard** (1 minute)
   - Recent deployments successful?
   - Any error logs?
   - API endpoint healthy?

3. **Test in Incognito** (1 minute)
   - Rules out browser cache/extension issues
   - Fresh localStorage/CSRF tokens

4. **Check Recent Changes** (2 minutes)
   - Review last git commit
   - Any file modifications?
   - Deployment timestamp match issue start?

5. **Rollback if Needed** (5 minutes)
   - Revert to last known working commit
   - Redeploy on Vercel
   - Test immediately

## Emergency Contacts

### If Form Completely Fails
**Backup contact methods:**
- Direct email: info@lightbridgeconsulting.com
- Phone: (555) 555-0123
- Add notice to website: "Experiencing technical difficulties. Please email us directly."

### Critical Issues Requiring Immediate Action
1. Form accepting but not storing submissions
2. Security vulnerabilities detected
3. Spam attacks overwhelming rate limits
4. Complete form unavailability during campaign

## Success Metrics to Track

### Form Performance
- Submission success rate (target: >99%)
- Average load time (target: <2 seconds)
- Error rate (target: <1%)
- Email delivery rate (target: 100%)

### User Experience
- Form completion rate (started vs submitted)
- Time to first error
- Mobile vs desktop success rates
- Browser compatibility issues

## Maintenance Log

Keep a simple log of tests:

```
Date: 2025-01-19
Tested by: [Your name]
Result: ✅ All tests passed
Notes: Form working, email received in 2 minutes
Next check: 2025-01-26

Date: 2025-01-26  
Tested by: [Your name]
Result: ⚠️ Warning in console
Notes: Investigated - just browser extension, not site issue
Action: None needed
Next check: 2025-02-02
```

## Resources

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Form Submissions CMS](https://lightbridgeconsulting.com/cms/admin.html)
- [GitHub Repository](https://github.com/SkillBuildersInstitute/LightbrigdgeOfficialWebsite)
- This documentation: FORM_MONITORING.md
- Health check page: FORM_HEALTH_CHECK.html (if created)

## Questions?

If you encounter issues not covered here, document:
1. Exact error message
2. When it started occurring
3. What you were doing when noticed
4. Browser and device info
5. Screenshots of errors

Then review TROUBLESHOOTING_EMAIL.md for detailed debugging steps.

---

**Last Updated:** 2025-01-19  
**Next Review:** After any significant marketing campaign or site changes