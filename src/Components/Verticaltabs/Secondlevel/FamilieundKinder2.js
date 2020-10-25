import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 424,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 250,

  },
}));

export default function FamilieundKinder() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Erbschaft und Testament" {...a11yProps(0)} />
        <Tab label="Familie und Partnershaften" {...a11yProps(1)} />
        <Tab label="Geburt" {...a11yProps(2)} />
        <Tab label="Heirat" {...a11yProps(3)} />
        <Tab label="Jugend" {...a11yProps(4)} />
        <Tab label="Kinderbetreuung" {...a11yProps(5)} />
        <Tab label="Sterbefall" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      Erbschaft und Testament
      </TabPanel>
      <TabPanel value={value} index={1}>
      Familie und Partnershaften
      </TabPanel>
      <TabPanel value={value} index={2}>
      Geburt
      </TabPanel>
      <TabPanel value={value} index={3}>
      Heirat
      </TabPanel>
      <TabPanel value={value} index={4}>
      Jugend
      </TabPanel>
      <TabPanel value={value} index={5}>
      Kinderbetreuung
      </TabPanel>
      <TabPanel value={value} index={6}>
      Sterbefall
      </TabPanel>
    </div>
  );
}
