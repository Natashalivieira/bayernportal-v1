import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import firebase from '../../Firebase';
import Wohnen2 from './Secondlevel/Wohnen2';

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
    height: 524,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 250,

  },
}));

export default function Wohnen() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [db] = React.useState(firebase.firestore().collection('Procedure'))
  // const [procedure, setProcedure] = React.useState({});

  // useEffect( ()=> {
  //   db.onSnapshot((docSnapshot) => {
  //     docSnapshot.forEach((doc) => {
  //       setProcedure(doc.data())
  //     }
  //     )
  //   })
  // })

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
        {/* <Tab label={procedure.subCategory} {...a11yProps(0)} /> */}
        <Tab label="Bauen" {...a11yProps(0)} />
        <Tab label="Umzug" {...a11yProps(1)} />
        <Tab label="Wohnen" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      Demnächst
      {/* Title: {procedure.title} <br/>
      Short Description: {procedure.shortdesc} <br/>
      Fees: {procedure.fees} <br/>
      Deadlines: {procedure.deadlines} */}
      </TabPanel>
      <TabPanel value={value} index={1}>
      Demnächst
      </TabPanel>
      <TabPanel value={value} index={1}>
      Demnächst
      </TabPanel>
    </div>
  );
}
