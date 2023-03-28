import React from 'react';

import Colors from '../../../styles/Colors';

export const Cart = ({ disableBtn, icon, title, ProductName, price, oldPrice }) => {
    return (
        <div
            className="cartHover"
            style={{ height: '19vw', width: '14vw', padding: '.5vw', borderRadius: '1vw', display: "flex", flexDirection: 'column', margin: '2%' }}>
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
                        <p style={{ margin: 0, fontSize: '.8vw' }}>{oldPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}  