import { ArrowRight } from "lucide-react";

const topics = [
  "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
  "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
  "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
  "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
];

export default function HotTopics() {
  return (
    <section className="w-full bg-gray-100 border-y overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-stretch">
        <div className="bg-orange-500 text-black font-semibold px-6 py-3 shrink-0 clip-label">
          HOT TOPICS
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-10 px-6 py-4 flex-1">
          {topics.map((item, index) => (
            <div
              key={index}
              className="min-w-70 w-70 shrink-0 flex flex-col justify-between"
            >
              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                {item}
              </p>
              <div className="mt-4">
                <ArrowRight className="w-5 h-5 text-gray-600 hover:text-orange-500 transition-colors cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
