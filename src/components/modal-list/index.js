import React from 'react';
import PropTypes from 'prop-types';
import List from '../list';
import { countTotalPrice, numberFormat } from '../../utils';
import './style.css';

function ModalList({order, onDelete}){
  const totalPrice = countTotalPrice(order);
  return ( 
    <div className='ModalList'>
      <List list={order}
            type='cart'
            onClickItem={onDelete}/>
        <div className='ModalList-result-content'>
          <b className='ModalList-result'>Итого: </b>
          { totalPrice &&
            <b className='ModalList-result'>{numberFormat(totalPrice)}</b>
          }
        </div>
  </div>
  )
}

ModalList.propTypes = {
  onDelete: PropTypes.func,
};

ModalList.defaultProps = {
  onDelete: () => {},
}

export default React.memo(ModalList);
