import React, { Fragment } from 'react';
import { 
  Grid, Paper, Typography, 
  List, ListItem, ListItemText 
} from '@material-ui/core';


const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 0,
    marginLeft: 5,
    marginRight: 5,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({ 
  exercises, 
  category, 
  onSelect, 
  exercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left.'
  } 
}) =>
  <Grid container item sm={12}>
    <Grid item sm={4}>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group             
            ? <Fragment key={group}>
                <Typography 
                  key={group}
                  variant="headline"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) =>
                    <ListItem
                      key={id} 
                      button
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText 
                        primary={title}
                      />
                    </ListItem>
                  )}
                </List>
              </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item sm={8}>
      <Paper style={styles.Paper}>
        <Typography
          variant="display1"
        >
          {title}
        </Typography>
        <Typography
          variant="subheading"
          style={{marginTop: 20}}
        >
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
