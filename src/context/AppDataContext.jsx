import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

import { initialEvents } from "../data/initialEvents";
import { initialUsers } from "../data/initialUsers";

import spiritsImage from "../assets/favorite-spirits.png";
import musicImage from "../assets/favorite-music.png";
import chefImage from "../assets/favorite-chef.png";
import modernismImage from "../assets/favorite-modernism.png";
import jazzImage from "../assets/search-jazz.png";
import loftImage from "../assets/search-loft.png";
import rooftopImage from "../assets/search-rooftop.png";
import dashboardFeaturedImage from "../assets/dashboard-featured.png";

import {
  loadFromStorage,
  removeFromStorage,
  saveToStorage,
} from "../utils/storage";

const AppDataContext = createContext(null);

const STORAGE_KEYS = {
  userProfiles: "meetfy_user_profiles",
  events: "meetfy_events",
  favoriteEvents: "meetfy_favorite_events",
  myEvents: "meetfy_my_events",
};

const emptyPreferences = {
  interests: [],
  atmosphere: "",
  groupSize: "",
  proximity: 15,
  budget: "",
  targetDate: "",
  timeOfDay: "",
  environment: "",
};

const eventStockImages = [
  spiritsImage,
  musicImage,
  chefImage,
  modernismImage,
  jazzImage,
  loftImage,
  rooftopImage,
  dashboardFeaturedImage,
];

function getRandomEventImage() {
  const randomIndex = Math.floor(Math.random() * eventStockImages.length);

  return eventStockImages[randomIndex];
}

function createProfileFromFirebaseUser(firebaseUser, displayName = "") {
  const [firstName, ...restNameParts] = displayName.trim().split(" ");

  return {
    uid: firebaseUser.uid,
    name: firstName || firebaseUser.displayName || "",
    surname: restNameParts.join(" ") || "",
    email: firebaseUser.email || "",
    phone: "",
    city: "",
    preferences: emptyPreferences,
  };
}

function normalizeEvent(event) {
  return {
    id: event.id || Date.now(),
    image: event.image || getRandomEventImage(),
    tag: event.tag || event.category || "EVENT",
    title: event.title || "Untitled Event",
    price: event.price || "Free",
    date: event.date || "",
    time: event.time || "",
    location: event.location || "",
    category: event.category || "",
    description: event.description || event.text || "",
    organizer: event.organizer || "Meetfy User",
    participantsLimit: event.participantsLimit || "",
    indoor: Boolean(event.indoor),
    publicVisibility:
      event.publicVisibility === undefined ? true : event.publicVisibility,
  };
}

