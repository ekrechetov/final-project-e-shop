import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 40,
  },
  fs: {
    fontSize: 14,
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

  function SimpleBreadcrumbs(props) {
  const classes = useStyles();
  const {data} = props
  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Breadcrumbs aria-label="Breadcrumb">
          <Link className={classes.fs} color="inherit" href="/">
            Главная
          </Link>
          <Link className={classes.fs} color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            {data.category}
          </Link>
          <Typography className={classes.fs} color="textPrimary">{data.title}</Typography>
        </Breadcrumbs>
      </Paper>
      <br />
    </div>
  );
}

const mapStoreToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStoreToProps)(SimpleBreadcrumbs)