import React, { useState } from 'react';
import MyButton from '../../../components/MyButton';
export const CostContainer = () => {

    return (
        <>
            <span
                className='productImgContainer marginAdd'
            >
                <p className='AddressHeading2 orderHeaderBtn '>
                    已選產品
                </p>
                <p className='AddressHeading2 priceText blue' style={{margin:"0px .5vw"}}>
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
        </>
    )
}