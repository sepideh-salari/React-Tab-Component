import React, { useEffect, useState } from "react";
import TabButtons from "./TabButtons";
import TabContent from "./TabContent";
import "./App.css";
const App = () => {
  const savedTab = parseInt(localStorage.getItem("activeTab")) || 0;
  const [activeTab, setActiveTab] = useState(savedTab);
  const tabData = [
    { label: "Home", content: "Welcome to the Home page!" },
    { label: "Profile", content: "This is your Profile page." },
    { label: "Settings", content: "Here you can change your Settings." },
    { label: "About", content: "Learn more About us here." },
  ];
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  return (
    <div className="main__container">
      <h1>Tab Component with React</h1>
      <TabButtons
        tabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent tabData={tabData} activeTab={activeTab} />
    </div>
  );
};
export default App;