export function AppDataProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [userProfiles, setUserProfiles] = useState(() =>
    loadFromStorage(STORAGE_KEYS.userProfiles, initialUsers)
  );

  const [events, setEvents] = useState(() =>
    loadFromStorage(STORAGE_KEYS.events, initialEvents)
  );

  const [favoriteEvents, setFavoriteEvents] = useState(() =>
    loadFromStorage(STORAGE_KEYS.favoriteEvents, [])
  );

  const [myEvents, setMyEvents] = useState(() =>
    loadFromStorage(STORAGE_KEYS.myEvents, [])
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setAuthUser(firebaseUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.userProfiles, userProfiles);
  }, [userProfiles]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.events, events);
  }, [events]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.favoriteEvents, favoriteEvents);
  }, [favoriteEvents]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.myEvents, myEvents);
  }, [myEvents]);

  const currentUserProfile = useMemo(() => {
    if (!authUser) {
      return null;
    }

    return (
      userProfiles.find((profile) => profile.uid === authUser.uid) || {
        uid: authUser.uid,
        name: authUser.displayName || "",
        surname: "",
        email: authUser.email || "",
        phone: "",
        city: "",
        preferences: emptyPreferences,
      }
    );
  }, [authUser, userProfiles]);

  const loginUser = async ({ email, password }) => {
    if (!email.trim() || !password.trim()) {
      return {
        success: false,
        message: "Please enter email and password.",
      };
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      return {
        success: true,
        message: "Logged in successfully.",
      };
    } catch (error) {
      console.error("Login error:", error);

      return {
        success: false,
        message: "Invalid email or password.",
      };
    }
  };

  const registerUser = async ({
    name,
    email,
    password,
    confirmPassword,
    acceptedTerms,
  }) => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      };
    }

    if (!acceptedTerms) {
      return {
        success: false,
        message: "Please accept the terms and conditions.",
      };
    }

    if (password !== confirmPassword) {
      return {
        success: false,
        message: "Passwords do not match.",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        message: "Password should have at least 6 characters.",
      };
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const firebaseUser = userCredential.user;

      await updateProfile(firebaseUser, {
        displayName: name,
      });

      const newProfile = createProfileFromFirebaseUser(firebaseUser, name);

      setUserProfiles((prevProfiles) => {
        const profileExists = prevProfiles.some(
          (profile) => profile.uid === firebaseUser.uid
        );

        if (profileExists) {
          return prevProfiles.map((profile) =>
            profile.uid === firebaseUser.uid ? newProfile : profile
          );
        }

        return [...prevProfiles, newProfile];
      });

      return {
        success: true,
        message: "Account created successfully.",
      };
    } catch (error) {
      console.error("Register error:", error);

      if (error.code === "auth/email-already-in-use") {
        return {
          success: false,
          message: "User with this email already exists.",
        };
      }

      if (error.code === "auth/invalid-email") {
        return {
          success: false,
          message: "Invalid email address.",
        };
      }

      return {
        success: false,
        message: "Could not create account.",
      };
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);

      return {
        success: true,
        message: "Logged out successfully.",
      };
    } catch (error) {
      console.error("Logout error:", error);

      return {
        success: false,
        message: "Could not log out.",
      };
    }
  };

  const updateCurrentUser = (updatedData) => {
    if (!authUser) {
        return;
    }

    setUserProfiles((prevProfiles) => {
        const existingProfile = prevProfiles.find(
        (profile) => profile.uid === authUser.uid
        );

        const baseProfile =
        existingProfile ||
        createProfileFromFirebaseUser(authUser, authUser.displayName || "");

        const updatedProfile = {
        ...baseProfile,
        ...updatedData,
        uid: authUser.uid,
        email: authUser.email || baseProfile.email,
        preferences:
            updatedData.preferences ||
            baseProfile.preferences ||
            emptyPreferences,
        };

        const profileExists = prevProfiles.some(
        (profile) => profile.uid === authUser.uid
        );

        if (!profileExists) {
        return [...prevProfiles, updatedProfile];
        }

        return prevProfiles.map((profile) =>
        profile.uid === authUser.uid ? updatedProfile : profile
        );
    });
  };

  const updateCurrentUserPreferences = (preferences) => {
    if (!authUser) {
      return;
    }

    updateCurrentUser({
      preferences,
    });
  };

  const createEvent = (eventData) => {
    const randomImage = getRandomEventImage();

    const createdEvent = normalizeEvent({
        ...eventData,
        id: Date.now(),
        image: eventData.image || randomImage,
        tag: eventData.category || "EVENT",
        price: eventData.price ? `$${eventData.price}` : "Free",
        organizer: currentUserProfile
        ? `${currentUserProfile.name} ${currentUserProfile.surname}`.trim()
        : "Meetfy User",
    });

    setEvents((prevEvents) => [createdEvent, ...prevEvents]);
    setMyEvents((prevEvents) => [createdEvent, ...prevEvents]);

    return createdEvent;
  };

  const joinEvent = (event) => {
    const eventToAdd = normalizeEvent(event);

    setMyEvents((prevEvents) => {
      const alreadyJoined = prevEvents.some(
        (item) => item.id === eventToAdd.id
      );

      if (alreadyJoined) {
        return prevEvents;
      }

      return [eventToAdd, ...prevEvents];
    });
  };

  const addToFavorites = (event) => {
    const eventToAdd = normalizeEvent(event);

    setFavoriteEvents((prevEvents) => {
      const alreadyFavorite = prevEvents.some(
        (item) => item.id === eventToAdd.id
      );

      if (alreadyFavorite) {
        return prevEvents;
      }

      return [eventToAdd, ...prevEvents];
    });
  };

  const removeFromFavorites = (eventId) => {
    setFavoriteEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== eventId)
    );
  };

  const removeFromMyEvents = (eventId) => {
    setMyEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
    );
  };

  const resetLocalDemoData = () => {
    setUserProfiles(initialUsers);
    setEvents(initialEvents);
    setFavoriteEvents([]);
    setMyEvents([]);

    removeFromStorage(STORAGE_KEYS.userProfiles);
    removeFromStorage(STORAGE_KEYS.events);
    removeFromStorage(STORAGE_KEYS.favoriteEvents);
    removeFromStorage(STORAGE_KEYS.myEvents);
  };

  const value = useMemo(
    () => ({
      authUser,
      authLoading,
      currentUserProfile,

      userProfiles,
      events,
      favoriteEvents,
      myEvents,

      loginUser,
      registerUser,
      logoutUser,

      updateCurrentUser,
      updateCurrentUserPreferences,

      createEvent,
      joinEvent,
      addToFavorites,
      removeFromFavorites,
      removeFromMyEvents,

      resetLocalDemoData,
    }),
    [
      authUser,
      authLoading,
      currentUserProfile,
      userProfiles,
      events,
      favoriteEvents,
      myEvents,
    ]
  );

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error("useAppData must be used inside AppDataProvider.");
  }

  return context;
}