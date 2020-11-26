import React, { FC } from 'react';
import styles from './FilteredButtons.module.scss';

interface Props {
  filteredCurrencies: {
    title: string;
    selected: boolean;
    id: number;
  }[];
  onClickHandler: (id: number) => void;
}
const FilteredButtons: FC<Props> = ({ onClickHandler, filteredCurrencies }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        {filteredCurrencies?.map(({ title, id }, i) => {
          return (
            <button className={styles.button} key={`${i}`}>
              <span className={styles.buttonText}>{title}</span>
              <div
                onClick={() => onClickHandler(id)}
                className={styles.checkbox}
              >
                <span className={styles.checkmark}>x</span>
              </div>
            </button>
          );
        })}
      </div>
      </div>

  );
};

export default FilteredButtons;
