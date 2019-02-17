import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Details from './Details'
import Core_Comp from './Core_Cometencies'
import Client from './Client_Case_Study'
import Achivements from './Achivements'

const styles = {
  
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className='home'>
        <video id="background-video" loop autoPlay className="video">
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className='divide64'></div>
        <Details/>
        <div className='divide64'></div>
        <Core_Comp/>
        <div className='divide64'></div>
        <Client/>
        <div className='divide64'></div>
        <Achivements/>
        <div className='divide64'></div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
