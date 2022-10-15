import classes from './cartdisplay.module.css'
import { useContext } from 'react'
import Cartcontext from '../Context/cartcontext'
const Cartdisplay = ({carti}) => {
    const cont = useContext(Cartcontext);
    const {addcart,delcart} = cont

    const addhandler= ()=>{
        addcart({...carti,amount:1})
    }

    const removehandler = ()=>{
        delcart(carti.id)
    }
    return ( 
        <div className={classes.itemsincart}>
            <div> <img src={carti.img} alt=''></img> <span>({carti.amount}) items</span></div>
            <div>{carti.name}</div>
            <div className={classes.bt}><button onClick={removehandler}>-</button> 
             <button onClick={addhandler}>+</button></div>
            <div>#{carti.price}</div>
        </div>
    );
}
export default Cartdisplay;