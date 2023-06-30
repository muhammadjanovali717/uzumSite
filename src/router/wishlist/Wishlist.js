import React from 'react'
import Empty from "../../components/empty/Empty"
import { useSelector } from 'react-redux'
import WishlistWrapper from '../../components/wishlist-wrapper/WishlistWrapper';

function Wishlist() {
    const heart = useSelector(s => s.heart.value)
    console.log(heart);
    return (
        <div className='container'>
            {
                heart.length ?
                <WishlistWrapper data={heart}/>:
                <Empty title="Sevimlilar" />
     
            }
               </div>
    )
}

export default Wishlist