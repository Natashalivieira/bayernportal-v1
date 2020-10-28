import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dokumente from '../Verticaltabs/Dokumente.js';
import Ehrenamt from '../Verticaltabs/Ehrenamt.js';
import Erwerbstatigkeit from '../Verticaltabs/Erwerbstatigkeit.js';
import FamilieundKinder from '../Verticaltabs/FamilieundKinder.js';
import Freizeit from '../Verticaltabs/Freizeit.js';
import Gesundheit from '../Verticaltabs/Gesundheit.js';
import KatastrophenHilfe from '../Verticaltabs/KatastrophenHilfe.js';
import SchuleundAusbildung from '../Verticaltabs/SchuleundAusbildung.js';
import Umwelt from '../Verticaltabs/Umwelt.js';
import Wohnen from '../Verticaltabs/Wohnen.js';

function ScrollableLinks(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="ScrollableLinks"
      hidden={value !== index}
      id={`scrollable-auto-ScrollableLinks-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

ScrollableLinks.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-ScrollableLinks-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar data-tut="reactour__linksbar" position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="disabled"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Dokumente" {...a11yProps(0)} />
          <Tab label="Ehrenamt" {...a11yProps(1)} />
          <Tab label="Erwerbstätigkeit" {...a11yProps(2)} />
          <Tab label="Familie und Kinder" {...a11yProps(3)} />
          <Tab label="Freizeit" {...a11yProps(4)} />
          <Tab label="Gesundheit" {...a11yProps(5)} />
          <Tab label="Katastrophen-Hilfe" {...a11yProps(6)} />
          <Tab label="Schule und Ausbildung" {...a11yProps(7)} />
          <Tab label="Umwelt" {...a11yProps(8)} />
          <Tab label="Wohnen" {...a11yProps(9)} />

        </Tabs>
      </AppBar>
      <ScrollableLinks value={value} index={0}>
        <Dokumente />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={1}>
        <Ehrenamt />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={2}>
        <Erwerbstatigkeit />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={3}>
        <FamilieundKinder />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={4}>
        <Freizeit />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={5}>
        <Gesundheit />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={6}>
        <KatastrophenHilfe />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={7}>
        <SchuleundAusbildung />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={8}>
        <Umwelt />
      </ScrollableLinks>
      <ScrollableLinks value={value} index={9}>
        <Wohnen />
      </ScrollableLinks>
    </div>
  );
}