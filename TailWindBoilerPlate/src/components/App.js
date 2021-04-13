import React from "react";

import Header from "./Header";
import SellerCard from "./SellerCard";
import InformationBar from "./InformationBar";
import DescriptionTabs from "./DescriptionTabs";
import Resources from "./Resources";
import NewsLetter from "./NewsLetter";

function App() {
  return (
    <div className=" ">
      <div className="relative">
        <Header />
        <SellerCard />
      </div>
      <InformationBar />
      <DescriptionTabs />
      <Resources />
      <NewsLetter />
    </div>
  );
}

export default App;
