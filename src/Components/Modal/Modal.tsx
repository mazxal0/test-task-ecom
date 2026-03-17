import { useEffect } from 'react';
import styles from './Modal.module.css';
import { observer } from 'mobx-react-lite';
import { itemStore } from '../../stores';
import { GetAllItems } from '../../lib';

function Modal() {
  const items = GetAllItems();

  const currentItem = items.find(
    (item) => item.id === itemStore.current_item_id
  );

  useEffect(() => {
    if (!itemStore.is_open_modal) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        itemStore.exit_modal();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [itemStore.is_open_modal]);

  if (!itemStore.is_open_modal || !currentItem) return null;

  return (
    <div
      className={styles.overlay}
      onClick={() => itemStore.exit_modal()}
    >
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={() => itemStore.exit_modal()}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={currentItem.image}
            alt={currentItem.title}
          />
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{currentItem.title}</h2>
          <p className={styles.category}>{currentItem.category}</p>
          <p className={styles.description}>{currentItem.description}</p>
          <p className={styles.price}>{currentItem.price} ₽</p>

          <button className={styles.buyButton}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}

export default observer(Modal);
