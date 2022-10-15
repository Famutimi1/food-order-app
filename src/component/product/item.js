import items from "./item-element";
import Itemdisplay from "./item_display";
import classes from './item.module.css';


const Item = () => {
    return (
        <div className={classes.mapcon}>
            {items.map((item => <Itemdisplay key={item.id} item={item}/>))}
        </div>
    );
}

export default Item;