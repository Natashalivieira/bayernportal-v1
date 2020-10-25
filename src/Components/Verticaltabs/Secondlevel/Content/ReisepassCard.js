import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Reisepass from '../../../../Images/Reisepass.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    height: 379,
  },
});

export default function ReisepassCard() {
  const classes = useStyles();
  
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Reisepass"
          height="180"
          image={Reisepass}
          title="Reisepass"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
          Reisepass
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Der vorläufige Reisepass ist ein amtliches Ausweisdokument für Deutsche, der grundsätzlich zur Einreise in die Bundesrepublik Deutschland bzw. zur Ausreise aus der Bundesrepublik Deutschland benötigt wird. 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Voraussetzungen {bull} Erforderliche Unterlagen {bull} Bearbeitungsdauer {bull} Kosten {bull} Formulare
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Teilen
        </Button>
        <Button size="small" color="primary">
          Weiter lesen
        </Button>
      </CardActions>
    </Card>
  );
}