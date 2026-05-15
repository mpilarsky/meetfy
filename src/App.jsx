import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PreferencesCreator from "./pages/PreferencesCreator";
import ContactPage from "./pages/ContactPage";
import UserDashboard from "./pages/UserDashboard";
import FavoritesPage from "./pages/FavoritesPage";
import MyEventsPage from "./pages/MyEventsPage";
import SearchPage from "./pages/SearchPage";
import MyAccountPage from "./pages/MyAccountPage";
import CreateEventPage from "./pages/CreateEventPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/preferences" element={<PreferencesCreator />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/events" element={<MyEventsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/account" element={<MyAccountPage />} />
      <Route path="/create-event" element={<CreateEventPage />} />
    </Routes>
  );
}

export default App;