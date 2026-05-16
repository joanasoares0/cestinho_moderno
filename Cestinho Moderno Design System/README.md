# Cestinho Moderno — Design System

> Lavandaria · Engomadoria · Arranjos de Costura · Recolhas & Entregas
> Porto, Portugal · `@cestinhomoderno`

Cestinho Moderno é um pequeno negócio familiar do Porto que cuida de todo o ciclo da roupa — lavagem, engomadoria, arranjos de costura e um sistema de recolhas e entregas em casa. Atende **famílias** (packs domésticos) e **empresas** (clínicas, restauração, alojamentos — fardamento e têxteis).

A identidade visual é **suave, moderna e familiar**: uma paleta entre **azul-tinta profundo, íris/lilás e azul-céu**, com um logótipo que combina uma maiúscula geométrica fina (`CESTINHO`) com um script manuscrito (`moderno`). O ícone do cesto trançado com lavandas é a metáfora central — feixes coloridos que se entrelaçam, frescura, cuidado pessoal.

---

## Fontes / Sources

| Tipo | Caminho | Notas |
|------|---------|-------|
| Codebase | `cestinho_moderno/` (local mount) | Read-only via File System Access — pasta partilhada pelo cliente. |
| Logo & vetoriais | `cestinho_moderno/design_elements/` | Logo PNG/SVG, ícone do cesto, pattern de gotas. |
| Conteúdo | `cestinho_moderno/conteudo.txt` | "Sobre", preçário completo, contactos. |
| Posts Instagram | `cestinho_moderno/instagram/` | Capturas do perfil `@cestinhomoderno`. |
| Material entregue | `cestinho_moderno/deliverables/` | `cartão_visita.pdf`, `precario.pdf` (referência impressa). |
| Plano editorial | `cestinho_moderno/Content Planner CM.pdf` | Plano de redes. |

---

## Manifest

```
├── README.md                  ← este ficheiro
├── SKILL.md                   ← invocação como Agent Skill
├── colors_and_type.css        ← tokens CSS (cores, type, espaçamento, sombras)
├── assets/                    ← logos, marcas, ilustração do cesto, pattern, posts IG
├── fonts/                     ← (substituições Google Fonts — ver "Tipografia")
├── preview/                   ← cards do Design System (registados via review manifest)
├── ui_kits/
│   └── site/                  ← componentes JSX + index.html da landing page
└── slides/                    ← templates de pitch deck (B2C famílias / B2B clínicas)
```

---

## Conteúdo · Fundamentos / Content Fundamentals

A voz da marca é **acolhedora, prática e ligeiramente afectuosa**, com um português de Portugal natural (sem ser excessivamente formal). Mistura PT-PT (`recolha`, `coleta`, `engomadoria`) com expressões quentes (`com muito amor e carinho`, `cheirosa`, `comodidade`).

**Tratamento.** Usa-se a forma **"você / o seu"** — respeitosa mas próxima. Nunca `tu`, nunca `vós`. Frases curtas que falam ao cliente: *"o seu tempo vale mais do que roupa por lavar"*.

**Vibe.** Quotidiana, com referências à rotina real do cliente: ginásio, trabalho, viagens, casa, clínica. Vende **tempo livre** mais do que vende lavandaria.

**Capitalização.** Frases em sentence case. **Títulos de serviço em Title Case** (`Pack de Engomadoria`, `Arranjos de Costura`). O wordmark é a única peça em CAPS.

**Emoji.** Sim — com moderação, sempre no **início de linha** como bullets (estilo Instagram):
- ✨ para serviços / destaques
- 🚐 para recolhas
- 📍 para local
- 👇 para CTAs
- 🧺 para a marca / serviço base
Evita emojis a meio de frase ou empilhados.

**Exemplos canónicos** (extraídos do conteúdo e do Instagram):

> 🧺 Porque o seu tempo vale mais do que roupa por lavar.

> Sua clínica focada no que realmente importa.
> Lavagem e engomadoria das batas, fardos e atoalhados.

> Ganhe tempo para o que realmente importa. Deixe as suas roupas connosco e aproveite mais!

> Já está na hora de retirar as roupas do fundo do roupeiro? Aproveite para garantir roupas cheirosas e macias para a chegada da nova estação.

> O detalhe que faltava para a sua roupa assentar na perfeição.

**Palavras-âncora.** *comodidade, tempo livre, cuidado, cheirosa, macia, confiança, profissionalismo, higiene, personalizado, com amor e carinho.*

