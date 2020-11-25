import React, { useEffect, useState } from 'react';
import { CURRENCIES } from './assets/currencies';
import Buttons from './components/buttons/Buttons';
import FilteredButtons from './components/buttons/FilteredButtons';
import Section from './components/section/Section';

type CurrencieType = {
  title: string;
  selected: boolean;
  id: number;
};

const App = () => {
  const [currencies, setCurrencies] = useState<CurrencieType[]>();

  useEffect(() => {
    setCurrencies(CURRENCIES);
  }, []);

  const filteredCurrencies = currencies?.filter((curr) => {
    return curr.selected;
  });
  const selectCurrencyHandler = (id: number) => {
    const newCurrencies = [...currencies!];
    newCurrencies![id].selected = !newCurrencies![id].selected;
    setCurrencies(newCurrencies);
  };

  return (
    <Section>
      <FilteredButtons
        onClickHandler={selectCurrencyHandler}
        filteredCurrencies={filteredCurrencies!}
      />
      <Buttons
        onClickHandler={selectCurrencyHandler}
        currencies={currencies!}
      />
    </Section>
  );
};
export default App;
