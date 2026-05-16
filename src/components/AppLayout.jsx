import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />

      <div className="app-layout-body">
        <Sidebar />

        <main className="app-layout-main">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;