import React, {
  useState
} from 'react';
import MyButton from '../../components/MyButton';

import '../ShoppingCart/style.css'
import './style.css'
function ShoppingCart() {

  return (
    <>
      <div className='confirmAddressContainer' style={{ display: 'flex' }}>
        <div className='cartHeading'>
          購物車
          <p className='allProduct fontWeightNormal'>（全部41）</p>
        </div>
        <div className='cartHeading productImgContainer'>
          <span
            className='productImgContainer marginAdd'
          >
            <p className='AddressHeading2 orderHeaderBtn '>
              已選產品
            </p>
            <p className='AddressHeading2 priceText blue'>
              1
            </p>
            <p className='AddressHeading2 orderHeaderBtn'>
              件
            </p>
          </span>
          <div className="marginAdd">
            <p className='totalCostPrice priceText'>$760.00</p>
            <p className='AddressHeading2 removeFontWeight'>
              合共計算（不含運費):
            </p>
          </div>
          <div
            className='' style={{}}>
            <MyButton
              label='立即付款'
              className={'confirmationBtn'}
            />
          </div>
        </div>
      </div >
    </>
  );
}


export default ShoppingCart;