**Evitar.** Jargão técnico de detergentes, garantias absolutas tipo "100% livre de manchas", anglicismos (`laundry`, `pickup`), tom de manual ("Nossa empresa, fundada em..."). Não usar pontos de exclamação a dobrar.

---

## Fundamentos Visuais / Visual Foundations

### Paleta
Quatro cores principais — todas tons frios — mais dois warm-neutrals para descanso visual.

| Token | Hex | Uso |
|---|---|---|
| `--cm-ink` | `#091040` | Tipografia primária, wordmark, fundos escuros premium |
| `--cm-iris` | `#5053A9` | CTA primário, headings, ícones em surface clara |
| `--cm-lavender` | `#A79BD9` | Acento, script wordmark, cartões secundários, sashes |
| `--cm-sky` | `#A0C6E8` | Surfaces frias, gota de água, washes de fundo |
| `--cm-cream` | `#faf8f5` | Wash da página — quentinho, evita branco clínico |
| `--cm-paper` | `#ffffff` | Cards, modais |

Hierarquia: **ink** carrega o peso, **iris** comunica acção, **lavender** suaviza, **sky** decora. O pattern de gotas usa `lavender` ou `sky` em 8–12% opacity.

### Tipografia
- **`Quicksand`** (Google Fonts) — substituto da display do logótipo. Geométrico, redondo, leve. Use weight 300–500 para titulares grandes; 500–600 para H2/H3.
- **`Yellowtail`** (Google Fonts) — substituto do script "moderno". Brush flowing. **Apenas para 1–2 palavras de acento por composição.** Nunca para corpo de texto ou frases longas.
- **`Nunito`** (Google Fonts) — humanist sans para corpo, UI, números de preçário. Friendly, legível em ecrãs pequenos.

