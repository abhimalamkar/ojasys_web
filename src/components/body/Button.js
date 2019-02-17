import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #003ECB 30%, #0056FC 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    width: 200,
    height: 80,
    padding: '30px',
    boxShadow: '0 3px 5px 2px rgba(0, 83, 246, .3)',
  },
};

function CustomButton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={classNames(classes.root, className)} {...other}>
      {children || 'How We Work'}
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(CustomButton);