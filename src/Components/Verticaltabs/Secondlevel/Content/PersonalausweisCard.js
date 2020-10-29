import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Personalausweis from '../../../../Images/Personalausweis.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    height: 379,
  },
});

export default function PersonalausweisCard() {
  const classes = useStyles();
  
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Personalausweis"
          height="180"
          image={Personalausweis}
          title="Personalausweis"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            Personalausweis {bull} Beantragung {bull} Verlängerung
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Deutsche können dieses amtliche Ausweisdokument bei ihrer zuständigen Gemeinde beantragen. Zum 01.11.2010 wurde der neue elektronische Personalausweis im Scheckkartenformat eingeführt. 
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
