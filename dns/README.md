# Cloudflare DNS import

The `cloudflare-github-pages.zone` file contains the DNS records needed to route `mtjoymedicine.org` and `www.mtjoymedicine.org` to the GitHub Pages site owned by `thepeacetank1`.

Before importing, generate the ownership-verification value in **GitHub Profile Settings → Pages → Add a domain**, enter `mtjoymedicine.org`, and copy the TXT value GitHub provides. In the zone file, uncomment the `_github-pages-challenge-thepeacetank1` line and replace `PASTE_GITHUB_VERIFICATION_VALUE_HERE` with that value.

In Cloudflare, open **DNS → Records → Import and Export**, import the zone file, and review the records before confirming. The GitHub records are explicitly marked DNS-only. Preserve all existing Microsoft 365 mail records.

After DNS propagates, return to GitHub Profile Settings → Pages and select **Verify**. Then set `mtjoymedicine.org` as the custom domain under the repository's **Settings → Pages** and enable **Enforce HTTPS** when it becomes available.
