import React,
{ useState } from 'react';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AdjustIcon from '@mui/icons-material/Adjust';

import Colors from '../../../styles/Colors';

export const StoreCategory = ({ title, minus }) => {

    const [changeIcon, setChangeIcon] = useState(false)

    return (
        <div
            className='StoreCategoryContainer buttonsHover'
            onClick={() => { setChangeIcon(!changeIcon) }}>
            {changeIcon ?
                <RemoveCircleOutlineIcon
                    className='StoreCategoryIcon'
                />
                :
                < AdjustIcon
                    className='StoreCategoryIcon'
                />
            }
            <p
                className='AddressInputTitle2 removeMargin' >{title}</p>
        </div>
    )
}

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