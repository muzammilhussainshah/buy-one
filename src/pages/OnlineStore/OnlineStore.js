import React, { useEffect, useState } from 'react';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Colors from '../../styles/Colors';
import MyButton from '../../components/MyButton';
import { DropDown } from '../ProductCart/Components/Components';
import { CustomInput } from '../ConfirmAddress/Components/Components';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaPhoneSquareAlt } from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import './style.css'
import { StoreCategory } from './Components/Components';
import { cartDummyData } from '../Home/data';
import { Cart } from '../Home/Components/Components';
import SearchSection,
{ SearchBarWithBtn } from '../../components/SearchSection';

export const RankingCart = ({ title, oldPrice, price }) => {
    return (
        <div className='RankingCartContainer'>
            <div className='RankingCartImgContainer'>
                <PhotoLibraryIcon className='rakingCartDefaultImg' />
            </div>
            <div className='RankingCartBodyContainer'>
                <p
                    className='AddressInputTitle2 removeMargin' >{title.substring(0, 20)}</p>
                <p style={{ margin: 0, fontWeight: '700', color: Colors.primary, fontSize: '1.5vw' }}>{price}</p>
                <p className='fontWeightNormal ' style={{ margin: 0, fontSize: '.8vw' }}>{oldPrice}</p>
            </div>
        </div>
    )
}



