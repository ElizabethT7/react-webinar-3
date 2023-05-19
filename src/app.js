import React, {useCallback, useState} from 'react';
import List from './components/list';
import Cart from './components/cart';
import Head from './components/head';
import { countTotalPrice } from './utils';
import PageLayout from './components/page-layout';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const [order, setOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(order)

  const list = store.getState().list;

  const onAddItemToCart = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.code === item.code);
    if(itemIndex < 0) {
      const newItem = {
        ...item,
        count: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, code) => {
        if(code === itemIndex) {
          return {
            ...orderItem,
            count: orderItem.count + 1

          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder);
    }
  }

  const callbacks = {
    onModalOpen: useCallback(() => {
      setIsOpen(!isOpen);
      console.log(isOpen)
    })
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Cart count={order.length}
            onModalOpen={callbacks.onModalOpen}
            order={order}/>
      <List list={list}
            onAddItemToCart={onAddItemToCart}/>
    </PageLayout>
  );
}

export default App;
