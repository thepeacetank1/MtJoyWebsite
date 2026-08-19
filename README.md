# Mount Joy Medicine website

A lightweight, multi-page static website for Dr. Jeannine Randolph and Mount Joy Medicine.

## Pages

- Practice update landing page (`index.html`)
- Unlinked home page (`home.html`)
- Unlinked about page (`about.html`)
- Unlinked mission page (`mission.html`)
- Unlinked contact page (`contact.html`)

The landing page does not link to the unfinished pages, but they remain available by entering their URLs directly.

## Preview locally

Open `index.html` directly in a browser, or run a small static server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. No build step is required.

The contact page displays clickable clinic email and phone links assembled in JavaScript to deter basic address-scraping bots. This is not complete protection against sophisticated crawlers. The page instructs visitors not to send confidential medical information by email.

Cloudflare BIND import files and custom-domain instructions are available in the `dns` directory. The repository-level `CNAME` file configures GitHub Pages for `mtjoymedicine.org`.
