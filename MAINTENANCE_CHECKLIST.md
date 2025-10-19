# Lightbridge Consulting - Form Maintenance Checklist

## Weekly Quick Check (5 minutes)

### Every Monday Morning
- [ ] Visit https://lightbridgeconsulting.com/pages/contact.html
- [ ] Open DevTools (F12) and check Console tab
- [ ] Verify no red errors appear on page load
- [ ] Submit test form with your email
- [ ] Confirm email received within 5 minutes
- [ ] Check form submission appears in CMS admin panel
- [ ] Document any issues in MAINTENANCE_LOG.md

**If ANY test fails:** Stop and investigate immediately using FORM_MONITORING.md

## Automated Health Check (Optional but Recommended)

### Use Test Page
- [ ] Visit https://lightbridgeconsulting.com/test-form-health.html
- [ ] Click "Run All Tests"
- [ ] Verify all tests pass (green checkmarks)
- [ ] Screenshot results for records
- [ ] If any tests fail, refer to FORM_MONITORING.md

### Or Use Monitoring Service
- [ ] Set up UptimeRobot or similar (free tier)
- [ ] Monitor URL: https://lightbridgeconsulting.com/pages/contact.html
- [ ] Check interval: Every 5-15 minutes
- [ ] Email alerts enabled
- [ ] Review weekly uptime report

## Monthly Deep Check (15 minutes)

### First Monday of Each Month
- [ ] Review all form submissions in CMS for patterns
- [ ] Check for spam attempts (look for honeypot catches)
- [ ] Test form on mobile device (iOS)
- [ ] Test form on mobile device (Android)
- [ ] Test form in different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Review security logs in browser localStorage
- [ ] Verify rate limiting still active (submit 6 times quickly)
- [ ] Check email delivery rate (should be 100%)
- [ ] Review Vercel analytics for form page traffic
- [ ] Document findings in MAINTENANCE_LOG.md

## Before Marketing Campaigns

### Pre-Launch Checklist (24-48 hours before)
- [ ] Run full health check (test-form-health.html)
- [ ] Submit 3 test forms from different devices
- [ ] Verify all test emails received
- [ ] Check CMS admin panel accessible
- [ ] Verify email notifications enabled in settings
- [ ] Test contact page load speed (should be <3 seconds)
- [ ] Clear security logs for clean monitoring
- [ ] Set up extra monitoring if needed
- [ ] Prepare backup contact methods (direct email ready)
- [ ] Document baseline performance metrics

### During Campaign (Daily)
- [ ] Check form submissions regularly
- [ ] Monitor for unusual patterns or spam
- [ ] Respond to inquiries within 24 hours
- [ ] Watch for console errors via monitoring
- [ ] Check email delivery continues working

### Post-Campaign Review (Within 3 days)
- [ ] Count total submissions received
- [ ] Verify all leads contacted
- [ ] Calculate conversion rate
- [ ] Review any issues encountered
- [ ] Document lessons learned
- [ ] Update procedures if needed

## Emergency Response

### If Form Stops Working
1. **Immediate (0-5 minutes)**
   - [ ] Add notice to website: "Technical issue - email us directly"
   - [ ] Post emergency contact: info@lightbridgeconsulting.com
   - [ ] Check Vercel dashboard for deployment issues
   
2. **Investigation (5-15 minutes)**
   - [ ] Check console for errors
   - [ ] Review recent git commits
   - [ ] Check Vercel logs for API errors
   - [ ] Test in incognito mode
   
3. **Resolution (15-30 minutes)**
   - [ ] If recent deployment issue: Rollback to previous version
   - [ ] If API issue: Check email credentials in Vercel
   - [ ] If CSP issue: Review vercel.json and security.js
   - [ ] Test fix thoroughly before removing notice
   
4. **Follow-up (Same day)**
   - [ ] Document what happened
   - [ ] Update monitoring if needed
   - [ ] Review why issue wasn't caught earlier
   - [ ] Add preventive measures

## File Integrity Checks

### Critical Files - Verify Monthly
Check these files haven't been accidentally modified:

- [ ] `vercel.json` - Security headers intact (lines 12-36)
- [ ] `src/js/security.js` - CSP configuration correct (lines 197-213)
- [ ] `src/js/main.js` - Form handling logic intact (lines 90-239)
- [ ] `api/contact.js` - Email sending function works
- [ ] `src/pages/contact.html` - Form structure unchanged

**How to check:**
```bash
git log --oneline -- vercel.json src/js/security.js src/js/main.js
```

If unexpected changes found, review commits and test form.

## Security Maintenance

### Quarterly Security Review
- [ ] Review security logs for unusual patterns
- [ ] Check for new OWASP vulnerabilities
- [ ] Update dependencies if security patches available
- [ ] Test CSRF protection still working
- [ ] Verify rate limiting still effective
- [ ] Review spam attempts (honeypot effectiveness)
- [ ] Check for any new browser security warnings
- [ ] Update CSP if new external resources added

## Documentation Updates

### Keep Current
- [ ] Update FORM_MONITORING.md if new issues discovered
- [ ] Update this checklist if procedures change
- [ ] Document any workarounds or fixes in MAINTENANCE_LOG.md
- [ ] Keep screenshots of successful health checks
- [ ] Track form submission statistics

## Backup Procedures

### Monthly Backup
- [ ] Export form submissions from CMS
- [ ] Save to secure location (Google Drive, Dropbox, etc.)
- [ ] Verify backup can be restored
- [ ] Keep at least 3 months of backups

### Emergency Backup
If form fails and data at risk:
```javascript
// Copy this into browser console on CMS page
const submissions = localStorage.getItem('form_submissions');
console.log(submissions); // Copy output to safe file
```

## Performance Monitoring

### Track These Metrics Monthly
- Form submission count
- Average response time
- Email delivery success rate
- Page load time
- Mobile vs desktop submissions
- Browser compatibility issues
- Any errors or failures

Document in MAINTENANCE_LOG.md with format:
```
Month: January 2025
Submissions: 47
Issues: None
Email delivery: 100%
Avg load time: 1.8s
Notes: All systems normal
```

## Resources & Support

### When You Need Help
1. **First:** Check FORM_MONITORING.md for known issues
2. **Second:** Review TROUBLESHOOTING_EMAIL.md
3. **Third:** Check recent git commits for changes
4. **Fourth:** Review Vercel logs and console errors
5. **Last resort:** Rollback to known working version

### Key Files Reference
- `FORM_MONITORING.md` - Detailed monitoring guide
- `MAINTENANCE_LOG.md` - Historical record of checks
- `TROUBLESHOOTING_EMAIL.md` - Email issues
- `test-form-health.html` - Automated testing
- `vercel.json` - Server configuration
- `src/js/security.js` - Security configuration

### Quick Commands
```bash
# Check recent changes
git log --oneline -10

# View specific file history
git log --oneline -- vercel.json

# Rollback to specific commit
git revert <commit-hash>

# Force push (emergency only)
git push origin main --force
```

---

**Last Updated:** 2025-01-19  
**Next Review:** Before next major campaign  
**Owner:** Lightbridge Consulting Team