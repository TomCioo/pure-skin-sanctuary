import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero.jpeg";
import aboutImg from "@/assets/about.jpeg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const BOOKSY = "https://pureskinkrakow.booksy.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pure Skin · Salon Urody Kraków — zabiegi premium beauty & spa" },
      {
        name: "description",
        content:
          "Salon Urody Pure Skin w Krakowie. Medycyna estetyczna, depilacja laserowa, masaże, oczyszczanie i pielęgnacja twarzy. Zarezerwuj wizytę online.",
      },
      { property: "og:title", content: "Pure Skin · Salon Urody Kraków" },
      {
        property: "og:description",
        content:
          "Premium beauty & spa w sercu Krakowa. Indywidualne podejście, profesjonalne zabiegi, naturalne efekty.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Salon Urody Pure Skin",
          image: "/og-cover.jpg",
          telephone: "+48 790 224 666",
          url: "https://pureskinkrakow.booksy.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bolesława Orlińskiego 1B/33",
            addressLocality: "Kraków",
            postalCode: "31-878",
            addressCountry: "PL",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "15:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "11:00", closes: "19:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "15:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "11:00", closes: "20:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "19:00" },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Medycyna estetyczna",
    desc: "Świadome odmładzanie twarzy z wykorzystaniem nowoczesnych technologii i preparatów najwyższej jakości.",
    count: "4 zabiegi",
  },
  {
    title: "Depilacja laserowa",
    desc: "Bezbolesne i trwałe rozwiązanie dla gładkiej skóry — dla kobiet i mężczyzn, każda partia ciała.",
    count: "13 zabiegów",
  },
  {
    title: "Oczyszczanie twarzy",
    desc: "Profesjonalne oczyszczanie wodorowe i manualne — czysta, promienna i zregenerowana cera.",
    count: "2 zabiegi",
  },
  {
    title: "Kwasy & peelingi chemiczne",
    desc: "Indywidualnie dobrane terapie kwasami — odmładzanie, rozjaśnianie, walka z niedoskonałościami.",
    count: "6 zabiegów",
  },
  {
    title: "Masaże & rytuały SPA",
    desc: "Masaż gorącymi kamieniami, świecą, czekoladą — chwila wyciszenia i głębokiej regeneracji.",
    count: "27 zabiegów",
  },
  {
    title: "Zabiegi na ciało",
    desc: "Modelowanie, ujędrnianie i pielęgnacja — kompleksowa opieka nad ciałem od stóp do głów.",
    count: "2 zabiegi",
  },
  {
    title: "Kosmetyka twarzy",
    desc: "Pielęgnacyjne rytuały twarzy z kosmetykami profesjonalnymi, dopasowane do potrzeb Twojej skóry.",
    count: "54 zabiegi",
  },
  {
    title: "Bon podarunkowy",
    desc: "Wyjątkowy prezent dla bliskiej osoby — chwila relaksu i pielęgnacji w eleganckim opakowaniu.",
    count: "Voucher",
  },
];

const hours = [
  { day: "Poniedziałek", time: "10:00 – 15:00" },
  { day: "Wtorek", time: "11:00 – 19:00" },
  { day: "Środa", time: "10:00 – 15:00" },
  { day: "Czwartek", time: "11:00 – 20:00" },
  { day: "Piątek", time: "11:00 – 19:00" },
  { day: "Sobota", time: "Zamknięte", closed: true },
  { day: "Niedziela", time: "Zamknięte", closed: true },
];

const reviews = [
  {
    name: "Aleksandra M.",
    text: "Cudowne miejsce — od progu czuć profesjonalizm i dbałość o detale. Skóra po zabiegu wygląda po prostu pięknie. Wracam regularnie!",
  },
  {
    name: "Karolina W.",
    text: "Najlepszy salon w Krakowie. Pani jest niezwykle uważna, słucha i doradza. Polecam każdej kobiecie, która szuka zaufanej kosmetolożki.",
  },
  {
    name: "Magdalena K.",
    text: "Atmosfera spa, eleganckie wnętrze i przede wszystkim widoczne efekty zabiegów. Czuję się tu zaopiekowana w 100%.",
  },
  {
    name: "Joanna R.",
    text: "Masaż czekoladą to doświadczenie nie z tej ziemi — zapach, dotyk, relaks. Pure Skin to mój mały rytuał wytchnienia.",
  },
  {
    name: "Natalia S.",
    text: "Depilacja laserowa przeprowadzona idealnie — bezbolesnie, bezpiecznie i z fantastycznym efektem. Polecam z całego serca.",
  },
  {
    name: "Ewa P.",
    text: "Wreszcie znalazłam miejsce, gdzie kosmetolog naprawdę słucha i dobiera zabiegi do mojej skóry. Cudowne wrażenia.",
  },
];

