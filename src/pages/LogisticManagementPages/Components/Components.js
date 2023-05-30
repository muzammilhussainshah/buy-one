import React,
{ useState } from 'react';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AdjustIcon from '@mui/icons-material/Adjust';

import Colors from '../../../styles/Colors';

export const CartHeader = () => {
    const [selectedBtn, setSelectedBtn] = useState('買一官方運輸')
    const [selectedCategoryBtn, setSelectedCategoryBtn] = useState('買一官方運輸')

    const logisticHeaderBtnClass = (value) => `searchButtonsHover ${selectedCategoryBtn == value && 'priceText'} LogisticManagementCartHeaderLeftLastBtn`

    return (
        <div className='CartHeaderContainer'> 
            <button onClick={() => { setSelectedCategoryBtn('訂單') }} className={logisticHeaderBtnClass(`訂單`)}
                style={{ display: 'flex', fontWeight: "bold", flex: 3 }}
            >{'訂單'}</button>
            <button onClick={() => { setSelectedCategoryBtn('訂單狀態') }} className={logisticHeaderBtnClass(`訂單狀態`)}
                style={{ display: 'flex', fontWeight: "bold", flex: 1, justifyContent: 'flex-end' }}
            >{'訂單狀態'}</button>
            <button onClick={() => { setSelectedCategoryBtn('運費') }} className={logisticHeaderBtnClass(`運費`)}
                style={{ display: 'flex', fontWeight: "bold", flex: 1, justifyContent: 'flex-end' }}
            >{'運費'}</button>
            <button onClick={() => { setSelectedCategoryBtn('操作') }} className={logisticHeaderBtnClass(`操作`)}
                style={{ display: 'flex', fontWeight: "bold", flex: 1, justifyContent: 'flex-end' }}
            >{'操作'}</button>

        </div>
    )
}