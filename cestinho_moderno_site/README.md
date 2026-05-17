# Cestinho Moderno — Site

Landing page estática para o Cestinho Moderno, lavandaria · engomadoria · arranjos em Porto, Portugal.

## Estrutura

```
cestinho_moderno_site/
├── index.html          # Landing page (HTML)
├── style.css           # Estilos e layout do site
├── main.js             # Scroll behavior + footer (ano dinâmico)
├── colors_and_type.css # Tokens CSS — cópia standalone do design system
└── assets/             # Logos, ícone do cesto, pattern, fotos
    ├── cestinho-logo.svg
    ├── cestinho-logo.png
    ├── cestinho-mark.png
    ├── cesto-mark.svg
    ├── pattern.svg
    ├── instagram-1.jpeg
    └── instagram-2.jpeg
```

## Executar localmente

```bash
npx serve .
```

Abre o URL indicado no terminal.

## Deploy (Vercel)

- **Root Directory:** `cestinho_moderno_site`
- **Framework Preset:** Other (static)
- **Build Command:** *(vazio)*
- **Output Directory:** *(vazio)*
- **Environment Variables:** nenhuma

## Stack

HTML puro + CSS + JS vanilla. Sem build step, sem framework, sem dependências.

## Secções da página

1. **Header** — sticky com blur em scroll; logo + nav + CTA WhatsApp
2. **Hero** — título com wordmark + ilustração do cesto + CTA duplo
3. **Serviços** — grelha 4 cards (Engomadoria, Lavagem, Arranjos, Recolha)
4. **Promessas** — 3 sinais de confiança (cuidado, horários, cheirosa)
5. **Packs** — preçário completo (Engomadoria 6 packs, Camisas 3 packs, Especializados)
6. **B2B** — secção dark para clínicas/empresas com bullets + 4 segmentos
7. **Contacto** — WhatsApp / Email / Instagram
8. **Footer** — wordmark + links

## Notas

- Fontes via Google Fonts (Quicksand, Yellowtail, Nunito) — ver `colors_and_type.css`
- Tokens CSS partilhados com `design_system/colors_and_type.css`
- Para a versão completa em JSX, ver `design_system/ui_kits/site/`
