# Nusalix — Company Profile (v2)

A lightweight, bilingual (Bahasa Indonesia / English) **general technology-company profile**
for **Nusalix**. Clean light + blue visual style.

Built to be **simple, readable, and fast on low-spec devices**: plain HTML + CSS + a tiny bit
of vanilla JavaScript. No framework, no build step, no heavy libraries.

## Sections
1. **Hero** — what Nusalix does, in plain language.
2. **Tentang / About** — who we are.
3. **Layanan / Services** — short capabilities strip (Software, Mobile/Web, AI, Data).
4. **Proyek / Projects** — flagship work:
   - **Healthmate** — telemedicine (Healthcare)
   - **Si Tani** — smart agriculture (Agriculture)
   - **Public Complaints via WhatsApp** (Public Service)
   - **Digital Waste Bank** — Android (Environment)
   - **Cendikia.ai** — smart school platform (Education) — links to cendikia.ai
5. **Mengapa / Why us** — simple trust points.
6. **Kontak / Contact (CTA)** — WhatsApp + Email.

## Files
- `index.html` — page markup (bilingual via `data-id` / `data-en` attributes).
- `styles.css` — design system (warm palette, Fraunces + Plus Jakarta Sans), larger type for readability.
- `app.js` — language toggle (remembered via localStorage) + mobile menu.
- `favicon.svg` — brand mark.

## Run locally
It is fully static — just open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8080
# then open http://localhost:8080
```

## Customize
- **Contact**: WhatsApp number `6285391938708` and email `nusalixtech@gmail.com` are in `index.html`.
- **Cendikia.ai link**: update the `https://www.cendikia.ai` href in `index.html` if needed.
- **Translations**: every visible string has `data-id` (Indonesian) and `data-en` (English) attributes.
