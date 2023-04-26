import React, {
    useEffect,
    useState
} from 'react';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import {
    FaPhoneSquareAlt,
    FaRegEdit
} from "react-icons/fa";

import './style.css'
import Colors from '../../styles/Colors';
import MyButton from '../../components/MyButton';
import { cartDummyData } from '../Home/data';
import { Cart } from '../Home/Components/Components';
import SearchSection, {
    SearchBarWithBtn
} from '../../components/SearchSection';
import {
    Revise,
    StoreCategory
} from './Components/Components';

function OnlineStore({ edit }) {

    const [totalPagesSt, setTotalPagesSt] = useState([])
    const [selectedPageNo, setSelectedPageNo] = useState(0)

    useEffect(() => {
        let totalPages = Math.ceil(cartDummyData.length / 18)
        setTotalPagesSt(Array.from({ length: totalPages }, (a, b) => b))
    }, [])

    const changePageHandle = (type) => {
        if (type == 'previous' && selectedPageNo > 0) setSelectedPageNo(selectedPageNo - 1)
        else if (type == 'next' && selectedPageNo < totalPagesSt?.length - 1) setSelectedPageNo(selectedPageNo + 1)
    }

    return (
        <>
            <SearchSection />

            <div className='createAddressSection fragHeading ' style={{ padding: '1vw' }}>

                <div className='myStoreImg'>
                    {<div />}
                    <PhotoLibraryIcon className='myStoreImgIcon' />
                    {!edit && <div />}
                    {edit && <div style={{ height: '90%', marginRight: "1vw" }}><FaRegEdit className="edit-icon" /></div>}
                </div>

                <div style={{ display: 'flex', flex: 1, width: '100%' }}>

                    <div className='emptyStoreLeftSide  '  >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            EMPTY Online Store{edit && <FaRegEdit className="edit-icon" />}
                        </div>
                        <div className='orderHeader' style={{ justifyContent: 'flex-start' }}>
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

                            {cartDummyData?.slice((selectedPageNo) * 18, (selectedPageNo + 1) * 18)?.map(({ icon, title, ProductName, price, oldPrice }) => <Cart edit={edit} title={title} icon={icon} ProductName={ProductName} price={price} oldPrice={oldPrice} disableBtn />)}

                            <div className='cartPaginationContainer  '>

                                <div style={{ backgroundColor: 'pink' }}>
                                    <MyButton onClick={() => changePageHandle('previous')} label='上一頁' className={'confirmationBtn'} />
                                    <MyButton label={selectedPageNo} className={'pageNumber'} />
                                    <MyButton onClick={() => changePageHandle('next')} label='下一頁' className={'confirmationBtn'} />
                                </div>

                                <div className='pageNumbersContainer'   >

                                    {totalPagesSt?.length && totalPagesSt.slice(selectedPageNo < 5 ? 0 : selectedPageNo - 4, selectedPageNo < 5 ? 9 : selectedPageNo + 5)
                                        ?.map((item, index) => <MyButton onClick={() => { setSelectedPageNo(item) }} label={item} className={selectedPageNo == item ? 'pageNumberBtns blueColor' : 'pageNumberBtns'} />)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default OnlineStore;
