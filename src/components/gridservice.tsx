import { cn } from "../lib/utils";
import {
  IconDatabase,
  IconBrain,
  IconCode,
  IconCloud,
  IconShield,
  IconDeviceMobile,
} from "@tabler/icons-react";

const ServiceSkeleton = ({
  gradient,
  customImage,
}: {
  gradient: string;
  customImage?: string;
}) => (
  <div className={cn("relative w-full h-full min-h-20 rounded-lg overflow-hidden", "bg-gradient-to-br", gradient)}>
    {customImage ? (
      <div className="relative w-full h-full min-h-20">
        <img
          src={customImage}
          alt="Service illustration"
          className="w-full h-full object-cover object-center rounded-lg brightness-90 saturate-125 transition-transform duration-300 will-change-transform group-hover:scale-[1.03]"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-black/30 to-black/10"
        />
      </div>
    ) : (
      <div className="absolute inset-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
    )}
  </div>
);

const services = [
  {
    title: "Data Management",
    description:
      "Pengelolaan data yang terstruktur dan efisien untuk mendukung pengambilan keputusan bisnis yang tepat.",
    header: (
      <ServiceSkeleton
        gradient="from-blue-500 to-blue-800"
        customImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center"
      />
    ),
    icon: <IconDatabase className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Implementasi AI dan machine learning untuk otomatisasi proses dan prediksi bisnis yang cerdas.",
    header: (
      <ServiceSkeleton
        gradient="from-violet-500 to-violet-800"
        customImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center"
      />
    ),
    icon: <IconBrain className="h-6 w-6 text-violet-400" />,
  },
  {
    title: "Software Development",
    description:
      "Pengembangan aplikasi custom yang skalabel dan modern sesuai kebutuhan bisnis Anda.",
    header: (
      <ServiceSkeleton
        gradient="from-emerald-500 to-emerald-800"
        customImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center"
      />
    ),
    icon: <IconCode className="h-6 w-6 text-emerald-400" />,
  },
  {
    title: "Cloud Solutions & Infrastructure",
    description:
      "Pengelolaan infrastruktur cloud yang aman, reliable, dan cost-effective untuk semua kebutuhan bisnis.",
    header: (
      <ServiceSkeleton
        gradient="from-cyan-500 to-cyan-800"
        customImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop&crop=center"
      />
    ),
    icon: <IconCloud className="h-6 w-6 text-cyan-400" />,
  },
  {
    title: "Cybersecurity",
    description: "Perlindungan sistem dan data dengan teknologi keamanan terdepan.",
    header: (
      <ServiceSkeleton
        gradient="from-rose-500 to-rose-800"
        customImage="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1920&h=1080&fit=crop&crop=center"
      />
    ),
    icon: <IconShield className="h-6 w-6 text-rose-400" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Aplikasi mobile yang user-friendly dan performa tinggi untuk iOS dan Android.",
    header: (
      <ServiceSkeleton
        gradient="from-orange-500 to-orange-800"
        customImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop&crop=center"
      />
    ),
    icon: <IconDeviceMobile className="h-6 w-6 text-orange-400" />,
  },
];

export default function GridService() {
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-16 px-[clamp(16px,3vw,20px)]">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-[clamp(28px,5vw,36px)] font-black text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          Layanan <span className="text-[#7cff67] [text-shadow:0_0_10px_rgba(124,255,103,0.3)]">Kami</span>
        </h2>
        <p className="text-[clamp(14px,2.5vw,18px)] text-white/80 max-w-[600px] mx-auto leading-relaxed">
          Solusi teknologi terdepan untuk mendukung transformasi digital perusahaan Anda
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full max-w-[900px] mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative flex min-h-[200px] flex-col gap-3 rounded-xl border border-white/20 bg-black/40 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            <div className="flex-1 min-h-20 rounded-md overflow-hidden">
              {service.header}
            </div>

            <div className="relative z-10 flex flex-col gap-2 text-left">
              <div className="mb-1 flex items-center gap-2 text-left">
                {service.icon}
                <h3 className="m-0 flex-1 text-left text-white text-[14px] font-bold leading-tight">
                  {service.title}
                </h3>
              </div>
              <p className="m-0 pl-0 text-left text-[10px] leading-snug text-white/85">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive tweaks roughly matching the original media queries */}
      <div className="mt-8 lg:mt-0" />
    </div>
  );
}
