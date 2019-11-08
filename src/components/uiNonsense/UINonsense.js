import React, {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import FormRow from '@material-ui/core/FormRow';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default () => {
    const classes = useStyles();

    const [widthState, setWidthState] = useState(12);

    const nasaLogo = <img 
    src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' 
    alt='nasa logo'
    style={{width:'200px', height:'100px'}}
    />

    function FormRow() {
        return (
            <React.Fragment>
            <Grid item xs={widthState}>
                <Paper className={classes.paper}>{nasaLogo}</Paper>
            </Grid>
            <Grid item xs={widthState}>
                <Paper className={classes.paper}>{nasaLogo}</Paper>
            </Grid>
            <Grid item xs={widthState}>
                <Paper className={classes.paper}>{nasaLogo}</Paper>
            </Grid>
            </React.Fragment>
        );
    }

  return (
      <div style={{ width:'80%', height:'800px', margin:'0 auto'}}>
        <Button varient='contained' color='primary' onClick={() => setWidthState(3)}>Narrow</Button>
        <Button varient='contained' color='primary' onClick={() => setWidthState(6)}>Medium</Button>
        <Button varient='contained' color='primary' onClick={() => setWidthState(12)}>Wide</Button>
        <Grid container spacing={3}>
            <Grid container item xs={12} spacing={3}>
                <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <FormRow />
            </Grid>
        </Grid>
      </div>
  );
}