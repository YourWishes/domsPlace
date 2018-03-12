import React from 'react';

import Page from './../Page';
import BlankPromo from './../sections/BlankPromo';
import BodySection from './../sections/BodySection';
import { connect } from 'react-redux';
import Language from './../../language/Language';

class PrivacyPolicyPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <BlankPromo />
        <BodySection>
          <h1>{Language.get("privacy.title")}</h1>
          {Language.get("privacy.policy")}
        </BodySection>
      </Page>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    code: state.language.code
  }
}

export default connect(mapStateToProps)(PrivacyPolicyPage);
