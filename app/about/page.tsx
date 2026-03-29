import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Covenant Leather Co. was born from a bishop's tradition — handmade leather journals given to every young missionary he sent into the field. Learn the story behind the brand.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2C2C2C] py-32 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/workbench-leather-hides.webp"
            alt="Leather working bench"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            The Story Behind the Journal
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#FAF7F2] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            It started with his name
            <br />
            <em>on a leather cover.</em>
          </h1>
        </div>
      </section>

      {/* Ben's Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Photo of Ben */}
          <div className="flex-shrink-0 w-full md:w-80">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/Ben-Fowler.webp"
                alt="Benjamin S. Fowler, maker and founder of Covenant Leather Co."
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="mt-4 text-center">
              <p
                className="text-sm font-semibold text-[#6B3A2A]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Benjamin S. Fowler
              </p>
              <p className="text-xs text-[#888] mt-0.5" style={{ fontFamily: "'Lora', serif" }}>
                Maker & Founder — Saratoga Springs, Utah
              </p>
            </div>
          </div>

          {/* Story text */}
          <div className="flex-1">
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Maker
            </p>
            <h2
              className="text-3xl font-bold text-[#2C2C2C] mb-8 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every journal Ben makes carries
              <br />a piece of that tradition.
            </h2>
            <div className="space-y-5 text-base text-[#555] leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
              <p>
                For years, Ben Fowler served as a bishop of a ward in Saratoga Springs, Utah. It
                was one of the most sacred responsibilities he&apos;d ever been given — to shepherd a
                community, to counsel families, and to send young men and women into the world as
                missionaries.
              </p>
              <p>
                When each missionary left, Ben made it a personal tradition to give them something
                he had made himself: a genuine handmade leather journal. Not a store-bought
                notebook. Not a gift card. Something with weight and warmth and intention — something
                that said, <em>what you are about to experience is worth recording.</em>
              </p>
              <p>
                He learned leatherworking the hard way. Ruined hides. Crooked stitches. Thread
                pulled too tight. But he kept at it, because the journals he was giving away were
                going somewhere that mattered. They would sit in backpacks in the Philippines, on
                nightstands in Ukraine, in shirt pockets in Brazil. They needed to last.
              </p>
              <p>
                Those missionaries came home. Some of them still carry their journals. Some have
                passed them to their own children. The leather has darkened and softened, and the
                pages are full of a life that was faithful and hard and worth remembering.
              </p>
              <p>
                Covenant Leather Co. is Ben&apos;s way of making that tradition available to anyone
                who believes that a life worth living is a life worth recording.
              </p>
            </div>

            {/* Engraving photo with pull quote */}
            <div className="mt-10 border-l-4 border-[#6B3A2A] pl-6">
              <p
                className="text-xl italic text-[#2C2C2C] leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;What you are about to experience is worth recording.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engraving section */}
      <section className="bg-[#2C2C2C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0 w-full md:w-96 relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/engraving-benjamin-fowler.webp"
                alt="Benjamin S. Fowler name engraved on a handmade leather journal cover"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p
                className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Personalization
              </p>
              <h2
                className="text-3xl font-bold text-[#FAF7F2] mb-5 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A name stamped in leather
                <br />
                <em>is a name that lasts.</em>
              </h2>
              <p
                className="text-[#c8bfa8] text-base leading-relaxed mb-6"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Every journal can be personalized with a name or initials, hand-stamped into the
                leather cover. It&apos;s how Ben signed the journals he gave away — and it&apos;s how you
                can make yours, or someone else&apos;s, unmistakably theirs.
              </p>
              <Link href="/products" className="btn-primary inline-block">
                Shop & Personalize
              </Link>
            </div>
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
                body: "Every journal begins with hand-selected full-grain or top-grain leather. Ben sources only from tanneries that produce leather worth aging — leather that will outlast the stories written inside.",
              },
              {
                step: "02",
                title: "Cut and Stitch",
                body: "Each cover is cut by hand to size, then stitched with waxed linen thread using a saddle stitch — the same technique used by craftsmen for centuries. No machines. No shortcuts.",
              },
              {
                step: "03",
                title: "Bind and Finish",
                body: "Pages are folded, sewn into signatures, and bound into the leather cover. Edges are burnished. The leather is conditioned. Then it's done — and ready to hold whatever comes next.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span
                  className="text-4xl font-bold text-[#8B6A2A] opacity-70"
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

          {/* Workbench photo */}
          <div className="mt-16 relative aspect-[16/6] overflow-hidden">
            <Image
              src="/images/workbench-leather-hides.webp"
              alt="Ben Fowler's leather working bench — hides, tools, and journals in progress"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F4ECD8]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Handmade in Saratoga Springs, Utah
        </p>
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
          Each one is made by hand, built to last, and ready to hold a life worth recording.
        </p>
        <Link href="/products" className="btn-primary inline-block">
          Shop All Journals
        </Link>
      </section>
    </>
  );
}
