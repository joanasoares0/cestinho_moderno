// SiteComponents.jsx — Cestinho Moderno landing page components

const WHATSAPP_NUMBER = "351931887137";
const WHATSAPP_DISPLAY = "+351 931 887 137";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "cestinhomoderno@gmail.com";
const INSTAGRAM = "https://instagram.com/cestinhomoderno";

// ---------- Iconography (Lucide-style inline) ----------
const Icon = ({ d, size = 22, stroke = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);
const IconShirt = () => <Icon d={<><path d="M6 4l3-2h6l3 2 3 3-3 3v12H6V10L3 7l3-3z"/><path d="M9 2a3 3 0 0 0 6 0"/></>} />;
const IconScissors = () => <Icon d={<><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m20 4-12 14M8 8l12 12"/></>} />;
const IconDroplet = () => <Icon d={<path d="M12 3s7 6 7 11a7 7 0 0 1-14 0c0-5 7-11 7-11z"/>} />;
const IconTruck = () => <Icon d={<><path d="M3 16h11l-1-8H4l-1 8zM14 11h4l3 5h-7"/><circle cx="6.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></>} />;
const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.7-1.4-1.7-1.6-1.9-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3-.1-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1 2.7.1.2 1.8 2.8 4.5 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.5.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.2.8.8-3.1-.2-.3C3.9 15 3.4 13.5 3.4 12c0-4.7 3.9-8.6 8.6-8.6 4.7 0 8.6 3.9 8.6 8.6s-3.9 8.2-8.6 8.2z"/>
  </svg>
);
const IconInstagram = () => <Icon d={<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></>} />;
const IconMail = () => <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>} />;
const IconCheck = () => <Icon d={<path d="M5 12l4 4 10-10"/>} stroke={2} />;
const IconClock = () => <Icon d={<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>} />;
const IconSpark = () => <Icon d={<path d="M12 3v6m0 6v6M3 12h6m6 0h6M5.5 5.5l4 4m5 5 4 4M5.5 18.5l4-4m5-5 4-4"/>} />;
const IconHeart = () => <Icon d={<path d="M12 21s-7-4.5-9-9c-1-2 .5-6 4-6 2 0 3.5 1.5 5 4 1.5-2.5 3-4 5-4 3.5 0 5 4 4 6-2 4.5-9 9-9 9z"/>} />;

window.CMIcons = { IconShirt, IconScissors, IconDroplet, IconTruck, IconWhatsApp, IconInstagram, IconMail, IconCheck, IconClock, IconSpark, IconHeart };
window.CMContact = { WHATSAPP_URL, WHATSAPP_DISPLAY, EMAIL, INSTAGRAM };

// ---------- Wordmark ----------
const Wordmark = ({ size = 1, dark = false, mono = false }) => {
  const inkColor = mono ? "#fff" : (dark ? "#fff" : "var(--cm-iris)");
  const scriptColor = mono ? "rgba(255,255,255,.85)" : "var(--cm-lavender)";
  return (
    <span className="cm-wordmark" style={{ fontSize: `${size}em`, display: "inline-flex", alignItems: "baseline", gap: "0.05em", lineHeight: 1 }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, letterSpacing: "0.04em", textTransform: "uppercase", color: inkColor, fontSize: "1em" }}>Cestinho</span>
      <span style={{ fontFamily: "var(--font-script)", color: scriptColor, fontSize: "1em", transform: "translateY(0.18em)" }}>moderno</span>
    </span>
  );
};
window.Wordmark = Wordmark;

// ---------- Buttons ----------
const Button = ({ variant = "primary", size = "md", children, href, onClick, icon }) => {
  const cls = `cm-btn cm-btn-${variant} cm-btn-${size}`;
  const inner = <>{icon}<span>{children}</span></>;
  if (href) return <a className={cls} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
};
window.Button = Button;

