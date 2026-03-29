import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Covenant Leather Co. is a handmade leather journal shop built on the belief that a life worth living is a life worth recording. Learn about the maker and the mission.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2C2C2C] py-24 text-center px-4">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-4"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Who We Are
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#FAF7F2]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Maker. A Mission.
          <br />
          <em>A Journal Worth Keeping.</em>
        </h1>
      </section>

      {/* Maker Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Maker
            </p>
            <h2
              className="text-3xl font-bold text-[#2C2C2C] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every journal is made by hand.
            </h2>
            <div className="space-y-4 text-base text-[#555] leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
              <p>
                Covenant Leather Co. started with a simple frustration: I couldn&apos;t find a journal
                worth keeping. Everything I bought fell apart, yellowed, or felt disposable. I wanted
                something that aged with me — that got better the more I used it.
              </p>
              <p>
                So I learned to work leather. I ruined a lot of hides. I stitched too tight and too
                loose. I learned what full-grain means and why it matters. I learned what acid-free
                paper feels like under a fountain pen. And eventually, I made something I was proud
                to carry.
              </p>
              <p>
                The first journal I made that felt right — I gave to my nephew before his mission.
                He wrote in it every day for two years. When he came home, the leather was dark and
                worn in, and the pages were full. He cried when I asked to hold it.
              </p>
              <p>
                That&apos;s what Covenant Leather Co. is about. Not just a journal — a record of a life
                that mattered.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-96 aspect-[4/5] relative overflow-hidden">
            <Image
              src="/images/engraving-benjamin-fowler.webp"
              alt="Benjamin S. Fowler name engraved on a handmade leather journal"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F4ECD8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Process
            </p>
            <h2
              className="text-3xl font-bold text-[#2C2C2C]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Made by Hand, Start to Finish
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Select the Hide",
                body: "Every journal begins with hand-selected full-grain or top-grain leather. We only buy from tanneries that produce leather worth aging.",
              },
              {
                step: "02",
                title: "Cut and Stitch",
                body: "Each cover is cut by hand to size, then stitched with waxed linen thread using a saddle stitch — the same technique used for centuries.",
              },
              {
                step: "03",
                title: "Bind and Finish",
                body: "Pages are folded, sewn into signatures, and bound into the leather cover. Edges are burnished. The leather is conditioned. The journal is done.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span
                  className="text-4xl font-bold text-[#C49A3C] opacity-50"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {s.step}
                </span>
                <h3
                  className="text-xl font-semibold text-[#2C2C2C] mt-2 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-[#555] leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <h2
          className="text-3xl font-bold text-[#2C2C2C] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Find the journal that is yours.
        </h2>
        <p
          className="text-[#555] max-w-md mx-auto mb-8"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Every journal is made by hand in the USA, built to be your companion for years to come.
        </p>
        <Link href="/products" className="btn-primary inline-block">
          Shop All Journals
        </Link>
      </section>
    </>
  );
}
