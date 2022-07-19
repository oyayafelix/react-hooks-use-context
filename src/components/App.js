import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import {ThemeProvider} from "../context/ThemeProvider"
function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark");
  return (
    <main className={theme}>
      <ThemeProvider>
      <Header   user={user} setUser={setUser} />
      <Profile  user={user} />
      </ThemeProvider>
    </main>
  );
}

export default App;