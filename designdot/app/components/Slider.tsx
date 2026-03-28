import Image from "next/image";

export default function Slider() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden text-white">
      <Image
        src="/office.jpg"
        alt="office"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#0E3A8A]/80 clip-curve z-10"></div>

      <div className="absolute inset-0 z-20 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-lg">
          <p className="text-xs tracking-widest mb-4 opacity-80">
            ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-4">
            EMPOWERED <br /> WORKPLACES
          </h1>

          <p className="text-sm opacity-80 mb-6">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          <button className="bg-orange-500 text-black px-6 py-3 font-semibold rounded-md flex items-center gap-2">
            → LET’S CONNECT
          </button>

          <p className="text-xs mt-10 opacity-70">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND
            THE WORLD
          </p>
        </div>
      </div>
    </section>
  );
}
