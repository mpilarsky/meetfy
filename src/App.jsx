import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import AppLayout from "./components/AppLayout";

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
import AnalyticsListener from "./components/AnalyticsListener";
import PublicLayout from "./components/PublicLayout"; 
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID); 
  }, []);         
  return (
    <>
      <AnalyticsListener />
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
      <Route 
      path="/preferences" 
      element={
        <ProtectedRoute>
          <PreferencesCreator />
        </ProtectedRoute>
      } 
      />
      </Route>
      <Route 
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/events" element={<MyEventsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/account" element={<MyAccountPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;