import React, { useState, useEffect, Suspense, lazy } from 'react';

import Tour, { Navigation, Dot, Controls, Arrow } from '../../index2';
import PropTypes from 'prop-types';
import '../../styles.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Style } from '../../style';

import { homeObjOne } from './Data';
import SearchArea from "../../Components/SearchArea/SearchArea";
import IntroSection from "../../Components/IntroSection/IntroSection";
import ScrollableLinks from "../../Components/ScrollableLinks/ScrollableLinks";
import Footer from "../../Components/Footer/Footer";

function Home() {

  const [isTourOpen, setOpen] = useState(false)
  const [customComps, setCustomComps] = useState(false)
  const disableBody = target => disableBodyScroll(target)
  const enableBody = target => enableBodyScroll(target)
  const accentColor = 'linear-gradient(to right, #1c8f9e, #5cb7b7)'

  useEffect(() => {
    function keyHandling(e) {
      if (e.keyCode === 75) {
        e.preventDefault()
        setOpen(true)
      }

      if (isTourOpen && e.keyCode === 13) {
        e.preventDefault()
        setCustomComps(!customComps)
      }
    }
    window.addEventListener('keyup', keyHandling)
    return () => window.removeEventListener('keyup', keyHandling)
  }, [isTourOpen, customComps])  

  return (
    <>
      <Style />
      <IntroSection openTour={() => setOpen(true)} {...homeObjOne} />
      <Suspense fallback={<React.Fragment />}>
        <Tour
            onAfterOpen={disableBody}
            onBeforeClose={enableBody}
            onRequestClose={() => setOpen(false)}
            steps={tourConfig}
            isOpen={isTourOpen}
            maskClassName="mask"
            className="helper"
            rounded={5}
            accentColor={accentColor}
          />
      </Suspense>
      <SearchArea {...homeObjOne} />
      <ScrollableLinks />
      <Footer />
    </>
  );
}

const tourConfig = [
  {
    selector: '[data-tut="reactour__start"]',
    content:
      "Alright, then let's go! Welcome to the new BayernPortal! We will show you around.",
  },
  {
    selector: '[data-tut="reactour__bot"]',
    content: 'Here you can simply ask anything to Bavaria, your online assistant! She is your quickest way to find information. Just type anything and she will help you - she is extremely intelligent!',
  },
  // {
  //   selector: '[data-tut="reactour__search"]',
  //   content: 'But you can also use our search bar if you prefer!',
  // },
  {
    selector: '[data-tut="reactour__news"]',
    content: 'Here you can read some of the latest and most relevant news in Bavaria!',
  },
  {
    selector: '[data-tut="reactour__links"]',
    content: 'And here you can find the most accessed links in the portal.',
  },
  {
    selector: '[data-tut="reactour__linksbar"]',
    content: 'But feel free to scrool into the categories to see all the information that we have available here!',
  },
]

export default Home;