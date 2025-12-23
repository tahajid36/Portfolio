const BackgroundEffects = () => {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-[#050b1e]" />
  
        {/* Blue glow blobs */}
        <div
          className="absolute top-[-30%] left-[-20%] w-[700px] h-[700px]
          bg-blue-600/25 rounded-full blur-[140px]"
        />
  
        <div
          className="absolute bottom-[-25%] right-[-20%] w-[800px] h-[800px]
          bg-cyan-400/20 rounded-full blur-[160px]"
        />
  
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>
    );
  };
  
  export default BackgroundEffects;
  