> ⚠️ **Substituição flagged ao cliente.** Não recebemos ficheiros TTF das fontes originais do logo. A combinação Quicksand + Yellowtail aproxima visualmente o wordmark. Para produção, pedir ficheiros oficiais (provavelmente uma geométrica thin tipo *Mostardesign Sans* ou *Bw Modelica Light* + script manuscrito tipo *Yellowtail*/*Allura*).

### Espaçamento & Layout
Escala base de 4px (`--s-1`…`--s-9`). Layouts são **arejados** — generosos paddings (`--s-7` a `--s-9` entre secções). Coluna de leitura: 56–64ch. Em telemóvel, plenos paddings laterais de `--s-5`.

### Cantos
Arredondamentos generosos mas não exagerados:
- Inputs / chips / botões pequenos → `--r-sm` (10px)
- Cards / surfaces → `--r-md` (16px)
- Heroes / packs destacados → `--r-lg` (24px)
- Pills, badges, CTA principal → `--r-pill`

### Sombras
Sistema de **3 elevações + glow de foco**. Todas com tonalidade `iris` (lilás-azulada), não cinzento neutro — para se manterem dentro da paleta.
- `--sh-1` ambient muito subtil (inputs, chips)
- `--sh-2` cards padrão
- `--sh-3` hero, modais (24px y-offset, blur generoso)
- `--sh-glow` halo lavanda 6px (focus rings)

### Fundos & Texturas
- Wash de página: cream quente.
- Surfaces secundárias: `--bg-soft` (lavanda muito claro) ou `--bg-cool` (sky muito claro) — **alterna entre secções para criar ritmo**, nunca usa três fundos diferentes na mesma vista.
- **Pattern de gotas** (`assets/pattern.svg`): usar em **8–12% opacity** sobre fundos sólidos, como wash decorativa. É a textura assinatura.
- **Ilustração do cesto** (`assets/cesto-mark.svg`): elemento herói, surge a 100% no canto/decorativo. Não deve ser repetida; é uma peça âncora.
- **Sem gradientes blue-purple genéricos.** Quando precisa de profundidade, usa um gradiente lavender→sky muito subtil (mesma família tonal).

### Imagens
Fotografia **luminosa, com luz natural quente** — interiores em pastel (lavandaria branca, edredom branco, têxteis dobrados), pessoas em movimento e a sorrir, planos médios. Nada de stock clínico azulado. Quando há mãos ou pessoas, captam um gesto de cuidado (a passar a ferro, a coser, a entregar).

### Animação & Estados
- **Sem bounces, sem rotações cómicas.** Movimento é **leve e curto**: 140–260ms, easing `cubic-bezier(.22,.61,.36,1)`.
- **Hover (botão primário):** o fundo escurece um passo (`iris` → `ink-90`), texto mantém-se. Lift de 1px (`translateY(-1px)`) + sombra sobe um nível.
- **Hover (link):** sublinhado animado da esquerda para a direita em `lavender`.
- **Press:** `scale(.98)` + sombra cai para nível abaixo. Tempo: 80ms.
- **Focus:** anel duplo — 2px `lavender` + 6px lavender-25% (token `--sh-glow`). Nunca outline azul do browser.
- **Entradas de página:** fade-up de 8px ao entrar, stagger de 60ms entre elementos. Reservado para hero.

### Bordas & Linhas
- Linhas estruturais (dividers, table rows): 1px `--cm-line`.
- Inputs: 1.5px `--cm-line`, vira `--cm-iris` em focus.
- Cards: **prefere sombra a borda.** Quando bordadas (raras), usar 1px `--cm-lavender-30`.

### Transparência & Blur
Usar com parcimónia. Apenas em:
- Header sticky em scroll → fundo `rgba(250,248,245,.85)` + `backdrop-filter: blur(12px)`.
- Overlays sobre imagens (cartões IG) → lavanda 88% opacity para garantir legibilidade.

### Cards
Padrão: fundo paper, `--r-md`, padding `--s-5`/`--s-6`, sombra `--sh-2`, **sem borda**. Em hover (clickable) sobem para `--sh-3` e um lift de 2px.

---

## Iconografia / Iconography

A marca **não usa um icon font próprio**. As únicas peças vetoriais nativas são:
- O **ícone do cesto** com gota dentro (vê `Cestinho Logo Vetorial.svg`) — usado isolado em avatares e favicons.
- A **ilustração do cesto trançado com lavandas** (`Cesto Vetorial.svg`) — peça de marca, decorativa.
- O **pattern de gotas** (`Pattern.svg`) — textura repetível.

Para iconografia funcional de UI (calendário, telefone, check, recolha, etc.), recomendamos **[Lucide](https://lucide.dev)** via CDN — stroke fino (1.5px), arredondado, encaixa no tom moderno-leve da marca. Cor padrão: `--cm-iris`. Tamanho base 20px / 24px em UI; 32px em headers.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

> Substituição **flagged**: Lucide foi escolhido por afinidade estilística — não há um conjunto de ícones original no material fornecido. Se houver preferência por outro set (Phosphor, Tabler), avisar.

**Emoji.** É usado deliberadamente no Instagram (✨ 🚐 📍 👇 🧺), por afinidade com a plataforma. **Em site/deck/print, evitar emoji.** Usar ícones Lucide consistentes.

**Unicode chars.** Usar `·` (middot, U+00B7) como separador entre serviços (`Lavagem · Engomadoria · Arranjos`) — é a assinatura visual do feed.

---

## Index — onde encontrar o quê

| Quero… | Vou a… |
|---|---|
| Cores e fontes em código | `colors_and_type.css` |
| O logo / ilustração do cesto | `assets/cestinho-logo.svg`, `assets/cesto-mark.svg` |
| Pattern de gotas | `assets/pattern.svg` |
| Referências de Instagram | `assets/instagram-1.jpeg`, `instagram-2.jpeg` |
| Cards do design system | `preview/*.html` (registados, ver aba Design System) |
| Landing page completa | `ui_kits/site/index.html` |
| Pitch deck (B2C famílias) | `slides/deck-familias.html` |
| Pitch deck (B2B clínicas) | `slides/deck-empresas.html` |
| Como invocar como skill | `SKILL.md` |

---

## Como usar este design system

1. **Importar tokens.** `<link rel="stylesheet" href="colors_and_type.css">` em qualquer HTML para herdar paleta, fontes e escala. Funciona standalone.
2. **Copiar peças visuais.** Logos, pattern e ilustração estão prontos para reutilização em `assets/`.
3. **Reaproveitar componentes.** Os ficheiros JSX em `ui_kits/site/` são modulares — Header, Hero, ServiceCard, PriceTable, ContactStrip, Footer.
4. **Slides.** Os templates em `slides/` usam `deck_stage.js` (1920×1080) e podem ser duplicados para novos decks.

## Caveats conhecidos

- **Fontes oficiais não fornecidas.** Substituímos por equivalentes Google Fonts (Quicksand, Yellowtail, Nunito). Pedir ficheiros originais antes de impressão.
- **Sem fotografia profissional.** Os cards e a hero usam placeholders + assets do Instagram. Pedir um banco de imagens próprias (sala de engomadoria, recolha à porta, têxteis dobrados).
- **Site real não existe.** O `ui_kits/site/` é uma proposta — pode ser cortado/expandido conforme orçamento.
