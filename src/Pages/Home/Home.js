import React from 'react';
import { homeObjOne } from './Data';
import SearchArea from "../../Components/SearchArea/SearchArea";
import IntroSection from "../../Components/IntroSection/IntroSection";
import ScrollableLinks from "../../Components/ScrollableLinks/ScrollableLinks";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <IntroSection {...homeObjOne} />
      <SearchArea {...homeObjOne} />
      <ScrollableLinks />
      <Footer />
    </>
  );
}

export default Home;