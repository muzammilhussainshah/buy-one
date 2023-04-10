import React from 'react';
import Colors from '../styles/Colors';
import { SliderComp } from '../pages/Home/Components/Components';

export const Footer = ({ location }) => {
    return (
        <>
            {location?.pathname !== '/' &&
                <div style={{ backgroundColor: Colors.white, marginTop: '2vw' }}>
                    <SliderComp />
                </div>
            }
            <div style={{ height: '8vw', backgroundColor: Colors.white, width: '100%', margin: '0vw auto 0vw auto', display: 'flex', fontSize: '1.4vw', padding: '0vw 5%' }}>
                <div style={{ display: 'flex', flex: 1, alignItems: 'center', }}>
                    <img src={require('../assets/50.png')} alt="My Image" style={{ height: '4vw', width: "20%", objectFit: 'contain' }} />
                    <img src={require('../assets/award-friendly.png')} alt="My Image" style={{ height: '5vw', width: "20%", objectFit: 'contain' }} />
                    <img src={require('../assets/1.png')} alt="My Image" style={{ height: '5vw', width: "20%", objectFit: 'contain' }} />
                    <img src={require('../assets/2.png')} alt="My Image" style={{ height: '5vw', width: "20%", objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <img src={require('../assets/Repeat Grid 3.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
                    <img src={require('../assets/E2-OC1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
                    <img src={require('../assets/E2-OC1-1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
                    <img src={require('../assets/E2-UN1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
                    <img src={require('../assets/E2-visa1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
                    <img src={require('../assets/E2-VS-1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
                    <img src={require('../assets/E2-AE1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
                </div>
            </div>
            <div style={{ height: '13vw', backgroundColor: Colors.gray, width: '100%', display: 'flex', fontSize: '1.4vw', padding: '0.5vw 5% 0vw 3%', }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, }}>
                    <p style={{ fontSize: '1.2vw', margin: '1vw 3vw', }}>
                        {`全新體驗 立即下載`}
                    </p>
                    <div style={{ display: 'flex', flex: 1, width: '35%', margin: '0px 3vw', }}>
                        <img src={require('../assets/BUYONE-01.png')} alt="My Image" style={{ height: '85%', borderRadius: '1vw', overflow: 'hidden', width: "50%" }} />
                        <div style={{ display: "flex", flex: 1, flexDirection: 'column', alignItems: 'center', }}>
                            <img src={`https://www.hammerheadshop.com/wp-content/uploads/2019/01/appstore-icon-mobile-retina-rs.png`} alt="My Image" style={{ height: '5vw', margin: '0%', width: '80%' }} />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'flex-end', }}>
                    <div>
                        {['關於我們', '關於買一', '企業資訊', '可持續發展', '加入我們'].map((item, index) => (
                            <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
                                <a
                                    className='buttonsHover'
                                    href='#' style={{ color: 'black', textDecoration: 'none', }}>
                                    {item}
                                </a>
                            </p>
                        ))}
                    </div>
                    <div>
                        {['網上購物', '網上購物流程', '店鋪一覽', '退款/退換政策', '送貨服務'].map((item, index) => <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
                            <a
                                className='buttonsHover'
                                href='#' style={{ color: 'black', textDecoration: 'none', }}>
                                {item}
                            </a>
                        </p>)}
                    </div>
                    <div>
                        {['客戶服務', '電郵: Buyone.info.com.hk', '電話:(852) 2690 0948', '聯絡我們'].map((item, index) => <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
                            <a
                                className='buttonsHover'
                                href='#' style={{ color: 'black', textDecoration: 'none', }}>
                                {item}
                            </a>
                        </p>)}
                    </div>
                </div>
            </div>
            <div style={{ height: '12vw', backgroundColor: Colors.gray, width: '100%', display: 'flex', fontSize: '1.4vw' }}>
                <div style={{ display: 'flex', flex: 7, flexDirection: 'column', justifyContent: "space-evenly" }}>
                    <div>
                        <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: 'normal' }}>{`根據香港法律，不得在業務過程中，向未成年人(18歲以下人士)售賣或供應令人醺醉的酒類。`}</p>
                        <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: '600' }}>{`Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor (under 18) in the course of business.`}</p>
                    </div>
                    <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: '600' }}>{`©2022 Buyone.com Online Store. 版權所有`}</p>
                </div>
                <div style={{ display: 'flex', flex: 3, justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                    <a
                        className='buttonsHover'
                        href="#" style={{ color: 'black', textDecoration: 'none', fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', }} >
                        {`使用條款`}
                    </a>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', color: 'black', textDecoration: 'none', }}>{`私隱政策`}</a>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', color: 'black', textDecoration: 'none', }}>{`免責聲明及通知`}</a>
                </div>
            </div>
        </>
    )
}