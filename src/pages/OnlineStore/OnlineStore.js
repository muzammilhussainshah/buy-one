import React, { useState } from 'react';

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
import './style.css'
import SearchSection, { SearchBarWithBtn } from '../../components/SearchSection';
import { StoreCategory } from './Components/Components';
function OnlineStore() {

    return (
        <>
            <SearchSection />
            <div className='createAddressSection fragHeading ' style={{ padding: '1vw' }}>
                <div className='myStoreImg'>
                    <PhotoLibraryIcon className='myStoreImgIcon' />
                </div>
                <div style={{ display: 'flex', flex: 1, width: '100%' }}>
                    {/* <div className='emptyStoreLeftSide  '> */}
                    <div className='emptyStoreLeftSide  ' style={{ paddingLeft: '2vw' }}>
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
                        <div className='rankingContainer'>
                            <div className='rankingContainerHeader'></div>
                        </div>
                    </div>
                    <div className='emptyStoreRightSide'></div>
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
