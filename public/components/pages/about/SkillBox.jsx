import React from 'react';

import Language from './../../../language/Language';

const SkillBox = function(props) {
  return (
    <div className={"o-skill-box o-skill-box--" + props.language}>
      <h2 className="o-skill-box__heading">
        {Language.get("about."+props.language+".name")}
      </h2>
      <p className="o-skill-box__description">
        {Language.get("about."+props.language+".description")}
      </p>
    </div>
  )
}

module.exports = SkillBox;
