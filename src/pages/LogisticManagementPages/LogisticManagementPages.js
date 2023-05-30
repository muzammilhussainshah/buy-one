import React, { useEffect, useState } from 'react';

import MoodIcon from '@mui/icons-material/Mood';

import {
    Cart,
} from '../ConfirmAddress/Components/Components';
import './style.css'
import { CartHeader } from './Components/Components';
import MyButton from '../../components/MyButton';

function LogisticManagementPages() {

    const [selectedBtn, setSelectedBtn] = useState('買一官方運輸')
    const [selectedCategoryBtn, setSelectedCategoryBtn] = useState('買一官方運輸')
    const [totalPagesSt, setTotalPagesSt] = useState([])
    const [selectedPageNo, setSelectedPageNo] = useState(0)

    useEffect(() => {
        // let totalPages = Math.ceil(cartDummyData.length / 18)
        setTotalPagesSt(Array.from({ length: 200 }, (a, b) => b))
    }, [])


    const logisticHeaderBtnClass = (value) => `searchButtonsHover LogisticManagementCartHeaderLeftBtns  ${selectedCategoryBtn == value && 'priceText'} ${value == '待入庫' && 'LogisticManagementCartHeaderLeftLastBtn'}`

    const changePageHandle = (type) => {
        if (type == 'previous' && selectedPageNo > 0) setSelectedPageNo(selectedPageNo - 1)
        else if (type == 'next' && selectedPageNo < totalPagesSt?.length - 1) setSelectedPageNo(selectedPageNo + 1)
    }

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
                        <div className='LogisticManagementHeaderBtn'>
                            <button
                                onClick={() => { setSelectedBtn('全部订单') }}
                                className={`LogisticManagementHeaderBtns ${selectedBtn !== '全部订单' && 'LogisticManagementHeaderSelectedBtns'}`}>{'全部订单'}</button>
                        </div>

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
                        <p className='orderHeaderBtn makeAnchr fontWeightNormal'>{`customer service`}</p>
                    </div>

                </div>

            </div>

            <div className='logisticManagementCartSectionHeader removeBorder'  >

                <div style={{ width: '100%' }}>

                    <CartHeader />

                    <div className='addMarginY2'>
                        <Cart LogisticManagementPages LogisticManagement label={`2022-04-16`} />
                    </div>

                    <div className='addMarginY2'>
                        <Cart LogisticManagementPages LogisticManagement label={`2022-04-16`} />
                    </div>

                    <div className='addMarginY2'>
                        <Cart LogisticManagementPages LogisticManagement label={`2022-04-16`} />
                    </div>

                    <div className='addMarginY2'>
                        <Cart LogisticManagementPages LogisticManagement label={`2022-04-16`} />
                    </div>

                    <div className='cartPaginationContainer  LogisticManagementPagesHandleContainer'>

                        <div>
                            <MyButton onClick={() => changePageHandle('previous')} label='上一頁' className={'confirmationBtn'} />
                            <MyButton label={selectedPageNo} className={'pageNumber'} />
                            <MyButton onClick={() => changePageHandle('next')} label='下一頁' className={'confirmationBtn'} />
                        </div>

                        <div className='pageNumbersContainer'>
                            {totalPagesSt?.length && totalPagesSt.slice(selectedPageNo < 5 ? 0 : selectedPageNo - 4, selectedPageNo < 5 ? 9 : selectedPageNo + 5)
                                ?.map((item, index) => <MyButton onClick={() => { setSelectedPageNo(item) }} label={item} className={selectedPageNo == item ? 'pageNumberBtns blueColor' : 'pageNumberBtns'} />)}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}


export default LogisticManagementPages;