export const Revise = ({ footerText, headerText, count }) => {
    return (
        <div className='rankingContainer addMarginY addMarginY2'>
            <div className='rankingContainerHeader'>
                <p className='rightPanelHeading AddressInputTitle2 priceText'>{headerText}</p>
            </div>
            <div className='rankingCartContainer'>
                {count.map(() => {
                    return (
                        <RankingCart
                            price={'$760.00'}
                            oldPrice={'155人已購入'}
                            title={'ASTM Level 3 成人三層衛生口罩(175mmx95mm) -藍色 30個獨立...包裝 30S'} />

                    )
                })}
                <p
                    className='AddressInputTitle2 makeAnchr marginAuto' >{footerText}</p>
            </div>
        </div>

    )
}
function OnlineStore() {
    const [totalPagesSt, setTotalPagesSt] = useState([])
    const [selectedPageNo, setSelectedPageNo] = useState(0)
    useEffect(() => {
        let totalPages = Math.ceil(cartDummyData.length / 18)

        setTotalPagesSt(Array.from({ length: totalPages }, (a, b) => b))
        // const randomNumberArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
        // console.log(Array.from({ length: totalPages }, (a, b) => b), 'Array.from({ length: totalPages })')
        // console.log(cartDummyData.length, Math.ceil(cartDummyData.length / 18), totalPages, 'cartDummyDatacartDummyData')
    }, [])
    return (
        <>
            <SearchSection />
            <div className='createAddressSection fragHeading ' style={{ padding: '1vw' }}>
                <div className='myStoreImg'>
                    <PhotoLibraryIcon className='myStoreImgIcon' />
                </div>
                <div style={{ display: 'flex', flex: 1, width: '100%' }}>
                    <div className='emptyStoreLeftSide  '  >
                        EMPTY Online Store
                        <div
                            className='orderHeader'
                            style={{ justifyContent: 'flex-start' }}>
                            <p className='orderHeaderBtn moodIconContainer margin0 lockIconContainer'> <MoodIcon sx={{ fontSize: '1.5vw', color: 'green', }} /> </p>
                            <p className='orderHeaderBtn makeAnchr margin0'>{`customer service`}</p>
                        </div>
                        <p className='emptyStoreTitleText  '>{`Hong Kong   ∙   已加入 6y 1m`}</p>
                        <p className='emptyStoreTitleText  '>
                            {`已驗證`}
                            <FacebookIcon sx={{ fontSize: '1.45vw', marginLeft: '0.5vw', color: Colors.primary }} />
                            <EmailIcon sx={{ fontSize: '1.45vw', marginLeft: '0.5vw', color: Colors.primary }} />
                            <FaPhoneSquareAlt size={'1.2vw'} style={{ marginLeft: '0.5vw', color: Colors.primary }} />
                        </p>
                        <p className='emptyStoreTitleText  '>{`鑽石級💎商戶 信心💗保證，保證100%正貨✔️ 本店專營藍牙耳機、藍牙喇叭、電視盒子、車用電子週邊、數碼生活、小型家電、電視機、空氣清新機等等，歡迎客人到藍田匯景廣場/坑口南豐廣場實體店交收，安全可靠，亦可地鐵站交收🚇/順豐送貨/司機送貨🚚 💰VISA/MASTER/轉數快/PAYME/八達通/支付寶/Wechat 💰`}</p>
                        <div className='OnlineStoreLeftSideSearchContainer'>
                            <SearchBarWithBtn
                                btnText={'搜尋'}
                                placeHolder={'搜尋店內商品'}
                                width={'100%'}
                                outLine />
                        </div>
                        <StoreCategory title={'查看所有商品'} />
                        <StoreCategory title={'On Sale | 限時特優'} />
                        <StoreCategory title={'Oversea | 跨境商品'} />
                        <StoreCategory title={'Life | 生活系列'} />
                        <StoreCategory title={'Pet | 寵物系列'} />
                        <StoreCategory title={'Tech | 科技系列'} />
                        <StoreCategory title={'Design | 設計系列'} />
                        <StoreCategory title={'Outdoor | 戶外系列'} />
                        <Revise footerText='查看更多' count={Array.from({ length: 4 },)} headerText="本店推薦" />
                        <Revise footerText='查看更多' count={Array.from({ length: 6 },)} headerText="商品排行榜" />
                    </div>
                    <div className='emptyStoreRightSide'>
                        <div className='createAddressSection starCardContainer' style={{ margin: '0px' }}>
                            {
                                cartDummyData?.slice((selectedPageNo) * 18, (selectedPageNo + 1) * 18)?.map((item) => {
                                    const { id, icon, title, ProductName, price, oldPrice } = item
                                    return (
                                        <Cart
                                            title={title}
                                            icon={icon}
                                            ProductName={ProductName}
                                            price={price}
                                            oldPrice={oldPrice}
                                            disableBtn
                                        />
                                    )
                                })
                            }
                            <div className='cartPaginationContainer  '>
                                <div style={{ backgroundColor: 'pink' }}>
                                    <MyButton
                                        onClick={() => { if (selectedPageNo > 0) setSelectedPageNo(selectedPageNo - 1) }}
                                        label='上一頁'
                                        className={'confirmationBtn'}
                                    />
                                    <MyButton label={selectedPageNo} className={'pageNumber'} />
                                    <MyButton
                                        onClick={() => { if (selectedPageNo < totalPagesSt?.length - 1) setSelectedPageNo(selectedPageNo + 1) }}
                                        label='下一頁'
                                        className={'confirmationBtn'} />

                                </div>
                                <div
                                    className='pageNumbersContainer'   >

                                    {totalPagesSt?.length && totalPagesSt.slice(
                                        selectedPageNo < 5 ?
                                            0 :
                                            selectedPageNo - 4
                                        ,

                                        selectedPageNo < 5 ?
                                            9 :
                                            selectedPageNo + 4

                                    )?.map((item, index) => {
                                        return (
                                            <MyButton
                                                onClick={() => { setSelectedPageNo(item) }}
                                                label={item} className={'pageNumberBtns'} />

                                        )
                                    })}
                                </div>
                                {/* <MyButton label='2' className={'pageNumberBtns'} />
                                <MyButton label='3' className={'pageNumberBtns'} />
                                <MyButton label='4' className={'pageNumberBtns'} />
                                <MyButton label='5' className={'pageNumberBtns'} />
                                <MyButton label='6' className={'pageNumberBtns'} />
                                <MyButton label='7' className={'pageNumberBtns'} />
                                <MyButton label='8' className={'pageNumberBtns'} /> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <p></p> */}
                {/* <div className='createAddressSection fragHeading priceText'>
                EMPTY Online Store
            </div> */}
            </div>
        </>
    );
}


export default OnlineStore;
