import React from 'react';
import PropTypes from 'prop-types';
import Controls from '../controls';
import {plural, countTotalPrice} from '../../utils';
import './style.css';
function Cart({order, onModalOpen}){
  const count = order.length;

  return ( 
    <div className='Cart'>
      <div className='Cart-content'>
        В корзине:
        {count ?
        <b className='Cart-text'>
          {count} {plural(count, {one: 'товар', few: 'товара', many: 'товаров'})} / {countTotalPrice(order)} ₽
        </b>
        : 
        <b className='Cart-text'>пусто</b>
        }
        </div>
      <Controls onClickOpen={onModalOpen}/>
    </div>
  )
}

Cart.propTypes = {
  order: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
  })).isRequired,
};

Cart.defaultProps = {
  onModalOpen: () => {},
  order: [],
}

export default React.memo(Cart);
