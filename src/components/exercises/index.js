import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 0
  }
}

export default props =>
  <Grid container item sm>
    <Grid item sm>
      <LeftPane style={styles} />
    </Grid>
    <Grid item sm>
      <RightPane style={styles} />
    </Grid>
  </Grid>
