import React from 'react';
import {
  Cart,
  CheckBox,
  OrderHeader
} from '../ConfirmAddress/Components/Components';

import { CostContainer } from './Components/Components';
import { SliderComp } from '../Home/Components/Components';
import './style.css'
import '../ShoppingCart/style.css'

function ShoppingCart() {

  return (
    <>
      <div className='confirmAddressContainer' style={{ display: 'flex' }}>
        <div className='cartHeading'>
          購物車
          <p className='allProduct fontWeightNormal'>（全部41）</p>
        </div>
        <div className='cartHeading productImgContainer'>
          <CostContainer />
        </div>

      </div >
      <div className='createAddressSection makeColumn' >
        <OrderHeader ShoppingCart />
        <Cart checkBox label={`店鋪: 蘇寧易購官方旗艦店`} />
        <Cart checkBox label={`店鋪: 蘇寧易購官方旗艦店`} />
        <Cart checkBox label={`店鋪: 蘇寧易購官方旗艦店`} />
        <Cart checkBox label={`店鋪: 蘇寧易購官方旗艦店`} />
      </div >
      <div className='confirmAddressContainer createAddressSection ' >
        <div className='cartHeading' style={{}} >
          <CheckBox
            label={`全選`}
            className="marginAdd1 orderHeaderBtn"
          />
          <p className='allProduct fontWeightNormal makeAnchr blue'>刪除</p>
          <p className='allProduct fontWeightNormal '>移入收藏夾</p>
        </div>
        <div className='cartHeading '>
          <CostContainer />
        </div >
      </div>
      <SliderComp />
    </>
  );
}


export default ShoppingCart;
