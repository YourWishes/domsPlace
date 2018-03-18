/*
 *  Video Title
 *    Video title.
 *
 *  Dependencies:
 *    styles/components/_video-title.scss
 *
 *  Version:
 *    1.0.0 - 2018/03/18
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import Language from './../../language/Language';

const VideoTitle = function(props) {
  let children = ([
    <video autoPlay className="o-video-title__video" loop key="video">
      <source src={ props.mp4 } type="video/mp4" />
    </video>,
    <h2 className="o-video-title__heading" key="title">
      { Language.get(props.title) }
    </h2>
  ]);

  let clazz = "o-video-title";

  if(props.to) {
    return (
      <NavLink to={props.to} exact activeClassName="active" className={clazz}>
        {children}
      </NavLink>
    );
  }

  return (
    <div className={clazz}>
      {children}
    </div>
  );
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}
export default connect(mapStateToProps)(VideoTitle);
