import React from 'react';
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar"; // Import Navbar component as default


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
}

export default App;
