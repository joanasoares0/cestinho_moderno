# Cestinho Moderno

> Lavandaria · Engomadoria · Arranjos de Costura · Recolhas & Entregas  
> Porto, Portugal · [@cestinhomoderno](https://instagram.com/cestinhomoderno)

Repositório com toda a identidade visual, materiais de marketing e design system do **Cestinho Moderno** — pequeno negócio familiar que cuida de todo o ciclo da roupa para famílias e empresas.

---

## Estrutura

```
cestinho_moderno/
├── design_system/                    # Sistema de design completo
│   ├── colors_and_type.css           # Tokens CSS (cores, tipografia, espaçamento, sombras)
│   ├── assets/                       # Logos, ícone do cesto, pattern, fotos IG
│   ├── preview/                      # Fichas HTML do design system (cores, tipo, cards…)
│   ├── downloads/                    # Versões bundled para download (preçário, cartão)
│   ├── posts-instagram/              # Posts IG prontos (HTML + PNG exportado)
│   ├── screenshots/                  # Capturas de ecrã de peças finais
│   ├── slides/                       # Pitch decks HTML (fonte · com CSS corretos)
│   └── ui_kits/site/                 # Landing page proposta (HTML + JSX + CSS)
├── slides/                           # Peças de trabalho + PDFs exportados
│   ├── deck-empresas.html            # Pitch deck B2B (HTML interativo)
│   ├── deck-empresas.pdf             # → PDF 1920×1080, 10 slides
│   ├── deck-familias.html            # Pitch deck B2C (HTML interativo)
│   ├── deck-familias.pdf             # → PDF 1920×1080
│   ├── precario-a5.html              # Preçário (bundled)
│   ├── precario-a5.pdf               # → PDF A5, 2 páginas, pronto a imprimir
│   ├── cartao-visita.html            # Cartão de visita (bundled)
│   ├── cartao-visita-print.html      # Layout A4: 10 cartões/folha (frente + verso)
│   ├── cartao-visita.pdf             # → PDF A4, 2 páginas (frente e verso)
│   ├── deck-stage.js                 # Web component de apresentação
│   └── slides.css                    # Estilos dos slides
├── cestinho_moderno_site/            # Site estático para deploy (Vercel)
│   ├── index.html                    # Landing page
│   ├── style.css                     # Estilos do site
│   ├── main.js                       # Scroll behavior + footer
│   ├── colors_and_type.css           # Tokens CSS (cópia standalone)
│   └── assets/                       # Logos e imagens do site
├── instagram/                        # Capturas do perfil @cestinhomoderno
├── conteudo.txt                      # Texto base: sobre, preçário, contactos
├── instagram_planner.txt             # Plano editorial de redes sociais
└── archive/                          # Versões anteriores arquivadas
```

---

## PDFs prontos a entregar

| Peça | Ficheiro | Formato |
|------|----------|---------|
| Cartão de visita | `slides/cartao-visita.pdf` | A4 · 10 cartões/folha (85×55 mm) · frente + verso |
| Preçário | `slides/precario-a5.pdf` | A5 · 2 páginas · pronto a imprimir |
| Pitch deck B2B (empresas) | `slides/deck-empresas.pdf` | 1920×1080 px · 10 slides |
| Pitch deck B2C (famílias) | `slides/deck-familias.pdf` | 1920×1080 px |

---

## Marca resumida

**Paleta** — azul-tinta (`#091040`) · íris (`#5053A9`) · lavanda (`#A79BD9`) · céu (`#A0C6E8`)  
**Tipografia** — Quicksand (display) · Yellowtail (script) · Nunito (corpo)  
**Tom de voz** — acolhedor, prático, ligeiramente afectuoso. Vende tempo livre, não lavandaria.

Ver [`design_system/README.md`](design_system/README.md) para documentação completa do design system.

---
