import {memo, useState} from 'react';
import {cn as bem} from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';

function ControlsPagination({onSelect, currentPage}){

  const onClick = (e) => {
    onSelect(e.target.value);
    console.log(e.target.value)
  }

  const cn = bem('ControlsPagination');

  return (
    <div className={cn()}>
      <button className={currentPage == '1' ? cn('item', {selected: true}) : cn('item')}
              onClick={onClick}
              value="1">1</button>
      <button className={currentPage == '2' ? cn('item', {selected: true}) : cn('item')}
              onClick={onClick}
              value="2">2</button>
      <button className={currentPage == '3' ? cn('item', {selected: true}) : cn('item')}
              onClick={onClick}
              value="3">3</button>
      <span className={cn('points')}>...</span>
      <button className={currentPage == '100' ? cn('item', {selected: true}) : cn('item')}
              onClick={onClick}
              value="100">100</button>
    </div>
  )
}

ControlsPagination.propTypes = {
  currentPage: PropTypes.number,
  onSelect: PropTypes.func,
};

ControlsPagination.defaultProps = {
  onSelect: () => {}
}

export default memo(ControlsPagination);
