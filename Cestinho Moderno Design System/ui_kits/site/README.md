# UI Kit — Site (Landing Page)

A single-page site for Cestinho Moderno, target audience famílias (B2C) + empresas (B2B), Porto.

## Files
- `index.html` — entry point. Loads React + Babel + tokens + site.css + SiteComponents.jsx.
- `site.css` — layout styles built on top of `colors_and_type.css`.
- `SiteComponents.jsx` — all components, exported to `window`.

## Sections
1. **Header** — sticky w/ blur on scroll; logo + nav + WhatsApp CTA
2. **Hero** — wordmark headline + cesto illustration + dual CTA
3. **Services** — 4-card grid (Engomadoria, Lavagem, Arranjos, Recolha — last in `ink` accent)
4. **Promises** — 3 trust signals (carinho, horários, cheirosa)
5. **Packs** — full preçário (Engomadoria 6 packs, Camisas 3 packs, Serviços especializados)
6. **B2B** — dark section with bullets + 4 segment cards (Clínicas, Restauração, Alojamento, Estética)
7. **Contact** — WhatsApp / Email / Instagram channels
8. **Footer** — wordmark + service/contact links

## Tokens used
All tokens come from `/colors_and_type.css`. No magic colors or fonts inside this kit.

## Components surface (re-usable)
| Component | Purpose |
|---|---|
| `<Wordmark />` | The "Cestinho moderno" lockup. Supports `dark`, `mono`. |
| `<Button variant size icon href>` | primary / secondary / ghost / ghost-light / lavender / whatsapp |
| `<Header />` | Sticky site header |
| `<Hero />`, `<Services />`, `<Promises />`, `<Packs />`, `<B2B />`, `<Contact />`, `<Footer />` | Section components |
| `CMIcons.*` | Inline SVG icons (Lucide-style stroke 1.6) |

## Not implemented (purposeful)
- Booking form / form validation — current CTA goes to WhatsApp with prefilled message
- Multilingua (EN / PT-BR) — single PT-PT only
- CMS / blog — design system mockup, no editorial pipeline
