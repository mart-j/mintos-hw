import React, { FC } from 'react';
import styles from './Buttons.module.scss';

interface Props {
  currencies: {
    title: string;
    selected: boolean;
    id: number;
  }[];
  onClickHandler: (id: number) => void;
}
const Buttons: FC<Props> = ({ onClickHandler, currencies }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        {currencies?.map(({ title, selected, id }, i) => {
          return (
            <button
              onClick={() => onClickHandler(id)}
              key={`${i}`}
              className={selected ? styles.activeButton : styles.button}
            >
              <div className={styles.checkbox}>
                <div className={styles.checkmark}>
                  {`${selected ? 'x' : ''}`}
                </div>
              </div>
              <span className={styles.buttonText}>{title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Buttons;
