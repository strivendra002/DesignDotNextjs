import Image from "next/image";

export default function Slider() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-[#0E3A8A]">
      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: "polygon(72% 0%, 100% 0%, 100% 100%, 58% 100%)",
        }}
      >
        <Image
          src="/office.jpg"
          alt="office"
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: "70% 85%",
            transform: "scale(1.15)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-lg">
          <p className="text-xs tracking-widest mb-4 text-white/80">
            ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
            EMPOWERED <br /> WORKPLACES
          </h1>

          <p className="text-sm text-white/80 mb-6">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          <button className="bg-orange-500 text-black px-6 py-3 font-semibold rounded-md flex items-center gap-2 hover:bg-orange-600 transition-colors">
            → LET’S CONNECT
          </button>

          <p className="text-xs mt-10 text-white/70">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND
            THE WORLD
          </p>
        </div>
      </div>
    </section>
  );
}
