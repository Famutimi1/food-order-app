import Cartcontext from "../Context/cartcontext";
import { useContext } from "react";
import Cartdisplay from "./cartdisplay";
import classes from './cartitems.module.css';

const Cartitems = ({ setShowc }) => {
    const cont = useContext(Cartcontext);
    const showcheckout = cont.item.length === 0
    const hidecart=()=>{
        setShowc(false)
    }
    return (
        <>
            <button onClick={hidecart}>close cart</button>
            <div className={classes.cartheading}>
                <div><h3>your cart items</h3></div>
                <div>total cart amount   #{cont.totalamount}</div>
            </div>
            {cont.item.map((carti) => { 
                return <Cartdisplay carti={carti} key={carti.id}  />
            })}
            {!showcheckout && <div className={classes.checkout}><button >Checkout</button></div>}
        </>
    );
}

export default Cartitems;