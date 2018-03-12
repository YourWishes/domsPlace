/*
 *  Page
 *    Simple Page wrapper/container.
 *
 *  Dependencies:
 *    styles/components/_page.scss
 *
 *  Version:
 *    1.0.0 - 2018/02/24
 */

import React from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clazz = "c-page";
    if(this.props.className) clazz += " " + this.props.className;
    
    return (
      <main className={clazz}>
        {this.props.children}
      </main>
    )
  }
}

export default Page;
