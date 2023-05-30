import React from 'react';

import { FaRegEdit } from "react-icons/fa";

import Colors from '../../../styles/Colors';
import { bannerSection } from '../styles';
import Slider from 'react-slick';

export const Cart = ({ disableBtn, icon, title, ProductName, price, edit, oldPrice }) => {
    return (
        <div
            className="cartHover"
            style={{ height: '19vw', width: '14vw', padding: '.5vw', borderRadius: '1vw', display: "flex", flexDirection: 'column', margin: '2%' }}>
            {edit && <FaRegEdit className="edit-icon " style={{ position: 'absolute', marginLeft: '11.5%' }} />}
            <div style={{ display: "flex", flex: 7, overflow: 'hidden' }}>
                <img src={icon} alt="My Image" style={{ height: '100%', width: "100%", }} />
            </div>
            <div style={{ display: "flex", flexDirection: 'column', flex: 3, }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '1vw' }}>{title}</p>
                    <p style={{ margin: 0, fontSize: '1vw' }}>{ProductName}</p>

                </div>
                <div style={{ display: 'flex', flex: 1, }}>
                    <div style={{ display: 'flex', flex: 1, flexDirection: disableBtn ? 'row' : 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ margin: 0, fontWeight: '700', color: Colors.primary, fontSize: '1.5vw' }}>{price}</p>
                        <p
                            className='buttonsHover'
                            style={{ margin: 0, fontSize: '.8vw' }}>{oldPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


var settings = {
    arrows: false,
    focusOnSelect: true,
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    speed: 500

};
export const SliderComp = () => {
    return (
        <div style={bannerSection()}
        >
            <Slider {...settings} pagination={false}>
                {[0, 0, 0, 0, 0, 0].map(() => {
                    return (
                        <div
                        >
                            <div style={{ height: '11vw', backgroundColor: Colors.gray, width: '34vw', display: 'flex', fontSize: '1.4vw' }}>
                                <div style={{ backgroundColor: 'black', padding: '0px 0.1vw', height: '2vw' }}>
                                    <p style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'white', margin: 0, fontSize: '1.5vw' }}>
                                        ad
                                    </p>
                                </div>
                                <p style={{ margin: 'auto', fontWeight: 'lighter' }}>
                                    ADVERTISING BANNER
                                </p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}