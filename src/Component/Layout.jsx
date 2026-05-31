import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-yellow-400 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Header />

        {/* Page Content */}
        <div className="flex-1 p-4 overflow-auto">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;