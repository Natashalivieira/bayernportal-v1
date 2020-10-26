import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TopLine,
  Heading,
  ImgWrapper,

} from './IntroSection.elements';

export default function IntroSection({
  openTour,
  primary,
  lightTopLine,
  lightText,
}) {

  const [open, setOpen] = React.useState(true);
  
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>

            <InfoColumn>
                <Heading lightText={lightText}>Sind Sie bereit für die digitale Transformation?</Heading>
                <TopLine lightTopLine={lightTopLine}>Das Bayerische Staatsministerium für Digitales hat ein effizientes, sicheres und transparentes Portal aufgebaut, in dem Sie leicht Informationen über öffentliche Dienste finden können. </TopLine>
                <TopLine lightTopLine={lightTopLine}>Das Digitalministerium steht für die Entschlossenheit, den weltweiten digitalen Entwicklungen nicht nur zu folgen, sondern sie souverän mitzugestalten.</TopLine>
                <Link>
                  <Button data-tut="reactour__start" onClick={openTour} big fontBig primary={primary}>
                    Ich bin bereit!
                  </Button>
                </Link>
            </InfoColumn>
          </InfoRow>
        </Container>
        <ImgWrapper data-tut="reactour__bot"/>
      </InfoSec>
    </>
  );
}

IntroSection.propTypes = {
  openTour: PropTypes.func.isRequired,
}