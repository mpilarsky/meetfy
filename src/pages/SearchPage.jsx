import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { useAppData } from "../context/AppDataContext";

import EventDetailsModal from "../components/EventDetailsModal";
import SearchEventCard from "../components/EventCards/SearchEventCard";

import "./SearchPage.css";

const filterOptions = {
  category: ["Any", "Music", "Culture", "Food", "Art", "Sport", "Networking", "Gaming", "Education"],
  price: ["Any", "Free", "Paid", "Premium"],
  date: ["Any", "Today", "Weekend", "This Month"],
  location: ["Any", "Downtown", "Brooklyn", "Manhattan", "East Village", "Chelsea", "Soho"],
};

function getNumericPrice(price) {
  if (!price || price === "Free") {
    return 0;
  }

  const cleanedPrice = String(price).replace("$", "").trim();
  const numericPrice = Number(cleanedPrice);

  return Number.isNaN(numericPrice) ? 0 : numericPrice;
}

function SearchPage() {
  const { events, addToFavorites } = useAppData();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [openDropdown, setOpenDropdown] = useState(null);

  const [filters, setFilters] = useState({
    category: "Any",
    price: "Any",
    date: "Any",
    location: "Any",
  });

  const query = searchParams.get("q") || "";

  const toggleDropdown = (filterName) => {
    setOpenDropdown(openDropdown === filterName ? null : filterName);
  };

  const handleSelectFilter = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setOpenDropdown(null);
  };

  const handleResetSearch = () => {
    setFilters({
      category: "Any",
      price: "Any",
      date: "Any",
      location: "Any",
    });
    setOpenDropdown(null);
  };

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return events.filter((event) => {
      const searchableText = [
        event.title,
        event.category,
        event.tag,
        event.location,
        event.description,
        event.text,
        event.organizer,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);

      const matchesCategory =
        filters.category === "Any" ||
        event.category === filters.category ||
        event.tag === filters.category ||
        String(event.category).toLowerCase() === filters.category.toLowerCase() ||
        String(event.tag).toLowerCase() === filters.category.toLowerCase();

      const numericPrice = getNumericPrice(event.price);

      const matchesPrice =
        filters.price === "Any" ||
        (filters.price === "Free" && numericPrice === 0) ||
        (filters.price === "Paid" && numericPrice > 0) ||
        (filters.price === "Premium" && numericPrice >= 80);

      const eventDateText = String(event.date || "").toLowerCase();

      const matchesDate =
        filters.date === "Any" ||
        (filters.date === "Today" &&
          (eventDateText.includes("today") || eventDateText.includes("tonight"))) ||
        (filters.date === "Weekend" &&
          (eventDateText.includes("fri") || eventDateText.includes("sat") || eventDateText.includes("sun"))) ||
        (filters.date === "This Month" &&
          (eventDateText.includes("oct") || eventDateText.includes("nov") || eventDateText.includes("dec")));

      const eventLocation = String(event.location || "").toLowerCase();

      const matchesLocation =
        filters.location === "Any" || eventLocation.includes(filters.location.toLowerCase());

      return matchesQuery && matchesCategory && matchesPrice && matchesDate && matchesLocation;
    });
  }, [events, query, filters]);

  const activeFiltersText = [
    query ? `Search: ${query}` : null,
    filters.category !== "Any" ? `Category: ${filters.category}` : null,
    filters.price !== "Any" ? `Price: ${filters.price}` : null,
    filters.date !== "Any" ? `Date: ${filters.date}` : null,
    filters.location !== "Any" ? `Location: ${filters.location}` : null,
  ]
    .filter(Boolean)
    .join(" | ");

  const iconStyle = { marginLeft: "4px", verticalAlign: "middle" };

  return (
    <>
      <section className="search-title">
        <h1>Search Results</h1>

        <p>
          {query ? (
            <>
              Showing results for <strong>"{query}"</strong>
            </>
          ) : (
            <>Showing all available experiences</>
          )}
        </p>
      </section>

      <section className="search-filters">
        <div className="filter-buttons">
          {Object.entries(filterOptions).map(([filterName, options]) => (
            <div className="filter-wrapper" key={filterName}>
              <button type="button" onClick={() => toggleDropdown(filterName)}>
                {filterName.charAt(0).toUpperCase() + filterName.slice(1)}: {filters[filterName]}
                <ChevronDown size={16} style={iconStyle} />
              </button>

              {openDropdown === filterName && (
                <ul className="filter-dropdown-list">
                  {options.map((option) => (
                    <li
                      key={option}
                      tabIndex={0} // <--- TO POZWALA NA WEJŚCIE KLAWISZEM TAB
                      className={filters[filterName] === option ? "active" : ""}
                      onClick={() => handleSelectFilter(filterName, option)}
                      onKeyDown={(e) => {
                        // <--- TO POZWALA WYBRAĆ OPCJĘ KLAWISZEM ENTER LUB SPACJĄ
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault(); // Blokuje przewijanie strony przy spacji
                          handleSelectFilter(filterName, option);
                        }
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="active-filter">
          <span>Active: {activeFiltersText || "All Events"}</span>

          <button type="button" onClick={handleResetSearch}>
            Reset All
          </button>
        </div>
      </section>

      {filteredEvents.length > 0 ? (
        <section className="search-results-grid">
          {filteredEvents.map((event) => (
            <SearchEventCard
              key={event.id || event.title}
              image={event.image}
              tag={event.tag || event.category || "EVENT"}
              title={event.title}
              price={event.price}
              date={event.date}
              location={event.location}
              description={event.description || event.text}
              onViewDetails={() =>
                setSelectedEvent({
                  ...event,
                  description: event.description || event.text,
                })
              }
              onToggleFavorite={() => addToFavorites(event)}
            />
          ))}
        </section>
      ) : (
        <section className="no-events-box">
          <div className="no-events-icon">⌕</div>

          <h2>No events found</h2>

          <p>
            We couldn't find any events matching your search
            {query ? ` for "${query}"` : ""}. Try broadening your search or
            resetting your preferences.
          </p>

          <button type="button" onClick={handleResetSearch}>
            Clear filters
          </button>
        </section>
      )}

      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}

export default SearchPage;