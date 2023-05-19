import React from "react";
import PropTypes, { number } from 'prop-types';
import Controls from "../controls";
import {plural, countTotalPrice} from "../../utils";
import './style.css';
import Modal from "../modal";

function Cart({count, order, onModalOpen}){
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
  count: number,
  order: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
  })).isRequired,
  onModalOpen: PropTypes.func,
};

Cart.defaultProps = {
  onModalOpen: () => {},
  count: 0,
  order: [],
}

export default React.memo(Cart);
