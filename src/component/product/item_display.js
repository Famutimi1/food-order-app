import classes from './item_display.module.css'
import { useContext, useEffect, useState } from 'react';
import Cartcontext from '../Context/cartcontext';

const Itemdisplay = ({ item }) => {
    const cont = useContext(Cartcontext)
    const [itemstate, setItemstate] = useState(true)
    const id = item.id
    const [itemamount, setItemamount] = useState(null)
    const [bool, setBool] = useState(false)

    const show = itemstate && bool

    const iindex = cont.item.findIndex((indexv) => {
        return (
            indexv.id === id
        )
    })

    const carthandler = () => {
        cont.addcart({
            name: item.name,
            amount: 1,
            id: item.id,
            price: item.price,
            img: item.img,
            boo: false
        })
    }

    const remove = ()=>{
       cont.delcart(id)
    }


    useEffect(() => {
        if (cont.item.length !== 0) {
            if (cont.item[iindex] !== undefined) {
                setItemamount(cont.item[iindex].amount)
                console.log(itemamount)
                setBool(cont.item[iindex].boo)
                console.log(cont.item[iindex].boo)
            }
        }

        if (!cont.item[iindex]) {
            setBool(false)
        }
    }, [cont.item, iindex, itemamount])


    return (
        <div className={classes.discon}>
            <div className={classes.inerdiscon}>
                <div className={classes.img}>
                    <img src={item.img} alt=''></img>
                </div>
                <div className={classes.disc}>
                    <div className={classes.description}>
                        {item.name}<span>{item.description}</span>
                    </div>
                    <div className={classes.price}>
                        #{item.price}
                    </div>
                    {show ? <div className={classes.df}><button onClick={remove}>-</button>{itemamount}<button onClick={carthandler} >+</button></div>
                        : <div className={classes.add}><button onClick={carthandler}>add to cart</button></div>}
                </div>
            </div>

        </div>
    );
}

export default Itemdisplay;