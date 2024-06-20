import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { fetchVenue } from "../features/venue/venueSlice";
import { fetchMenu } from "../features/menu/menuSlice";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import MenuItem from "../components/MenuItem";
import SectionFilter from "../components/SectionFilter";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const venue = useSelector((state: RootState) => state.venue.venue);
  const venueStatus = useSelector((state: RootState) => state.venue.status);
  const venueError = useSelector((state: RootState) => state.venue.error);
  const menu = useSelector((state: RootState) => state.menu.items);
  const menuStatus = useSelector((state: RootState) => state.menu.status);
  const menuError = useSelector((state: RootState) => state.menu.error);

  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (venueStatus === "idle") {
      dispatch(fetchVenue());
    }
    if (menuStatus === "idle") {
      dispatch(fetchMenu());
    }
  }, [venueStatus, menuStatus, dispatch]);

  useEffect(() => {
    console.log("Menu Data:", menu);
  }, [menu]);

  if (venueStatus === "loading" || menuStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (venueStatus === "failed") {
    return <div>{venueError}</div>;
  }

  if (menuStatus === "failed") {
    return <div>{menuError}</div>;
  }

  const sections = menu.map((section) => ({
    id: section.id,
    name: section.name,
    image: section.images && section.images[0] ? section.images[0].image : "",
  }));

  const filteredSections = selectedSectionId
    ? menu.filter((section) => section.id === selectedSectionId)
    : menu;

  const filteredItems = filteredSections.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="w-full">
      {venue && <NavBar />}
      <header
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${venue?.webSettings.bannerImage})` }}
      ></header>

      <div className="container mx-auto">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <main className="container mx-auto flex flex-col md:flex-row space-x-4 bg-bgPrimary px-4 md:px-10 py-9">
        <div className="flex-grow bg-white px-6 shadow-md">
          <SectionFilter
            sections={sections}
            selectedSectionId={selectedSectionId}
            onSelectSection={setSelectedSectionId}
            primaryColour={venue?.webSettings.primaryColour || "#000"}
          />
          {filteredItems.length > 0 ? (
            filteredItems.map((section) => (
              <div key={section.id} className="mb-6 mt-10">
                <h2
                  className="text-2xl font-medium mb-2"
                  style={{ color: venue?.webSettings.primaryColour }}
                >
                  {section.name}
                </h2>
                {section.items && section.items.length > 0 ? (
                  section.items.map((item) => (
                    <MenuItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description as any}
                      price={item.price}
                      primaryColour={venue?.webSettings.primaryColour || "#000"}
                      imageUrl={
                        item.images && item.images[0]
                          ? item.images[0].image
                          : ""
                      }
                      modifiers={item.modifiers}
                    />
                  ))
                ) : (
                  <p>No items available in this section.</p>
                )}
              </div>
            ))
          ) : (
            <p>No menu available.</p>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <Cart />
        </div>
      </main>
      <footer
        className="text-center p-4"
        style={{
          backgroundColor: venue?.webSettings.primaryColour,
        }}
      >
        <p className="text-white">© 2024 BURGERS RESTAURANT</p>
      </footer>
    </div>
  );
};

export default Home;
