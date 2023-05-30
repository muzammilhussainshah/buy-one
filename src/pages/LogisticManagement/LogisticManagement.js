import React, { useState } from 'react';

import MoodIcon from '@mui/icons-material/Mood';

import { CostContainer } from '../ShoppingCart/Components/Components';
import {
    Cart,
    CheckBox,
    OrderHeader
} from '../ConfirmAddress/Components/Components';
import './style.css'

function LogisticManagement() {

    const [selectedBtn, setSelectedBtn] = useState('買一官方運輸')
    const [selectedCategoryBtn, setSelectedCategoryBtn] = useState('買一官方運輸')

    const logisticHeaderBtnClass = (value) => `searchButtonsHover LogisticManagementCartHeaderLeftBtns  ${selectedCategoryBtn == value && 'priceText'} ${value == '待入庫' && 'LogisticManagementCartHeaderLeftLastBtn'}`

    return (
        <>
            <div className='LogisticManagementHeaderContainer' style={{ border: '0px solid black' }}>

                <p className='LogisticManagementHeaderText'>物流管理 <span style={{ fontWeight: "normal" }}>（全部 4）</span></p>

                <div className='LogisticManagementHeaderBtnContainer'>

                    <div style={{ display: 'flex' }}>

                        <div className='LogisticManagementHeaderBtn'>
                            <button
                                onClick={() => { setSelectedBtn('買一官方運輸') }}
                                className={`LogisticManagementHeaderBtns ${selectedBtn !== '買一官方運輸' && 'LogisticManagementHeaderSelectedBtns'}`}>{'買一官方運輸'}</button>
                        </div>

                        <div className='LogisticManagementHeaderBtn'>
                            <button
                                onClick={() => { setSelectedBtn('順豐快捷運輸') }}
                                className={`LogisticManagementHeaderBtns ${selectedBtn !== '順豐快捷運輸' && 'LogisticManagementHeaderSelectedBtns'}`}>{'順豐快捷運輸'}</button>
                        </div>

                    </div>

                    <div className='LogisticManagementHeaderBtn'>

                        <button
                            onClick={() => { setSelectedBtn('全部订单') }}
                            className={`LogisticManagementHeaderBtns ${selectedBtn !== '全部订单' && 'LogisticManagementHeaderSelectedBtns'}`}>{'全部订单'}</button>

                    </div>

                </div >

            </div >

            <div className='LogisticManagementCartHeader'>

                <div className='LogisticManagementCartHeaderLeftBtn'>

                    <button onClick={() => { setSelectedCategoryBtn('全部') }} className={logisticHeaderBtnClass(`全部`)} >{'全部'}</button>
                    <button onClick={() => { setSelectedCategoryBtn('等待整合') }} className={logisticHeaderBtnClass(`等待整合`)} >{'等待整合'}</button>
                    <button onClick={() => { setSelectedCategoryBtn('異常貨物') }} className={logisticHeaderBtnClass(`異常貨物`)}>{'異常貨物'}</button>
                    <button onClick={() => { setSelectedCategoryBtn('待入庫') }} className={logisticHeaderBtnClass(`待入庫`)} style={{ borderRight: '0px solid black' }}                    >{'待入庫'}</button>

                </div>

                <div className='LogisticManagementCartHeaderRightBtn'>

                    <div className='orderHeader' style={{ justifyContent: 'flex-start' }}>
                        <p className='orderHeaderBtn fontWeightNormal'>{`運輸操作諮詢`}</p>
                        <p className='orderHeaderBtn moodIconContainer margin0 lockIconContainer' style={{ margin: '0px .2vw 0px 1vw' }}>
                            <MoodIcon sx={{ fontSize: '2vw', color: 'green', }} />
                        </p>
                        <p className='orderHeaderBtn makeAnchr fontWeightNormal buttonsHover'>{`customer service`}</p>
                    </div>

                </div>

            </div>

            <div className='logisticManagementCartSectionHeader'  >

                <div style={{ width: '100%' }}>
                    <OrderHeader ShoppingCart />
                    <Cart LogisticManagement label={`2022-04-16`} />
                    <Cart LogisticManagement label={`2022-04-16`} />
                    <Cart LogisticManagement label={`2022-04-16`} />
                    <Cart LogisticManagement label={`2022-04-16`} />
                </div>

            </div>

            <div className='confirmAddressContainer createAddressSection ' style={{ borderBottom: '0px' }} >

                <div className='cartHeading' style={{ flex: 1.5 }}  >
                    <CheckBox label={`全選`} className="marginAdd1 orderHeaderBtn" />
                    <span
                        className='productImgContainer marginAdd'
                    >
                        <p className='AddressHeading2 orderHeaderBtn fontWeightNormal '>
                            已選產品
                        </p>
                        <p className='AddressHeading2 priceText blue' style={{ margin: "0px .5vw" }}>
                            1
                        </p>
                        <p className='AddressHeading2 orderHeaderBtn fontWeightNormal'>
                            件
                        </p>
                    </span>
                    <span
                        className='productImgContainer marginAdd'
                    >
                        <p className='AddressHeading2 orderHeaderBtn fontWeightNormal'>
                            合計重量 :
                        </p>
                        <p className='AddressHeading2 priceText blue' style={{ margin: "0px .5vw" }}>
                            - KG
                        </p>
                    </span>
                </div>

                <div className='cartHeading ' style={{ justifyContent: "flex-end" }}>
                    <CostContainer LogisticManagement />
                </div >

            </div>
        </>
    );
}


export default LogisticManagement;