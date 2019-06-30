import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 70,
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Breadcrumbs aria-label="Breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Wireless
          </Link>
          <Typography color="textPrimary">Apple Air Pods</Typography>
        </Breadcrumbs>
      </Paper>
      <br />
    </div>
  );
}