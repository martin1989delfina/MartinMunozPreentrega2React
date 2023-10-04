import React from 'react'
import Item from "../Item/Item"

export const ItemList = ({products})=>{
    return(
        <div className='listGrup'>
            {products.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}





export default ItemList;