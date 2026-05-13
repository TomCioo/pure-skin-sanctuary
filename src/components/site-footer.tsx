import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container-luxe grid gap-12 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl tracking-wide">
            Pure<span className="text-gold">·</span>Skin
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Salon Urody Pure Skin — miejsce, w którym pielęgnacja staje się
            rytuałem, a piękno podkreśla Twoją naturalność.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-gold">Kontakt</p>
          <div className="mt-5 space-y-3 text-sm text-primary-foreground/85">
            <p className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
              Bolesława Orlińskiego 1B/33<br />31-878 Kraków
            </p>
            <a
              href="tel:+48790224666"
              className="flex items-center gap-3 hover:text-gold transition-colors"
            >
              <Phone size={16} className="text-gold" />
              790 224 666
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow !text-gold">Obserwuj nas</p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/pureskin.krakow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 inline-flex items-center justify-center border border-primary-foreground/25 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/p/Pure-Skin-100056951653820/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 inline-flex items-center justify-center border border-primary-foreground/25 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-all"
            >
              <Facebook size={16} />
            </a>
          </div>
          <a
            href="https://pureskinkrakow.booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6"
          >
            Umów wizytę
          </a>
        </div>
      </div>

      <div className="container-luxe mt-16 pt-8 border-t border-primary-foreground/15 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} Salon Urody Pure Skin. Wszelkie prawa zastrzeżone.</p>
        <p>Kraków · Nowa Huta</p>
      </div>
    </footer>
  );
}
