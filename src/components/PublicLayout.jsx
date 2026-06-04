import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function PublicLayout() {
  return (
    <div className="public-layout">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;