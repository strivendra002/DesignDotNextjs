import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full py-16 bg-[#f5f5f5] overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/map.png')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div className="relative pt-16 md:pt-0">
          <div className="absolute -left-4 md:-left-8 top-0 bg-gray-200 px-4 md:px-6 py-6 md:py-8 rounded-xl text-center font-semibold text-xs md:text-sm shadow-md">
            ABOUT <br /> FIRM
          </div>

          <div className="pl-8 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              HLS Global Group
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md">
              is an international accounting and business advisory firm with a
              focus on providing superior services in the areas of accounting,
              tax, audit, advisory, and consulting. We bridge businesses across
              India, Japan, and global markets with expertise and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8 pl-8 md:pl-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">250+</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Professional Staff Members Globally
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Clients in the HLS Global Network
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">35+</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Years of Experience Connecting Japan and the World
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">15+</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Countries Covered With Our Alliance Network
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          <div className="absolute -top-4 right-0 md:-top-6 md:right-4 bg-orange-500 text-black px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg z-10">
            WE ARE LOCATED
            <span className="bg-black text-white px-2 py-1 rounded-full text-xs">
              INDIA ▼
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl mt-8 md:mt-12">
            <Image
              src="/building.jpg"
              alt="HLS Global Group building"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