const galleryImages = [
  { src: g1, h: "h-[28rem]" },
  { src: g5, h: "h-[34rem]" },
  { src: g2, h: "h-[22rem]" },
  { src: g4, h: "h-[28rem]" },
  { src: g3, h: "h-[34rem]" },
  { src: g6, h: "h-[24rem]" },
];

function HomePage() {
  useReveal();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <img
          src={heroImg}
          alt="Wnętrze Salonu Urody Pure Skin w Krakowie"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />

        <div className="container-luxe relative z-10 max-w-3xl">
          <p
            className="eyebrow animate-[fade-in_0.9s_ease-out]"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Salon Urody · Kraków
          </p>
          <h1
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-primary"
            style={{ animation: "fade-up 1s ease-out 0.25s both" }}
          >
            Pure Skin<br />
            <span className="italic text-gold">Salon Urody</span>
          </h1>
          <p
            className="mt-8 text-lg md:text-xl text-primary/75 max-w-xl leading-relaxed"
            style={{ animation: "fade-up 1s ease-out 0.5s both" }}
          >
            Piękno, które podkreśla Twoją naturalność. Premium beauty, świadoma
            pielęgnacja i indywidualna troska — w sercu Krakowa.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{ animation: "fade-up 1s ease-out 0.7s both" }}
          >
            <a href={BOOKSY} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Zarezerwuj wizytę <ArrowRight size={14} />
            </a>
            <a href="#oferta" className="btn-outline">
              Zobacz ofertę
            </a>
          </div>

          <div
            className="mt-16 flex items-center gap-6 text-sm text-primary/70"
            style={{ animation: "fade-in 1.2s ease-out 1s both" }}
          >
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span>5.0 · ponad 337 opinii w Booksy</span>
          </div>
        </div>
      </section>

      {/* O NAS */}
      <section id="o-nas" className="py-28 md:py-36 bg-cream">
        <div className="container-luxe grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Profesjonalny zabieg pielęgnacyjny twarzy w Pure Skin"
                width={1200}
                height={1400}
                loading="lazy"
                className="w-full h-[32rem] md:h-[38rem] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/60 -z-0 hidden md:block" />
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <p className="eyebrow">O Salonie</p>
            <h2 className="mt-5 text-4xl md:text-5xl text-primary leading-tight">
              Twoje piękno
              <br />
              <span className="italic text-gold">w troskliwych rękach</span>
            </h2>
            <span className="gold-divider mt-8" />
            <p className="mt-8 text-base md:text-lg text-foreground/75 leading-relaxed">
              Pure Skin to kameralne miejsce w Krakowie, w którym profesjonalizm
              spotyka się z prawdziwą pasją do urody. Łączymy wieloletnie
              doświadczenie, najwyższej jakości preparaty i nowoczesne
              technologie, by każda wizyta była dla Ciebie chwilą wyciszenia i
              widocznym efektem.
            </p>
            <p className="mt-5 text-base text-foreground/70 leading-relaxed">
              Wierzymy, że piękno jest indywidualne — dlatego każdą terapię
              dobieramy specjalnie do Twoich potrzeb, oczekiwań i rytmu życia.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "10+", l: "lat doświadczenia" },
                { n: "337", l: "opinii 5.0" },
                { n: "100+", l: "zabiegów" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl md:text-5xl text-gold">
                    {s.n}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground/60">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-28 md:py-36">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="eyebrow">Oferta</p>
            <h2 className="mt-5 text-4xl md:text-5xl text-primary">
              Zabiegi <span className="italic text-gold">premium</span>
            </h2>
            <span className="gold-divider mt-6" />
            <p className="mt-6 text-foreground/70">
              Pełną ofertę z cennikiem znajdziesz w naszym profilu Booksy. Poniżej
              wybrane kategorie zabiegów dostępnych w Pure Skin.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s, i) => (
              <a
                key={s.title}
                href={BOOKSY}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background p-8 md:p-10 reveal hover:bg-cream transition-colors duration-500 flex flex-col"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <Sparkles
                  size={20}
                  className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500"
                />
                <h3 className="text-2xl text-primary leading-tight">{s.title}</h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.18em]">
                  <span className="text-gold">{s.count}</span>
                  <ArrowRight
                    size={14}
                    className="text-primary/50 group-hover:text-gold group-hover:translate-x-1 transition-all"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <a href={BOOKSY} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Pełna oferta w Booksy <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* REZERWACJA CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <img
          src={g1}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-luxe relative z-10 text-center text-primary-foreground reveal">
          <p className="eyebrow !text-gold">Rezerwacja online</p>
          <h2 className="mt-6 text-4xl md:text-6xl text-primary-foreground max-w-3xl mx-auto leading-[1.05]">
            Zarezerwuj swoją chwilę
            <br />
            <span className="italic text-gold">tylko dla siebie</span>
          </h2>
          <p className="mt-6 text-primary-foreground/75 max-w-xl mx-auto">
            Wybierz dogodny termin online — szybko, wygodnie i bez czekania na
            telefon. Cała oferta i kalendarz w Booksy.
          </p>
          <a
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-10"
          >
            <Calendar size={14} /> Umów wizytę online
          </a>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-28 md:py-36 bg-cream">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-5 text-4xl md:text-5xl text-primary">
              Nasze <span className="italic text-gold">wnętrze i efekty</span>
            </h2>
            <span className="gold-divider mt-6" />
          </div>

          <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="mb-5 break-inside-avoid overflow-hidden reveal group"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <img
                  src={img.src}
                  alt={`Pure Skin — galeria ${i + 1}`}
                  loading="lazy"
                  className={`w-full ${img.h} object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPINIE */}
      <section id="opinie" className="py-28 md:py-36">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="eyebrow">Opinie klientek</p>
            <h2 className="mt-5 text-4xl md:text-5xl text-primary">
              Czego doświadczają
              <br />
              <span className="italic text-gold">nasze klientki</span>
            </h2>
            <span className="gold-divider mt-6" />
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <article
                key={r.name}
                className="bg-cream p-9 md:p-10 reveal flex flex-col"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 text-foreground/80 leading-relaxed italic font-display text-lg">
                  „{r.text}"
                </p>
                <p className="mt-8 text-xs uppercase tracking-[0.22em] text-primary/70">
                  — {r.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-28 md:py-36 bg-cream">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="eyebrow">Kontakt</p>
            <h2 className="mt-5 text-4xl md:text-5xl text-primary">
              Odwiedź nas <span className="italic text-gold">w Krakowie</span>
            </h2>
            <span className="gold-divider mt-6" />
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="reveal space-y-10">
              <div>
                <p className="eyebrow flex items-center gap-2">
                  <MapPin size={12} /> Adres
                </p>
                <p className="mt-4 font-display text-2xl text-primary leading-snug">
                  Bolesława Orlińskiego 1B/33<br />
                  <span className="text-foreground/70 text-lg">
                    1 piętro · 31-878 Kraków
                  </span>
                </p>
              </div>

              <div>
                <p className="eyebrow flex items-center gap-2">
                  <Phone size={12} /> Telefon
                </p>
                <a
                  href="tel:+48790224666"
                  className="mt-4 inline-block font-display text-2xl text-primary hover:text-gold transition-colors"
                >
                  +48 790 224 666
                </a>
              </div>

              <div>
                <p className="eyebrow flex items-center gap-2">
                  <Clock size={12} /> Godziny otwarcia
                </p>
                <ul className="mt-4 divide-y divide-border/70">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between py-3 text-sm"
                    >
                      <span className="text-foreground/80">{h.day}</span>
                      <span
                        className={
                          h.closed
                            ? "text-foreground/40"
                            : "text-primary font-medium"
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={BOOKSY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Umów wizytę online <ArrowRight size={14} />
              </a>
            </div>

            <div className="reveal" style={{ transitionDelay: "0.1s" }}>
              <iframe
                title="Mapa — Salon Urody Pure Skin Kraków"
                src="https://www.google.com/maps?q=Boles%C5%82awa+Orli%C5%84skiego+1B,+31-878+Krak%C3%B3w&output=embed"
                className="w-full h-full min-h-[28rem] border-0 grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}