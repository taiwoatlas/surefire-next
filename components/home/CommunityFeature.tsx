import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const moments = [
  { title: "Children", src: "/images/ministries/ministry-children.jpg", className: "row-span-2 min-h-[250px]" },
  { title: "Youth", src: "/images/ministries/ministry-youth.jpg", className: "min-h-[120px]" },
  { title: "Men", src: "/images/ministries/ministry-men.jpg", className: "min-h-[120px]" },
  { title: "Women", src: "/images/ministries/ministry-women.jpg", className: "col-span-2 min-h-[145px] sm:col-span-1" },
];

export function CommunityFeature() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 md:grid-cols-[.78fr_1.22fr] md:items-center md:gap-10 md:px-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c8192e]">More than a Sunday</p>
          <h2 className="mt-2 max-w-md text-3xl font-black leading-[1.02] tracking-[-.05em] text-[#101010] sm:text-4xl">A community to belong to. A purpose to grow into.</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#686563]">Across generations and ministries, there is room to build friendships, discover your gifts and serve with meaning.</p>
          <Link href="/ministries" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#101010] px-4 text-sm font-bold text-white transition hover:bg-[#c8192e]">Explore our ministries <ArrowUpRight size={15} /></Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {moments.map((moment) => (
            <Link key={moment.title} href="/ministries" className={`group relative overflow-hidden rounded-sm bg-[#191919] ${moment.className}`}>
              <Image src={moment.src} alt={`${moment.title} ministry at The Surefire Christian Church of God`} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4"><span className="text-sm font-extrabold text-white sm:text-base">{moment.title}</span><span className="grid size-7 place-items-center rounded-full bg-[#c8192e] text-white"><ArrowUpRight size={13} /></span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
