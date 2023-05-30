import React from 'react';
import MyButton from '../../../components/MyButton';

export const CostContainer = ({ LogisticManagement }) => {

    return (
        <>
            {!LogisticManagement &&
                <span
                    className='productImgContainer marginAdd'
                >
                    <p className='AddressHeading2 orderHeaderBtn '>
                        已選產品
                    </p>
                    <p className='AddressHeading2 priceText blue' style={{ margin: "0px .5vw" }}>
                        1
                    </p>
                    <p className='AddressHeading2 orderHeaderBtn'>
                        件
                    </p>
                </span>
            }
            <div className="marginAdd">
                <p className='totalCostPrice priceText'>$760.00</p>
                <p className='AddressHeading2 removeFontWeight'>
                    {LogisticManagement ? '不含優惠折扣，及異常件費用' : '合共計算（不含運費):'}
                </p>
            </div>
            <div
                className='' style={{}}>
                <MyButton
                    label={LogisticManagement ? '立即整合付款' : '立即付款'}
                    style={{ fontSize: LogisticManagement && '1.2vw', }}
                    className={'confirmationBtn confirmationBtnHover'}
                />
            </div>
        </>
    )
}