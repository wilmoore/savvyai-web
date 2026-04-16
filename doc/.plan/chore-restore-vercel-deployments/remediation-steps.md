# Vercel Deployment Remediation - Detailed Steps

## Investigation Summary

### ✅ Verified Working

- **Local Build**: `npm run build` completes successfully with proper Next.js output
- **Git Status**: All commits successfully pushed to `deploy/main` on GitHub
- **Latest Commit**: `c257f1f` from Apr 14, 19:32:39 is on remote
- **Vercel Config**: `vercel.json` correctly specifies Next.js framework
- **Build Output**: `.next/` directory correctly generated

### ❌ Issue Identified

- **No Deployments**: Vercel hasn't triggered any deployments for 3+ days
- **Webhook Likely Disconnected**: GitHub → Vercel webhook not firing
- **Last Successful Deploy**: Unknown (requires Vercel dashboard verification)

## Root Cause

The Vercel GitHub webhook integration has likely been disconnected, disabled, or expired. This is a common issue when:

- GitHub access tokens expire or are revoked
- Vercel GitHub App loses permissions
- Integration settings were accidentally changed
- Vercel project was paused/archived

## Step-by-Step Remediation

### Phase 1: Verify Vercel Project Status (Via Dashboard)

**Actions to perform in Vercel Dashboard:**

1. Go to https://vercel.com/dashboard
2. Find "savvyai-web" project
3. Click into project settings
4. Check **Project Status**:
   - Should show "Active"
   - If "Paused" or "Archived", click "Resume" button
5. Navigate to **Settings → Git**
6. Verify configuration:
   - "GitHub" should be selected as connected service
   - Repository should be: `wilmoore/savvyai-web`
   - Branch should be: `main`
7. If GitHub shows as disconnected:
   - Click "Disconnect"
   - Click "Connect Git Repository"
   - Authorize GitHub and select `wilmoore/savvyai-web`
8. Navigate to **Deployments** tab
9. Check if you see recent deployment attempts:
   - Click on latest deployment (if any exist)
   - Review build logs for errors

### Phase 2: Verify GitHub Webhook (Via GitHub)

**Actions to perform in GitHub:**

1. Go to https://github.com/wilmoore/savvyai-web
2. Settings → Webhooks
3. Look for Vercel webhook entry
4. If present:
   - Click to expand
   - Review recent deliveries
   - Check for failed delivery attempts
   - If delivery rate shows 0%, webhook is broken
5. If not present:
   - Reconnect via Vercel (see Phase 1 step 7)

### Phase 3: Manual Deployment Test (Via Vercel Dashboard)

**This step MUST be done after Phase 1:**

1. In Vercel project → Deployments tab
2. Find the "Redeploy" button on a recent deployment (or top of list)
3. Click and select "Redeploy" (not "Redeploy with cache")
4. Monitor deployment progress:
   - Should see "Building..." status
   - Then "Deploying..." status
   - Finally "Ready" with preview URL
5. If deployment succeeds:
   - Automatic deployments are likely now re-enabled
   - Vercel will listen for GitHub webhooks again
6. If deployment fails:
   - Review build logs in detail
   - Check for missing environment variables
   - Verify Node.js version compatibility

### Phase 4: Verify Automatic Deployments Restored

**Test automatic deployment:**

1. Make a small test commit locally:
   ```bash
   git commit --allow-empty -m "test: trigger deployment verification"
   git push deploy main
   ```
2. Go to Vercel dashboard
3. Within 30 seconds, a new deployment should appear
4. Monitor until deployment completes

## Expected Outcome

After completing these steps:

- ✅ Vercel dashboard shows new deployments for each push
- ✅ Build logs are visible and successful
- ✅ Production site updates on each commit to main
- ✅ GitHub webhook shows recent successful deliveries

## Troubleshooting

### If Manual Deployment Fails

**Check these items:**

1. Review build logs in Vercel for specific errors
2. Verify all environment variables are set in Vercel project
3. Test `npm run build` locally to ensure it works
4. Check Node.js version: Vercel uses the version specified in `.nvmrc` or defaults to 20.x

### If Webhook Still Not Firing

1. In GitHub webhook settings, manually trigger a recent delivery
2. Check the response status - should be 2xx
3. If 4xx or 5xx, integration needs reconnection
4. Consider temporarily disabling other GitHub Apps (may conflict)

### If Builds Keep Failing

1. Check if there are recent dependency changes in `package.json`
2. Review console errors in the Vercel build logs
3. Run `pnpm install` locally to verify lockfile is correct
4. Compare build command in Vercel with what works locally

## Prevention

To avoid this issue in the future:

1. **Monitor Deployments**: Check Vercel dashboard weekly
2. **Set Alerts**: Enable Vercel notifications for build failures
3. **Document Setup**: Keep deployment checklist in project docs
4. **Backup Auth**: Store Vercel auth tokens securely (not in git)
5. **Schedule Review**: Quarterly review of GitHub App permissions

## References

- Vercel Documentation: https://vercel.com/docs/git/vercel-for-github
- GitHub App Permissions: https://docs.github.com/en/apps/using-github-apps/authenticating-with-a-github-app

---

**Last Updated**: April 16, 2026
**Status**: Ready for execution
