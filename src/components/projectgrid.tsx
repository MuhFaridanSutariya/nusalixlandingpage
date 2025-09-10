// filepath: d:\NGODING SERU\FROND-END\nusalix_tech\src\components\ProjectGrid.tsx
import { LayoutGrid } from "./LayoutGrid";

export default function ProjectGrid() {
  const projects = [
    {
      id: 1,
      content: (
        <div>
          <p className="font-bold text-4xl text-white">E-Commerce Platform</p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Platform e-commerce modern dengan fitur AI recommendation, real-time analytics, 
            dan sistem pembayaran terintegrasi. Dibangun dengan React, Node.js, dan MongoDB.
          </p>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      content: (
        <div>
          <p className="font-bold text-4xl text-white">Healthcare Management</p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Sistem manajemen rumah sakit dengan fitur appointment scheduling, 
            medical records, dan telemedicine. Menggunakan teknologi cloud dan AI.
          </p>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      content: (
        <div>
          <p className="font-bold text-4xl text-white">Fintech Mobile App</p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Aplikasi mobile banking dengan fitur transfer, investment tracking, 
            dan financial planning. Dilengkapi dengan biometric security.
          </p>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      content: (
        <div>
          <p className="font-bold text-4xl text-white">Smart City Dashboard</p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Dashboard monitoring kota pintar dengan real-time data traffic, 
            air quality, energy consumption, dan citizen services integration.
          </p>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    },
  ];

  return (
  <div className="w-full py-10 px-5 mt-8" style={{
    background: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(5px)',
    borderRadius: '12px'
  }}>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-1" style={{
          textShadow: '0 4px 20px rgba(0,0,0,.5)'
        }}>
          Project <span style={{ color: '#7cff67', textShadow: '0 0 10px rgba(124, 255, 103, 0.3)' }}>Kami</span>
        </h2>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          Showcase proyek-proyek terbaik yang telah kami kerjakan dengan teknologi terdepan
        </p>
      </div>

      <LayoutGrid cards={projects} />
    </div>
  );
}