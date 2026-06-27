export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Aurora blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #4f8ef7, transparent)',
          top: '-100px',
          left: '-100px',
          animation: 'aurora 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #a855f7, transparent)',
          top: '30%',
          right: '-100px',
          animation: 'aurora 18s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #22d3ee, transparent)',
          bottom: '10%',
          left: '20%',
          animation: 'aurora 20s ease-in-out infinite 3s',
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.06] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #ec4899, transparent)',
          bottom: '30%',
          right: '20%',
          animation: 'aurora 22s ease-in-out infinite 6s reverse',
        }}
      />
    </div>
  );
}
