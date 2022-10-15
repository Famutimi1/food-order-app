import Cartcontext from "./cartcontext";
import { useReducer } from "react";


const defaultstate = {
    item: [],
    totalamount: 0,
    showcart:false
};

const stateReducer = (state, action) => {

    if (action.type === 'item detail') {
        const updatedtotalamount = state.totalamount + action.info.amount * action.info.price
        let updatedshowcart = true 
        const iindex = state.item.findIndex((indexv) => {
            return (
                indexv.id === action.info.id
            )
        })
        const itemindex = state.item[iindex];
        let updateditem;

        if (itemindex) {
            const updateditems = {
                ...itemindex, amount: itemindex.amount + action.info.amount
            };

            updateditem = [...state.item];
            updateditem[iindex] = updateditems;
        }
        else {
            const news = {...action.info,boo:true}
            updateditem = state.item.concat(news)
        }
        return {
            item: updateditem,
            totalamount: updatedtotalamount,
            showcart: updatedshowcart
        }

    }


    if (action.type === 'remove') {
        const iindex = state.item.findIndex((indexv) => {
            return (
                indexv.id === action.id
            )
        })

        const itemindex = state.item[iindex];
        let updatedtotalamount = state.totalamount - itemindex.price
        let updateditem
        let updatedshowcart

        if (itemindex.amount === 1) {
            const update = [...state.item];
            update[iindex] = { ...itemindex, boo: false };
            updateditem = update.filter((fitem => fitem.id !== action.id))
            updatedshowcart = false

        }
        else { 
            updateditem = [...state.item];
            updateditem[iindex] = { ...itemindex, amount: itemindex.amount - 1 };
            updatedshowcart = true
        }

        return {
            item: updateditem,
            totalamount: updatedtotalamount,
            showcart: updatedshowcart
        };

    }

    if (action.type === 'show') {
        return {
            item: state.item,
            totalamount: state.totalamount,
            showcart: state.showcart
        }
    }


    return defaultstate;
}

const Cartprovider = (props) => {


    const handleaddtocart = (goods) => {
        dispatch({
            type: 'item detail',
            info: goods
        })

    }

    const handledeletecart = (id) => {
        dispatch({
            type: 'remove',
            id: id
        })
    }

    const showhandler = ()=>{
        dispatch({
            type:'show',
        })
    }

    const [cartstate, dispatch] = useReducer(stateReducer, defaultstate,)

    const defaultvalue = {
        item: cartstate.item,
        totalamount: cartstate.totalamount,
        showcart: cartstate.showcart,
        addcart: handleaddtocart,
        delcart: handledeletecart,
        showfun: showhandler
    }

    return (
        <Cartcontext.Provider value={defaultvalue}>
            {props.children}
        </Cartcontext.Provider>
    );
}


export default Cartprovider;