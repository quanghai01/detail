import React from 'react';
import TableProduct from './TableProduct';
import DetailCart from './DetailCart';

const Cart = () => {
    return (
        <div className='flex flex-row w-[100%] justify-between'>
            <TableProduct></TableProduct>
            <DetailCart></DetailCart>
        </div>
    );
};

export default Cart;