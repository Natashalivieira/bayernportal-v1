import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Button2 from '@material-ui/core/Button';
import Carrousel from '../Carrousel/Carrousel';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DescriptionIcon from '@material-ui/icons/Description';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HealingIcon from '@material-ui/icons/Healing';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  InfoColumn2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './IntroSection.elements';

const useStyles = makeStyles((theme) => ({

  header: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    paddingLeft: theme.spacing(2),
    backgroundColor: '#3f51b5',
    color: 'white',
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    color: '#3f51b5',
  },

  root: {
    width: '100%',
    maxWidth: 630,
    maxheight: 500,
    // backgroundColor: '#3f51b5',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  search: {
    alignItems: 'left',
    position: 'left',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      // backgroundColor: fade(theme.palette.common.white, 0.25),
    backgroundColor: 'white',
    },
    marginRight: theme.spacing(1),
    // marginLeft: 0,
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      // width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0,1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1,1,1,0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '80%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
  toolbar: {
    minHeight: 8,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
}))

export default function IntroSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonAction,
  img,
  alt,
  imgStart,
  start
}) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  
  const preventDefault = (event) => event.preventDefault();
  const bull = <span className={classes.bullet}>•</span>;


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
                  <Button big fontBig primary={primary}>
                    Ich bin bereit!
                  </Button>
                </Link>
            </InfoColumn>

             {/* <InfoColumn2> */}

            {/* <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="p" id="nested-list-subheader">
                  Most accessed services
                </ListSubheader>
              }
              className={classes.root}
            > */}
            
            {/*<Toolbar className={classes.toolbar}>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
            </Toolbar> */}
            {/* <Toolbar className={classes.toolbar}>
            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
            </Toolbar> */}
            {/* <Toolbar className={classes.toolbar}>
              <div className={classes.search}>
                <InputBase
                placeholder="Suchbegriff eingeben"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.search}>
                <InputBase
                placeholder="Ort eingeben"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Button>Suchen</Button>
            </Toolbar> */}
                {/* <Link to={buttonAction}>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link> */}

            {/* </InfoColumn2> */}
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

