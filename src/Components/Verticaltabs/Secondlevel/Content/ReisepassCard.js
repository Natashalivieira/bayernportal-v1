import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Reisepass from '../../../../Images/Reisepass.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const bull = <span className={classes.bullet}>•</span>;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Reisepass"
        subheader="Beantragung • Verlängerung"
      />
      <CardMedia
        className={classes.media}
        image={Reisepass}
        title="Reisepass"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Der vorläufige Reisepass ist ein amtliches Ausweisdokument für Deutsche, der grundsätzlich zur Einreise in die Bundesrepublik Deutschland bzw. zur Ausreise aus der Bundesrepublik Deutschland benötigt wird. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Beschreibung</Typography>
          <Typography paragraph>
          Voraussetzungen {bull} Erforderliche Unterlagen {bull} Bearbeitungsdauer {bull} Kosten {bull} Formulare
          </Typography>
          <Typography paragraph>
          Voraussetzungen {bull} Erforderliche Unterlagen {bull} Bearbeitungsdauer {bull} Kosten {bull} Formulare
          </Typography>
          <Typography paragraph>
          Voraussetzungen {bull} Erforderliche Unterlagen {bull} Bearbeitungsdauer {bull} Kosten {bull} Formulare
          </Typography>
          <Typography>
          Voraussetzungen {bull} Erforderliche Unterlagen {bull} Bearbeitungsdauer {bull} Kosten {bull} Formulare
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
