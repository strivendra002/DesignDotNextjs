import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full py-16 bg-[#f5f5f5] overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/map.png')" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-start">
        <div className="relative pl-24 md:pl-28">
          <div className="absolute left-0 top-0 w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-2xl flex items-center justify-center text-[10px] md:text-xs font-semibold text-black shadow-md">
            <span className="text-center leading-tight">
              ABOUT <br /> FIRM
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            HLS Global Group
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-md">
            is an international accounting and business advisory firm with a
            focus on providing superior services in the areas of accounting,
            tax, audit, advisory, and consulting. We bridge businesses across
            India, Japan, and global markets with expertise and innovation.
          </p>

          <div className="max-w-md mt-6">
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-w-md border-t pt-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">250+</h3>
                <p className="text-xs text-gray-600">
                  Professional Staff Members Globally
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
                <p className="text-xs text-gray-600">
                  Clients in the HLS Global Network
                </p>
              </div>
            </div>
            <div className="w-[90%] h-0.5 bg-black my-6"></div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">35+</h3>
                <p className="text-xs text-gray-600">
                  Years of Experience Connecting Japan and the World
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                <p className="text-xs text-gray-600">
                  Countries Covered With Our Alliance Network
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 right-6 z-10 ">
            {" "}
            <div className="flex items-center gap-3 bg-orange-500 px-5 py-2 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <span className="text-xs font-semibold text-black tracking-wide">
                WE ARE LOCATED
              </span>

              <span className="bg-black text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                INDIA
                <span className="text-[10px] ">▼</span>
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl mt-4">
            {" "}
            <Image
              src="/building.jpg"
              alt="HLS Global Group building"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
