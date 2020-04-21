import React from "react";
import Nav from "./components/common/Nav";
import MetronomeApp from "./components/metronome/MetronomeApp";
import WelcomeContent from "./components/profile/WelcomeContent";
import RoadmapContent from "./components/profile/RoadmapContent";
import Footer from "./components/common/Footer";
import DictionaryView from "./components/esu-kun/DictionaryView";

function App() {
  return (
    <div>
      {/* <Nav />
      <WelcomeContent />
      <RoadmapContent />
      <MetronomeApp />
      <Footer /> */}
      <DictionaryView />
    </div>
  );
}

export default App;