// ---------- Header ----------
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`cm-header ${scrolled ? "scrolled" : ""}`}>
      <div className="cm-container cm-header-inner">
        <a href="#hero" className="cm-header-brand"><Wordmark size={1.2} /></a>
        <nav className="cm-nav">
          <a href="#servicos">Serviços</a>
          <a href="#packs">Packs</a>
          <a href="#empresas">Empresas</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <Button variant="whatsapp" size="sm" href={WHATSAPP_URL} icon={<IconWhatsApp />}>Marcar recolha</Button>
      </div>
    </header>
  );
};
window.Header = Header;

// ---------- Hero ----------
const Hero = () => (
  <section id="hero" className="cm-hero">
    <div className="cm-hero-pattern" />
    <div className="cm-container cm-hero-grid">
      <div className="cm-hero-text">
        <div className="cm-eyebrow">✨ Lavandaria · Engomadoria · Arranjos</div>
        <h1 className="cm-h1">
          Porque o seu tempo<br/>
          vale mais do que <span style={{ fontFamily: "var(--font-script)", color: "var(--cm-lavender)", fontWeight: 400, fontSize: "1.05em" }}>roupa</span> por lavar.
        </h1>
        <p className="cm-lead">
          Cuidamos de todo o ciclo da sua roupa — da recolha em casa
          até à entrega cheirosa, dobrada e a postos no roupeiro.
          Com flexibilidade de horários e muito carinho.
        </p>
        <div className="cm-hero-cta">
          <Button variant="whatsapp" href={WHATSAPP_URL} icon={<IconWhatsApp />}>Marcar recolha</Button>
          <Button variant="secondary" href="#packs">Ver packs e preços →</Button>
        </div>
        <div className="cm-hero-meta">
          <span><strong>📍</strong> Porto · Matosinhos · Maia</span>
          <span><strong>🚐</strong> Recolha & entrega ao domicílio</span>
          <span><strong>⏱</strong> Serviço urgente 24h</span>
        </div>
      </div>
      <div className="cm-hero-art">
        <img src="../../assets/cesto-mark.svg" alt="Cesto de lavandas — Cestinho Moderno" />
      </div>
    </div>
  </section>
);
window.Hero = Hero;

