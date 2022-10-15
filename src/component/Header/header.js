import classes from './header.module.css'
import { useContext } from 'react';
import Cartcontext from '../Context/cartcontext';

const Header = ({setShowc}) => {
    const cont = useContext(Cartcontext)
    const { item, showfun } = cont
    const totalcartitem = item.reduce((current, items) => {
        return current + items.amount
    }, 0)
    const show = () => {
        showfun()
        setShowc(true)
    }
    return (
        <div className={classes.header}>
            <div className={classes.logo}>duns <span>store</span></div>
            <form className={classes.formcon}>
                <input type='search' />
                <button className={classes.hb}>search</button>
            </form>

            <div className={classes.infocos} onClick={show}>
                <div className={classes.carticon} >your cart <span>{totalcartitem}</span></div>
                <div><span className="material-symbols-outlined">
                    shopping_cart
                </span>
                </div>
            </div>


        </div>
    );
}

export default Header;