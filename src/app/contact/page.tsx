export const metadata = {
  title: "Contact — SIT",
  description: "Get in touch with the SIT team for product inquiries, quotes, and workspace consultations.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0f1a14] py-24 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#2d6e44] mb-3">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Let&apos;s build your workspace.
        </h1>
        <p className="text-white/50 max-w-md mx-auto text-sm leading-relaxed">
          Whether you need a single piece or a full office fit-out, our team is ready to help.
        </p>
      </section>

      {/* Contact options */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "✉️",
                title: "Email Sales",
                detail: "sales@highexport.com",
                href: "mailto:sales@highexport.com",
                label: "Send an email",
              },
              {
                icon: "📞",
                title: "Call Us",
                detail: "+1 (305) 597-8641",
                href: "tel:+13055978641",
                label: "Call now",
              },
              {
                icon: "🌐",
                title: "Part of",
                detail: "High Export Portfolio",
                href: "mailto:sales@highexport.com",
                label: "Learn more",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#0f1a14]/8 rounded-2xl p-8 text-center hover:border-[#1c4a2e]/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <p className="font-semibold text-[#0f1a14] mb-1">{item.title}</p>
                <p className="text-sm text-[#0f1a14]/60 mb-4">{item.detail}</p>
                <a
                  href={item.href}
                  className="text-xs px-5 py-2 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors inline-block"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* What to expect */}
          <div className="bg-[#e8f0eb] rounded-3xl p-10 md:p-14">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#1c4a2e] mb-2">What to expect</p>
              <h2 className="text-2xl font-semibold text-[#0f1a14]">How we work with clients</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Share your needs",
                  desc: "Tell us about your space, team size, and product interests. The more detail, the better.",
                },
                {
                  step: "02",
                  title: "Get a custom quote",
                  desc: "Our sales team will put together a tailored proposal with pricing, lead times, and options.",
                },
                {
                  step: "03",
                  title: "Review samples",
                  desc: "For larger orders we can arrange samples so you can evaluate materials and comfort firsthand.",
                },
                {
                  step: "04",
                  title: "Delivery & setup",
                  desc: "We coordinate logistics to get your furniture delivered and ready to use with minimal disruption.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 flex gap-5 items-start">
                  <span className="text-2xl font-semibold text-[#1c4a2e]/20 leading-none shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-[#0f1a14] mb-1 text-sm">{item.title}</p>
                    <p className="text-sm text-[#0f1a14]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-20 px-6 bg-[#0f1a14] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#2d6e44] mb-4">Ready?</p>
        <h2 className="text-3xl font-semibold text-white mb-5">
          Start your workspace transformation.
        </h2>
        <a
          href="mailto:sales@highexport.com"
          className="inline-block px-8 py-4 bg-[#1c4a2e] text-white rounded-full hover:bg-[#2d6e44] transition-colors text-sm font-medium"
        >
          Email us at sales@highexport.com
        </a>
      </section>
    </div>
  );
}
