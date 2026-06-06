import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./PublicLayout.css";
function PublicLayout() {
  return (
    <div className="public-layout">
      <main className="public-layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;