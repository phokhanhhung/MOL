import React from 'react';
import './KeyChoice.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function KeyChoice({keyword}) {
  return (
    <div className="key">
      <p style={{color: "#000"}}>{keyword}Animal</p>
      <FontAwesomeIcon icon={solid('xmark')} />
    </div>
  )
}

export default KeyChoice