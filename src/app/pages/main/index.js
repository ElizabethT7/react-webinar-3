import {memo, useCallback, useEffect, useState} from 'react';
import Item from "../../../components/item";
import PageLayout from "../../../components/page-layout";
import Head from "../../../components/head";
import BasketTool from "../../../components/basket-tool";
import List from "../../../components/list";
import useStore from "../../../store/use-store";
import useSelector from "../../../store/use-selector";
import ControlsPagination from '../../../components/controls-pagination';

function Main() {

  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    currentPage: +state.catalog.currentPage,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    //получение номера страницы
    getPage: useCallback((page) => store.actions.catalog.getPage(page)),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  };

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <BasketTool onOpen={callbacks.openModalBasket}
                  amount={select.amount}
                  sum={select.sum}/>
      <List list={select.list} renderItem={renders.item}/>
      <ControlsPagination onSelect={callbacks.getPage}
                          currentPage={select.currentPage}/>
    </PageLayout>
  );
}

export default memo(Main);
