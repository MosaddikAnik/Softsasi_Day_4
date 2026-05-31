const ThreatMap = () => {
  return (
    <div className="relative h-full rounded-xl border border-yellow-500/20 bg-[#0b0f1a] p-4 overflow-hidden shadow-lg">

      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/close-up-abstract-atom-against-black-background_19441-5078.avif"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <h2 className="relative z-10 text-xs tracking-widest text-yellow-300/80 mb-4">
        GEO-SPATIAL THREAT ANALYSIS
      </h2>

      {/* Content */}
      <div className="relative z-10">
        
        <div className="text-red-400 text-sm font-mono mb-3">
          DDOS_ORIGIN → detected cluster
        </div>

        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>

          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
          </span>

          <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_0_20px_rgba(255,215,0,0.08)]" />
    </div>
  );
};

export default ThreatMap;