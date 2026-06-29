import Link from "next/link";

export const metadata = {
  title: "About — SIT",
  description: "Learn the story behind SIT — built on ergonomic research and forward-thinking design for professional workspaces.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0f1a14] py-24 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#2d6e44] mb-3">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 max-w-2xl mx-auto leading-tight">
          Built on research.<br />Refined by design.
        </h1>
        <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
          SIT was founded on a single belief: the furniture you work in shapes the work you produce.
        </p>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#1c4a2e] mb-4">Who We Are</p>
            <h2 className="text-3xl font-semibold text-[#0f1a14] mb-6 leading-tight">
              A workspace furniture company with a design-first philosophy.
            </h2>
            <p className="text-[#0f1a14]/70 leading-relaxed mb-4">
              SIT designs and manufactures office furniture grounded in rigorous ergonomic research
              and refined by a team of industrial designers passionate about the modern workspace.
              Every piece begins in our development lab, where form and function are tested together.
            </p>
            <p className="text-[#0f1a14]/70 leading-relaxed mb-4">
              From executive suites to collaborative hubs, we engineer furniture that inspires
              productivity while elevating the aesthetic of any professional environment.
            </p>
            <p className="text-[#0f1a14]/70 leading-relaxed">
              With over 15 years of experience and products deployed across 50+ countries,
              SIT has become the trusted partner for businesses that believe great design
              and great performance are not a compromise — they are a standard.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "15+", label: "Years of Design" },
              { value: "200+", label: "Products" },
              { value: "50+", label: "Countries" },
              { value: "100K+", label: "Workspaces" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0f1a14] rounded-2xl p-8 text-center"
              >
                <p className="text-4xl font-semibold text-white mb-2">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#e8f0eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1c4a2e] mb-2">What drives us</p>
            <h2 className="text-3xl font-semibold text-[#0f1a14]">Our core values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔬",
                title: "Research-Backed",
                desc: "Every design starts in our ergonomics lab, informed by real human data and tested by real professionals.",
              },
              {
                icon: "🌿",
                title: "Sustainable",
                desc: "Materials are sourced responsibly. We minimize waste, maximize durability, and design for longevity — not landfill.",
              },
              {
                icon: "⚙️",
                title: "Precision Built",
                desc: "Each component is crafted to exacting tolerances. What we ship today should still perform flawlessly a decade from now.",
              },
              {
                icon: "🎨",
                title: "Award-Winning",
                desc: "Recognized internationally for design excellence. We hold ourselves to the standard of the world's best.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl border border-[#0f1a14]/8">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <p className="font-semibold text-[#0f1a14] mb-2">{item.title}</p>
                <p className="text-sm text-[#0f1a14]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1c4a2e] mb-2">How we work</p>
            <h2 className="text-3xl font-semibold text-[#0f1a14]">From concept to workspace</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Ergonomic Research",
                desc: "We study posture, movement, and fatigue patterns to understand what the human body actually needs during long work sessions.",
              },
              {
                step: "02",
                title: "Industrial Design",
                desc: "Our designers translate research insights into forms that are beautiful, manufacturable, and built to last in demanding environments.",
              },
              {
                step: "03",
                title: "Precision Manufacturing",
                desc: "Every SIT product is assembled under strict quality controls, ensuring each piece meets the performance standards we promise.",
              },
            ].map((step) => (
              <div key={step.step} className="relative">
                <p className="text-7xl font-semibold text-[#0f1a14]/5 mb-4 leading-none">{step.step}</p>
                <h3 className="font-semibold text-[#0f1a14] mb-3 text-lg">{step.title}</h3>
                <p className="text-sm text-[#0f1a14]/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0f1a14] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#2d6e44] mb-4">Ready to get started?</p>
        <h2 className="text-3xl font-semibold text-white mb-5 max-w-lg mx-auto">
          See the collection for yourself.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-7 py-3.5 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors text-sm font-medium"
          >
            Browse Products
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 border border-white/20 text-white/80 rounded-full hover:border-white/50 hover:text-white transition-colors text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
