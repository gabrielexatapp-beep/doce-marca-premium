import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

import logo from "@/assets/logo.png.asset.json";
import pudimHero from "@/assets/pudim-hero.jpg.asset.json";
import historia from "@/assets/historia.jpg.asset.json";
import pudimProduto from "@/assets/pudim-produto.jpg.asset.json";
import brigadeirao from "@/assets/brigadeirao-produto.png.asset.json";
import gal1 from "@/assets/gal1.jpg.asset.json";
import gal2 from "@/assets/gal2.jpg.asset.json";
import gal3 from "@/assets/gal3.jpg.asset.json";
import gal4 from "@/assets/gal4.png.asset.json";
import gal5 from "@/assets/gal5.png.asset.json";
import compos from "@/assets/compos.png.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

const WHATSAPP_URL =
  "https://wa.me/5512981285713?text=" +
  encodeURIComponent(
    "Olá, gostaria de falar com o comercial da Doceria da Rebeka sobre produtos para atacado.",
  );

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#produtos", label: "Produtos" },
  { href: "#atacado", label: "Atacado" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(0,0,0,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-28 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-4">
          <img src={logo.url} alt="Doceria da Rebeka" className="h-28 w-28 object-contain" />
          <span className="hidden sm:block font-display text-base md:text-lg leading-tight text-navy">
            A Maior Fábrica<br />
            <span className="text-primary">de Pudim do Mundo!</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-navy/80 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-primary text-sm">
          Fale com o comercial
        </a>
        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute inset-x-0 top-0 h-0.5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base font-medium text-navy hover:text-primary">
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2 self-start">
              Fale com o comercial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-background" />
      <div className="container-editorial grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 animate-rise">
          <span className="eyebrow">Feito em São José dos Campos/SP • Desde sempre com amor</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-navy">
            O doce que <em className="not-italic text-primary">conquista corações</em> em todo o Brasil.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Da nossa produção em São José dos Campos/SP para milhares de pontos de venda, a Doceria da Rebeka
            une sabor caseiro, qualidade e escala para encantar consumidores todos os dias.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Fale com o comercial</a>
            <a href="#produtos" className="btn-outline">Conheça nossos produtos</a>
          </div>
          <p className="mt-10 text-sm text-navy/70 max-w-md">
            <span className="font-semibold text-navy">Pudim e brigadeirão</span> feitos com amor e perfeição —
            presentes em mais de 11.000 pontos de venda pelo país.
          </p>
        </div>
        <div className="lg:col-span-6 relative animate-rise" style={{ animationDelay: "150ms" }}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(30,43,94,0.35)]">
            <img src={pudimHero.url} alt="Pudim cremoso da Doceria da Rebeka com calda dourada" className="h-full w-full object-cover" />
          </div>
          <div className="hidden md:flex absolute -left-8 bottom-10 w-56 flex-col rounded-2xl bg-card p-5 shadow-xl border border-border">
            <span className="text-3xl font-display text-primary">+11 mil</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Pontos de venda no Brasil</span>
          </div>
          <div className="hidden md:block absolute -right-6 -top-6 h-32 w-32 rounded-full bg-pudim/60 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial max-w-3xl text-center">
        <span className="eyebrow">Nosso propósito</span>
        <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">
          Aqui cada doce é feito com <em className="not-italic text-primary">amor e perfeição</em>.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Na Doceria da Rebeka, cada receita carrega carinho, tradição e cuidado em cada detalhe.
          Nosso compromisso é transformar momentos simples em experiências inesquecíveis,
          levando pudins e brigadeirões de qualidade para grandes mercados e consumidores
          de todo o Brasil.
        </p>
        <div className="mt-10 flex justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="h-1.5 w-8 rounded-full bg-primary/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="py-24 md:py-32 bg-cream/60">
      <div className="container-editorial grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(30,43,94,0.3)]">
            <img src={historia.url} alt="Pudim artesanal da Doceria da Rebeka" className="h-full w-full object-cover" />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 aspect-square w-52 overflow-hidden rounded-2xl border-8 border-background shadow-xl">
            <img src={gal1.url} alt="Detalhe do pudim" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">Nossa história</span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">
            Uma história feita de sabor, cuidado e confiança.
          </h2>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
            A Doceria da Rebeka nasceu com o propósito de entregar doces que despertam
            memórias afetivas e conquistam pela primeira colherada. Com sede em São José dos Campos/SP,
            somos especialistas na produção de pudins e brigadeirões, atendendo exclusivamente
            no atacado com padrão de qualidade, praticidade e consistência.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Mais do que doces, entregamos parceria, confiança e produtos preparados para
            se destacar nas gôndolas, vitrines e pontos de venda.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-navy/80">
            <span className="h-px w-10 bg-primary" />
            <span className="font-medium">Sede em São José dos Campos — São Paulo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const NUMEROS = [
  { title: "+ de 11.000", sub: "Pontos de venda pelo Brasil" },
  { title: "Maior produtora", sub: "de pudim do mundo" },
  { title: "Atacado", sub: "Atendimento exclusivo para mercados e distribuidores" },
  { title: "Qualidade", sub: "Padrão rigoroso em cada receita" },
];

function Numeros() {
  return (
    <section className="py-24 md:py-28 bg-navy text-white">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <span className="eyebrow text-pudim">Autoridade</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-white">
            Uma marca com presença nacional.
          </h2>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {NUMEROS.map((n, i) => (
            <div key={i} className="border-t border-white/15 pt-6">
              <div className="font-display text-3xl md:text-4xl text-pudim leading-tight">{n.title}</div>
              <p className="mt-3 text-sm md:text-base text-white/75 leading-relaxed">{n.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUTOS = [
  {
    tag: "Campeão de vendas",
    name: "Pudim de 120g",
    desc:
      "O verdadeiro queridinho dos clientes. Textura cremosa, calda no ponto perfeito e sabor caseiro que conquista à primeira colherada. Ideal para consumo individual e perfeito para grandes mercados que buscam um produto de alta aceitação.",
    highlights: ["Textura cremosa", "Calda no ponto", "Embalagem prática", "Sabor caseiro", "Campeão de vendas"],
    img: pudimProduto.url,
    aspect: "aspect-[5/4]",
  },
  {
    tag: "Clássico irresistível",
    name: "Brigadeirão de 80g",
    desc:
      "Cremosidade e sabor marcante de chocolate em uma porção individual irresistível. Produzido com cuidado e ingredientes selecionados, é uma opção perfeita para vitrines, gôndolas e consumidores que procuram um doce clássico com qualidade.",
    highlights: ["Chocolate intenso", "Textura cremosa", "Porção individual", "Ideal para vitrines", "Alto apelo visual"],
    img: brigadeirao.url,
    aspect: "aspect-[3/4]",
  },
];

function Produtos() {
  return (
    <section id="produtos" className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <div>
            <span className="eyebrow">Nossos produtos</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
              Receitas que criam memórias, da primeira à última colherada.
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            Dois campeões desenvolvidos para performar no ponto de venda e encantar quem prova.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12">
          {PRODUTOS.map((p) => (
            <article key={p.name} className="group flex flex-col rounded-[2rem] bg-card border border-border overflow-hidden shadow-[0_18px_50px_-30px_rgba(30,43,94,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(233,30,99,0.35)]">
              <div className="relative aspect-[5/4] overflow-hidden bg-cream">
                <img
                  src={p.img}
                  alt={p.name}
                  className={`h-full w-full object-contain transition-transform duration-[900ms] ease-out group-hover:scale-105 ${p.imgClass ?? ""}`}
                />

                <span className="absolute top-5 left-5 rounded-full bg-background/90 backdrop-blur px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.tag}
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col grow">
                <h3 className="font-display text-2xl md:text-3xl">{p.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="rounded-full bg-cream text-navy text-xs font-medium px-3 py-1.5 border border-border">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const BENEFICIOS = [
  "Produto pronto para venda",
  "Boa aceitação pelo consumidor",
  "Embalagens práticas",
  "Produção em escala",
  "Atendimento comercial próximo",
  "Marca com presença nacional",
];

function Atacado() {
  return (
    <section id="atacado" className="py-24 md:py-32 bg-gradient-to-br from-cream via-background to-cream">
      <div className="container-editorial grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow">Atendimento B2B</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
            Leve a Doceria da Rebeka para o seu mercado.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Atendemos mercados, redes varejistas e distribuidores que buscam produtos com
            excelente aceitação, apresentação atrativa e padrão de qualidade. Nossa produção
            foi pensada para entregar sabor, escala e confiança para quem precisa vender bem
            todos os dias.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            Fale com o nosso comercial pelo WhatsApp
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4">
            {BENEFICIOS.map((b, i) => (
              <div key={b} className="group rounded-2xl bg-card border border-border p-6 flex items-start gap-4 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="font-medium text-navy leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const GALERIA = [
  { src: gal2.url, tall: true, alt: "Pudim com calda dourada", position: "center" },
  { src: gal1.url, tall: false, alt: "Detalhe cremoso" },
  { src: gal5.url, tall: false, alt: "Embalagem timbrada Doceria da Rebeka" },
  { src: gal4.url, tall: true, alt: "Composição de doces", position: "left-bottom" },
  { src: gal3.url, tall: false, alt: "Close do pudim" },
  { src: compos.url, tall: false, alt: "Composição de produtos" },
];

function Galeria() {
  return (
    <section id="galeria" className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <span className="eyebrow">Galeria</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
            Delícias que conquistam no olhar e no sabor.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Produtos pensados para encantar consumidores desde a vitrine até a última colherada.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GALERIA.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-cream ${
                g.tall ? "row-span-2 aspect-[3/5]" : "aspect-[4/5] lg:aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                className={`h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] object-${g.position ?? "center"}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Qualidade() {
  return (
    <section className="py-24 md:py-32 bg-navy text-white">
      <div className="container-editorial grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow text-pudim">Qualidade</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight text-white">
            Sabor caseiro com padrão profissional.
          </h2>
          <p className="mt-6 text-lg text-white/75 leading-relaxed">
            Cada produto da Doceria da Rebeka segue um rigoroso padrão de produção para garantir
            textura, sabor, conservação e apresentação. O resultado é um doce com aparência
            irresistível, sabor marcante e qualidade constante para o mercado.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {["Textura", "Sabor", "Conservação"].map((t) => (
              <div key={t} className="border-t border-white/20 pt-3">
                <div className="text-sm text-white/60">Padrão</div>
                <div className="font-display text-lg text-pudim">{t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={gal2.url} alt="Detalhe da qualidade do pudim" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contato() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <span className="eyebrow">Contato</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
            Fale com a Doceria da Rebeka.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Quer levar nossos produtos para o seu mercado ou distribuidora?
            Entre em contato com nosso time comercial.
          </p>
          <div className="mt-10 space-y-5 text-navy">
            <ContatoLinha label="WhatsApp" value="(12) 98128-5713" href="tel:+5512981285713" />
            <ContatoLinha label="E-mail" value="contato@doceriadarebeka.com.br" href="mailto:contato@doceriadarebeka.com.br" />
            <ContatoLinha
              label="Endereço"
              value="Rodovia Geraldo Scavone, 2730, Rua 03, Nº353, Jardim Califórnia, São José dos Campos/SP, 12305-490"
            />
            <ContatoLinha label="Instagram" value="@doceria.darebeka" href="https://www.instagram.com/doceria.darebeka/" />
            <ContatoLinha label="Facebook" value="Doceria da Rebeka" href="https://www.facebook.com/doceriadaRebeka/?locale=pt_BR" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="rounded-[2rem] bg-card border border-border p-8 md:p-10 shadow-[0_20px_50px_-30px_rgba(30,43,94,0.2)]">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nome" name="nome" required />
              <Field label="Empresa" name="empresa" />
              <Field label="E-mail" name="email" type="email" required />
              <Field label="WhatsApp" name="whatsapp" type="tel" />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                rows={5}
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-navy placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                placeholder="Conte um pouco sobre o seu negócio..."
              />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button type="submit" className="btn-primary">
                {sent ? "Mensagem enviada!" : "Enviar mensagem"}
              </button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Chamar no WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-navy/70 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-navy placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
      />
    </div>
  );
}

function ContatoLinha({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="text-xs uppercase tracking-widest text-primary font-semibold">{label}</div>
      <div className="mt-1 text-navy leading-snug">{value}</div>
    </>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block group">
      <div className="border-l-2 border-primary/40 pl-4 group-hover:border-primary transition-colors">{content}</div>
    </a>
  ) : (
    <div className="border-l-2 border-primary/40 pl-4">{content}</div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-editorial py-16 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Doceria da Rebeka" className="h-14 w-14 object-contain" />
            <span className="font-display text-xl text-white leading-tight">
              Doceria<br />
              <span className="text-pudim">da Rebeka</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm font-display text-lg text-white/90 italic">
            Aqui cada doce é feito com amor e perfeição!
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-pudim font-semibold">Navegação</div>
          <ul className="mt-5 space-y-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-pudim font-semibold">Contato</div>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed">
            <li>Rodovia Geraldo Scavone, 2730<br />Rua 03, Nº353, Jardim Califórnia<br />São José dos Campos/SP — 12305-490</li>
            <li><a href="tel:+5512981285713" className="hover:text-white">(12) 98128-5713</a></li>
            <li><a href="mailto:contato@doceriadarebeka.com.br" className="hover:text-white">contato@doceriadarebeka.com.br</a></li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="https://www.instagram.com/doceria.darebeka/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-navy transition">Instagram</a>
            <a href="https://www.facebook.com/doceriadaRebeka/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-navy transition">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-editorial py-6 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© 2026 Doceria da Rebeka. Todos os direitos reservados.</span>
          <span>São José dos Campos — São Paulo, Brasil</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Historia />
        <Numeros />
        <Produtos />
        <Atacado />
        <Galeria />
        <Qualidade />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
