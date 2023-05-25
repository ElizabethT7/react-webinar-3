import {memo, useCallback, useEffect} from 'react';
//import ItemArticle from "../../../components/item-article";
import PageLayout from "../../../components/page-layout";
import Head from "../../../components/head";
import BasketTool from "../../../components/basket-tool";
import useStore from "../../../store/use-store";
import useSelector from "../../../store/use-selector";

function Article() {

  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  return (
    <PageLayout>
      <Head title='Название'/>
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
                  sum={select.sum}/>
    </PageLayout>
  );
}

export default memo(Article);
