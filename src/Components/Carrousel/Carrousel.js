import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Reisewarnung: COVID-19-Fallbericht',
    imgPath:
      'https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
  },
  {
    label: 'Die Corona Warning App der Bundesregierung',
    imgPath:
      'https://images.unsplash.com/photo-1586292163072-c86b207110a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    label: 'COVID-19-Updates: Anleitung und Support',
    imgPath:
      'https://images.unsplash.com/photo-1586864387564-ea6bc7ceb97c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 2500,
    maxHeight: 450,
    flexGrow: 1,
    ['@media (max-width:680px)']: {
      height: '50%',
      width: '100%',
      display: 'block',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 58,
    paddingLeft: theme.spacing(2),
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  img: {
    height: 300,
    maxWidth: 2500,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    ['@media (max-width:680px)']: {
      height: '50%',
      width: '100%',
      display: 'block',
    },
  },
}));

export default function Carrousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div  data-tut="reactour__news" className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography gutterBottom variant="h6" component="h3">{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 1 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        steps={3}
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Weiter
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Zurück
          </Button>
        }
      />
    </div>
  );
}

