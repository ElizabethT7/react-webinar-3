import {memo, useState} from 'react';
import {cn as bem} from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';

function ControlsPagination({onSelect}){

  const onClick = (e) => {
    onSelect(e.target.value);
    console.log(e.target.value)
  }

  const cn = bem('ControlsPagination');

  return (
    <div className={cn()}>
      <button className={cn('item')} onClick={onClick} value="1">1</button>
      <button className={'ControlsPagination-item' + /*(isSelected ?*/ ' ControlsPagination_selected' /*: '')*/ }
            onClick={onClick}
            value="2">
        2
      </button>
      <button className={cn('item')}
       onClick={onClick} value="3">3</button>
      <span className={cn('points')}>...</span>
      <button className={cn('item')} onClick={onClick} value="25">25</button>
    </div>
  )
}

ControlsPagination.propTypes = {
  onSelect: PropTypes.func
};

ControlsPagination.defaultProps = {
  onSelect: () => {}
}

export default memo(ControlsPagination);
