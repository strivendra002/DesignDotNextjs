
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
    <section className="w-full bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

       
        <div className="relative">

         
          <div className="absolute -left-6 top-0 bg-gray-200 px-6 py-8 rounded-xl text-center font-semibold text-sm">
            INSPIRATION & <br /> INSIGHTS
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
                  className={`font-semibold ${
                    index === 0 ? "text-blue-600" : ""
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-4 justify-center">

          {/* BIG CARD */}
          <div className="relative w-55 h-95 rounded-2xl overflow-hidden">
            <Image
              src="/coins.jpg"
              alt="coins"
              fill
              sizes="220px"
              className="object-cover"
            />

            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold">Pre-Market</h4>
              <p className="text-xs">
                Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets
              </p>
            </div>
          </div>

         
          <div className="flex flex-col gap-4">

            <div className="relative w-30 h-45 rounded-2xl overflow-hidden">
            
              <div className="absolute bottom-2 left-2 text-white text-xs -rotate-90 origin-bottom-left">
                Operations
              </div>
            </div>

            <div className="relative w-70 h-45 rounded-2xl overflow-hidden">
              <Image
                src="/growth.jpg"
                alt="growth"
                fill
                sizes="120px"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-xs -rotate-90 origin-bottom-left">
                Growth & Expansion
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}