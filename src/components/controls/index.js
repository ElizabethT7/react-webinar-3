import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls(){
  return (
    <div className='Controls'>
      <button>Добавить</button>
    </div>
  )
}

export default React.memo(Controls);
