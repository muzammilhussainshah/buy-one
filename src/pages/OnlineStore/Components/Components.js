import React,
{ useState } from 'react';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AdjustIcon from '@mui/icons-material/Adjust';

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