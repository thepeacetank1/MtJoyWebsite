# Mount Joy Medicine website

A lightweight static website for Dr. Jeannine Randolph and Mount Joy Medicine.

## Pages

- Practice update landing page (`index.html`)

The unfinished multi-page site is stored locally in `.local-tools/site-draft/`, which is intentionally excluded from GitHub Pages by `.gitignore`.

## Preview locally

Open `index.html` directly in a browser, or run a small static server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. No build step is required.

Cloudflare BIND import files and custom-domain instructions are available in the `dns` directory. The repository-level `CNAME` file configures GitHub Pages for `mtjoymedicine.org`.
