import React, {
    useEffect,
    useState
} from 'react';

import '../App.css'
import Banner from './Banner';
import { bannerContainer } from './styles';
// import { bannerContainer } from './styles';
// import { styles } from './styles';

export const Header = () => {
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, [])
    return (
        <>
            <div
                style={bannerContainer()}>
                <Banner />
            </div>
            <div
                className="sticky"
                style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: '1% 3%', paddingLeft: '5%', paddingRight: '5%', }}>
                <div style={{ width: '25%', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                    {isSticky && <img src={require('../assets/logo.JPG')} alt="My Image" style={{ height: '2vw', width: '2vw', objectFit: 'contain' }} />}
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`中國香港`}</a>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`帳戶名稱`}</a>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`手機瀏覽器`}</a>
                </div>
                <div style={{ width: '45%', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`帳戶資料`}</a>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`購物車`}</a>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`心願清單`}</a>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`物流管理`}</a>
                    <a
                        className='buttonsHover'
                        href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`線上支援`}</a>
                </div>
            </div>
        </>
    )
}