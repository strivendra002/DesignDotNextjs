import Image from "next/image";

const insights = [
  {
    title: "Pre-market Entry",
    desc: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
  },
  {
    title: "Market Entry",
    desc: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
  },
  {
    title: "Operations",
    desc: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
  },
  {
    title: "Growth & Expansion",
    desc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
  },
];

export default function Insights() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-start">
        <div className="relative pl-24 md:pl-28">
          <div className="absolute left-0 top-0 w-24 h-24 bg-gray-200 rounded-2xl flex items-center justify-center text-[11px] font-semibold text-black leading-tight shadow-sm">
            <span className="text-center">
              INSPIRATION & <br /> INSIGHTS
            </span>
          </div>

          <div className="space-y-6">
            {insights.map((item, index) => (
              <div
                key={index}
                className={`pb-4 border-b ${
                  index === 0 ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <h3
                  className={`text-sm font-semibold ${
                    index === 0 ? "text-blue-600" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-xs ${
                    index === 0 ? "text-blue-600" : "text-black"
                  } mt-2 leading-relaxed max-w-md`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end gap-4">
          <div className="relative w-65 h-90 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/coins.jpg" alt="coins" fill className="object-cover" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="text-sm font-semibold">Pre-Market</h4>
              <p className="text-[11px] opacity-90 leading-snug">
                Evaluating Supply Chain Readiness Before Committing Capital in
                Emerging Markets
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="relative w-22.5 h-90 rounded-2xl overflow-hidden">
              <Image
                src="/growth.jpg"
                alt="operations"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 -rotate-90 text-white text-xs font-semibold whitespace-nowrap">
                Operations
              </div>
            </div>

            <div className="relative w-22.5 h-90 rounded-2xl overflow-hidden">
              <Image
                src="/growth.jpg"
                alt="growth"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-13 left-1/2 -translate-x-1/2 -rotate-90 text-white text-xs font-semibold whitespace-nowrap">
                Growth & Expansion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
