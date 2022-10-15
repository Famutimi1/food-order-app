import React from "react";

const Cartcontext = React.createContext({
    item:[],
    totalamount:0,
    showcart: true,
    addcart:(goods)=>{},
    delcart:(id)=>{},
    showfun: ()=>{}

});

export default Cartcontext;