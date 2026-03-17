import {Item} from "../../types";
import classnames from './Item.module.css';
import {itemStore} from "../../stores";

export function ItemCard({
  id,
  title,
  price,
  image,
}: Item) {

  const onClickCard = () => {
    itemStore.open_modal(id)
  }

  return (
    <div onClick={onClickCard} className={classnames.card}>
      <div className={classnames.image_box}>
        <img className={classnames.image} src={image} alt={title}/>
      </div>
      <div className={classnames.container_title_price}>
        <div className={classnames.title}>{title}</div>
        <div className={classnames.price}>{price} ₽</div>
      </div>
    </div>
  )
}
