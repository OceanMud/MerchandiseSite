import React from "react";

import Header from "./Header";
import SellerCard from "./SellerCard";
import InformationBar from "./InformationBar";
import DescriptionTabs from "./DescriptionTabs";

function App() {
  return (
    <div className="">
      <div className="relative">
        <Header />
        <SellerCard />
      </div>
      <InformationBar />
      <DescriptionTabs />
    </div>
  );
}

export default App;