// ---------- Services ----------
const SERVICES = [
  { ico: <IconShirt />,    title: "Engomadoria",        body: "Camisas, calças, fardamentos — passados a ferro com brio e dobrados a postos." },
  { ico: <IconDroplet />,  title: "Lavagem",            body: "Têxteis e lar, vestuário do dia-a-dia, peças delicadas. Tratamento personalizado." },
  { ico: <IconScissors />, title: "Arranjos de Costura", body: "Bainhas, fechos, ajustes — o detalhe que faltava à sua roupa assentar perfeita." },
  { ico: <IconTruck />,    title: "Recolha & Entrega",  body: "Logística confiável à sua porta, com horários adaptados ao seu dia." },
];
const Services = () => (
  <section id="servicos" className="cm-section">
    <div className="cm-container">
      <div className="cm-section-head">
        <div className="cm-eyebrow">O que fazemos</div>
        <h2 className="cm-h2">Quatro cuidados, um só cesto.</h2>
      </div>
      <div className="cm-services-grid">
        {SERVICES.map((s, i) => (
          <article key={i} className={`cm-service ${i === 3 ? "accent" : ""}`}>
            <div className="cm-service-ico">{s.ico}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
window.Services = Services;

// ---------- Packs / Pricing ----------
const ENGOMADORIA_PACKS = [
  { qty: 20,  price: 29, pp: "1,45" },
  { qty: 40,  price: 59, pp: "1,48" },
  { qty: 60,  price: 69, pp: "1,15", popular: true },
  { qty: 80,  price: 79, pp: "0,99" },
  { qty: 100, price: 89, pp: "0,89" },
  { qty: 120, price: 99, pp: "0,83" },
];
const CAMISAS_PACKS = [
  { qty: 7,  price: 12, pp: "1,71" },
  { qty: 12, price: 20, pp: "1,67", popular: true },
  { qty: 18, price: 28, pp: "1,56" },
];
const EXTRAS = [
  { label: "Tratamento anti-nódoas",    val: "2,5€",  unit: "/peça" },
  { label: "Impermeabilização",         val: "8€",    unit: "/peça" },
  { label: "Desinfecção e higienização", val: "6€",   unit: "/peça" },
  { label: "Retirar pêlo / borboto",    val: "2,5€",  unit: "/peça" },
  { label: "Serviço urgente 24h",       val: "+25%",  unit: "sobre o total", warn: true },
];

const PackCard = ({ qty, price, pp, popular, unit = "peças" }) => (
  <div className={`cm-pack ${popular ? "featured" : ""}`}>
    {popular && <span className="cm-pack-badge">Mais popular</span>}
    <div className="cm-eyebrow">Pack</div>
    <div className="cm-pack-qty">{qty}<small> {unit}</small></div>
    <div className="cm-pack-price"><span className="v">{price}</span><span className="c">€</span></div>
    <div className="cm-pack-pp">≈ {pp}€ por {unit === "camisas" ? "camisa" : "peça"}</div>
    <Button variant={popular ? "lavender" : "ghost"} size="sm" href={WHATSAPP_URL}>Encomendar</Button>
  </div>
);

const Packs = () => (
  <section id="packs" className="cm-section cm-section-soft">
    <div className="cm-container">
      <div className="cm-section-head">
        <div className="cm-eyebrow">Preçário</div>
        <h2 className="cm-h2">Packs que se adaptam à sua casa.</h2>
        <p className="cm-lead">Quanto maior o pack, menor o custo por peça. Pague apenas pelo que precisa.</p>
      </div>

      <h3 className="cm-pack-grouptitle">Engomadoria</h3>
      <div className="cm-packs-grid">
        {ENGOMADORIA_PACKS.map(p => <PackCard key={p.qty} {...p} />)}
      </div>

      <h3 className="cm-pack-grouptitle">Camisas</h3>
      <div className="cm-packs-grid cm-packs-grid-3">
        {CAMISAS_PACKS.map(p => <PackCard key={p.qty} {...p} unit="camisas" />)}
      </div>

      <div className="cm-extras">
        <h3 className="cm-pack-grouptitle" style={{ marginTop: 0 }}>Serviços especializados</h3>
        <ul>
          {EXTRAS.map((e, i) => (
            <li key={i} className={e.warn ? "warn" : ""}>
              <span className="lbl">{e.label}</span>
              <span className="val"><strong>{e.val}</strong> <small>{e.unit}</small></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
window.Packs = Packs;

// ---------- B2B / Empresas ----------
const B2B = () => (
  <section id="empresas" className="cm-section cm-b2b">
    <div className="cm-container cm-b2b-grid">
      <div className="cm-b2b-card">
        <div className="cm-eyebrow" style={{ color: "var(--cm-lavender)" }}>Para empresas</div>
        <h2 className="cm-h2" style={{ color: "#fff" }}>A sua clínica focada<br/>no que realmente importa.</h2>
        <p className="cm-lead" style={{ color: "rgba(244,241,251,.78)" }}>
          Tratamos de batas, fardamentos, atoalhados e têxteis com profissionalismo
          e higiene impecável. Orçamento personalizado para o seu negócio,
          recolha e entrega ao seu ritmo.
        </p>
        <ul className="cm-b2b-bullets">
          <li><IconCheck /> Orçamento personalizado, sem surpresas</li>
          <li><IconCheck /> Recolhas regulares ou pontuais</li>
          <li><IconCheck /> Higienização e desinfecção certificadas</li>
          <li><IconCheck /> Faturação a contribuinte</li>
        </ul>
        <div className="cm-hero-cta">
          <Button variant="lavender" href={`mailto:${EMAIL}?subject=Orçamento empresas`} icon={<IconMail />}>Pedir orçamento</Button>
          <Button variant="ghost-light" href={WHATSAPP_URL} icon={<IconWhatsApp />}>WhatsApp directo</Button>
        </div>
      </div>
      <div className="cm-b2b-segments">
        <div className="cm-seg"><strong>Clínicas</strong><span>Batas, fardos, atoalhados</span></div>
        <div className="cm-seg"><strong>Restauração</strong><span>Toalhas, panos, fardamento</span></div>
        <div className="cm-seg"><strong>Alojamento</strong><span>Lençóis, toalhas, edredons</span></div>
        <div className="cm-seg"><strong>Estética & Spa</strong><span>Têxteis de cabine</span></div>
      </div>
    </div>
  </section>
);
window.B2B = B2B;

// ---------- Promessas ----------
const Promises = () => (
  <section className="cm-section">
    <div className="cm-container">
      <div className="cm-promises">
        <div className="cm-promise">
          <IconHeart />
          <h4>Com muito carinho</h4>
          <p>Pensado peça a peça — porque a sua roupa não é só roupa.</p>
        </div>
        <div className="cm-promise">
          <IconClock />
          <h4>Horários adaptados</h4>
          <p>Trabalha, viaja, treina — nós encaixamo-nos no seu dia.</p>
        </div>
        <div className="cm-promise">
          <IconSpark />
          <h4>Cheirosa, sempre</h4>
          <p>Cuidado têxtil para roupa macia que aguenta a estação seguinte.</p>
        </div>
      </div>
    </div>
  </section>
);
window.Promises = Promises;

// ---------- Contacto ----------
const Contact = () => (
  <section id="contacto" className="cm-section cm-contact">
    <div className="cm-container cm-contact-inner">
      <div className="cm-contact-text">
        <div className="cm-eyebrow">👇 Marque a sua recolha</div>
        <h2 className="cm-h2">Pronto para recuperar o seu tempo?</h2>
        <p className="cm-lead">Diga-nos quando lhe dá jeito. Recolhemos, tratamos e devolvemos a postos.</p>
      </div>
      <div className="cm-contact-channels">
        <a className="cm-channel cm-channel-wa" href={WHATSAPP_URL} target="_blank" rel="noopener">
          <IconWhatsApp />
          <div><strong>WhatsApp</strong><span>{WHATSAPP_DISPLAY}</span></div>
        </a>
        <a className="cm-channel" href={`mailto:${EMAIL}`}>
          <IconMail />
          <div><strong>Email</strong><span>{EMAIL}</span></div>
        </a>
        <a className="cm-channel" href={INSTAGRAM} target="_blank" rel="noopener">
          <IconInstagram />
          <div><strong>Instagram</strong><span>@cestinhomoderno</span></div>
        </a>
      </div>
    </div>
  </section>
);
window.Contact = Contact;

// ---------- Footer ----------
const Footer = () => (
  <footer className="cm-footer">
    <div className="cm-container cm-footer-inner">
      <div>
        <Wordmark size={1.1} dark />
        <p className="cm-small" style={{ color: "rgba(244,241,251,.6)", marginTop: 12, maxWidth: 320 }}>
          Pequeno negócio familiar no Porto. Lavagem, engomadoria, arranjos e recolha em casa — com a confiança de uma parceria de longo prazo.
        </p>
      </div>
      <div className="cm-footer-links">
        <h5>Serviços</h5>
        <a href="#servicos">Engomadoria</a>
        <a href="#servicos">Lavagem</a>
        <a href="#servicos">Arranjos de costura</a>
        <a href="#empresas">Empresas</a>
      </div>
      <div className="cm-footer-links">
        <h5>Contacto</h5>
        <a href={WHATSAPP_URL}>{WHATSAPP_DISPLAY}</a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={INSTAGRAM}>@cestinhomoderno</a>
      </div>
    </div>
    <div className="cm-footer-bottom">
      © {new Date().getFullYear()} Cestinho Moderno · Porto, Portugal · Feito com 💜
    </div>
  </footer>
);
window.Footer = Footer;
