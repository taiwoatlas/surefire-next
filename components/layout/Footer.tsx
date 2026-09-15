import Link from "next/link";
import { church } from "@/data/church";
import { primaryNav, footerConnect } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-paper">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-4 md:px-10">
        <div>
          <p className="font-display text-lg">{church.churchName}</p>
          <p className="mt-3 max-w-xs text-sm text-gray-onInk">{church.address}</p>
        </div>

        <nav aria-label="Explore">
          <p className="font-mono text-xs uppercase tracking-wide text-gold">Explore</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-onInk">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect">
          <p className="font-mono text-xs uppercase tracking-wide text-gold">Connect</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-onInk">
            {footerConnect.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-gold">Contact</p>
          <p className="mt-4 text-sm text-gray-onInk">{church.phone.church}</p>
          <a href={church.facebook} className="mt-2 inline-block text-sm text-gray-onInk hover:text-paper" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1240px] border-t border-lineOnInk px-6 pt-6 text-xs text-gray-onInk md:px-10">
        © {new Date().getFullYear()} {church.churchName}. Founded {church.established} by {church.founder}.
      </div>
    </footer>
  );
}
