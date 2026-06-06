import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./AppLayout.css";

function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="app-layout">
      {/* Przekazujemy stan i funkcję do głównego Headera! */}
      <Header 
        onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        isOpen={isMobileMenuOpen} 
      />

      <div className="app-layout-body">
        <Sidebar isOpen={isMobileMenuOpen} onClose={closeMenu} />

        <main className="app-layout-main">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;