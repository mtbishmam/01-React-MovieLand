import React, { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=4a78df0b";

const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  };

  useEffect(() => {
    searchMovie("Naruto");
  }, []);

  return <div>App</div>;
};

export default App;
