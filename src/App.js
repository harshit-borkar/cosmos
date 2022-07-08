import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Ways } from "./components/Ways";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Ways />
        <Footer />
      </div>
    </div>
  );
};

export default App;
