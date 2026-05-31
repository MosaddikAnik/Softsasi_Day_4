const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 border-b border-yellow-500/20">
      <h2 className="tracking-widest font-bold">
        GLOBAL THREAT MATRIX
      </h2>

      <div className="flex gap-2">
        <button className="btn btn-xs btn-outline btn-warning">
          NODE: OMEGA-7
        </button>
        <button className="btn btn-xs btn-warning">
          SECURE LOGIN
        </button>
      </div>
    </header>
  );
};

export default Header;