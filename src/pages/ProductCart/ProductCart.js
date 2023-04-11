import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import MoodIcon from '@mui/icons-material/Mood';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import SearchSection from '../../components/SearchSection';
import MyButton from '../../components/MyButton';
import Colors from '../../styles/Colors';
import { Cart } from '../Home/Components/Components';
import { cartDummyData } from '../Home/data';
import {
    DropDown,
    ProductImg,
    TimeUi
} from './Components/Components';
import './style.css'

function WishList() {
    return (
        <>
            <SearchSection />
            <div className='createAddressSection fragHeading priceText'>
                {`噴香機衛生間定時加香機廁所室內自動噴霧器清新空氣除臭芳香劑`}

                <p className='AddressInputTitle2'>{`購物 ＞ 電腦 ＞ 可穿戴設備 ＞ 智能手錶（主機）`}</p>

                <div className='productCartContainer'>

                    <div className='productCartLeftPanel'>
                        <ProductImg />
                        <ProductImg />
                        <ProductImg />
                        <ProductImg />
                        <ProductImg />
                    </div>

                    <div className='productCartImg'>
                        <PhotoLibraryIcon sx={{ fontSize: '6vw', color: Colors.tabInactive }} />
                        <div className='productCartImgSearchIcon'                        >
                            <SearchIcon sx={{ fontSize: '4vw' }} />
                        </div>
                    </div>

                    <div className='productCartRightPanel'>
                        <p className='removeMargin rightPanelHeading'  >{`蘇寧易購官方旗艦店`}</p>
                        <div
                            className='orderHeader'
                            style={{ justifyContent: 'flex-start' }}>

                            <p className='orderHeaderBtn moodIconContainer'> <MoodIcon sx={{ fontSize: '1.5vw', color: 'green', }} /> </p>

                            <p className='orderHeaderBtn makeAnchr'>{`customer service`}</p>

                        </div>

                        <p className='rightPanelHeading AddressInputTitle2'>{`價格`}</p>

                        <p className='rightPanelHeading ProductPriceText'>{`$ 255.97 港元`}</p>

                        <div className='orderHeader rightPanelHeading' style={{ justifyContent: 'flex-start' }}>
                            <TimeUi name='價格' value='(3天)' red={true} />
                            <TimeUi name='月銷量' value='2000+' />
                            <TimeUi name='購物送積分' value='32+' />
                        </div>

                        <p className='rightPanelHeading AddressInputTitle2'>{`項目情況`}</p>

                        <p className='rightPanelHeading AddressInputTitle2 priceText'>{`新物品`}</p>

                        <p className='rightPanelHeading AddressInputTitle2 addMarginY'>{`選擇方案:`}</p>

                        <DropDown />

                        <p className='rightPanelHeading AddressInputTitle2 addMarginY'>{`配件組合:`}</p>

                        <DropDown />

                        <p className='rightPanelHeading AddressInputTitle2 addMarginY'>{`支付方式:`}</p>

                        <div className='paymentIconContainer'>
                            <img src={require('../../assets/Group 399.png')} className='paymentIconImage' />
                        </div>

                        <p className='rightPanelHeading AddressInputTitle2 addMarginY'>{`所需數量:`}</p>

                        <DropDown maxWidth={'8vw'} />

                        <div className='shoppingBtnContainer'                         >

                            <MyButton
                                leftIcon={<ShoppingCartIcon sx={{ fontSize: '1.2vw', margin: '0px 1vw' }} />}
                                label='立即購入'
                                className={'ProductCartBtn'}
                            />
                            <MyButton
                                leftIcon={<LocalMallOutlinedIcon sx={{ fontSize: '1.2vw', margin: '0px 1vw' }} />}
                                label='加入購物車'
                                className={'ProductCartBtn'}
                            />

                        </div>

                        <p className='AddressInputTitle2 addMarginY rightSideFooterText'>{`請選擇一個可用項目，然後單擊“添加到購物車”`}</p>

                    </div>

                </div>

                <p className='AddressInputTitle2 addMarginY wishListWithStar' >
                    <StarRateRoundedIcon sx={{ color: Colors.primary, fontSize: '1.5vw' }} />{`心願清單(2082人氣)`}</p>

                <MyButton
                    leftIcon={<InfoRoundedIcon sx={{ fontSize: '1.2vw', color: Colors.primary, margin: '0px 1vw 0px 0px' }} />}
                    label='加入購物車'
                    className={'ProductDescriptionBtn'}
                />

                <div className='ProductNameContainer'>
                    <p className='removeMargin AddressInputTitle2 addMarginY'>{`產品名稱： 智能手錶 QS15 邊框顏色：`}</p>
                    <p className='removeMargin AddressInputTitle2'>{`黑色、藍色、粉色`}</p>
                    <p className='removeMargin AddressInputTitle2'>{`電池容量：300 毫安時`}</p>
                    <p className='removeMargin AddressInputTitle2'>{`充電電壓：5 V/1`}</p>
                    <p className='removeMargin AddressInputTitle2'>{`A 重量：約6 個月[藍牙通話功能/來電通知] [音樂播放/相機遙控] [1.75英寸大屏/超長待機] [運動記錄/24種運動模式] [許多有用的功能]注意：本產品為一般用途，因為它將由日本郵政，我們無法回復交貨日期和時間。請注意。如需指定送貨方式，請使用“加急送貨-已付”送貨方式。iPhone 14系列/iPhone 13系列/iPhone 12系列/iPhone 11系列等，兼容安卓 * 兼容iPhone、Xperia、Galaxy、華碩、華為、夏普等多款手機。* 不支持 Garakei 和平板電腦。`}</p>
                </div>

                <p className='AddressInputTitle2 addMarginY ' style={{ margin: "5vw 0px" }}>{`*注意：本產品是用於日常健康管理和運動管理的設備，不是醫用脈搏血氧儀或體溫計。請勿用於醫療程序。`}</p>

                {`推薦項目`}

            </div >

            <div className='productCartMainContainer'>

                <ScrollMenu>

                    <div className='createAddressSection starCardContainer'>
                        {
                            cartDummyData?.map((item) => {
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

                        <div className='productCartFooterText'>
                            {`找不到您要找的商品？`}
                            <p
                                className='AddressInputTitle2 addMarginY '
                                style={{ margin: "1vw 0px 4vw 0px" }}>{`您只需輸入商品的 URL 即可請求來自 BuyONE 列出的購物網站以外的商品的購買支持！`}</p>
                        </div>

                    </div>

                </ScrollMenu>
            </div >
        </>
    );
}


export default WishList;
