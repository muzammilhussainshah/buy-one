import React, {
    useState
} from 'react';

import { cartDummyData } from '../Home/data';
import { Card } from '../../components/card';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { SliderComp } from '../Home/Components/Components';
import useDrag from '../../components/useDrage';
import './style.css'
import Colors from '../../styles/Colors';

function WishList() {
    const [selected, setSelected] = useState("");

    const { dragStart, dragStop, dragMove, dragging } = useDrag();

    const handleItemClick = (itemId) => () => {
        if (dragging) {
            return false;
        }
        setSelected(selected !== itemId ? itemId : "");
    };
    const handleDrag = ({ scrollContainer }) => (
        ev
    ) =>
        dragMove(ev, (posDiff) => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollLeft += posDiff;
            }
        });
    return (
        <>
            <div className='confirmAddressContainer' style={{ display: 'flex' }}>
                <div className='cartHeading'>
                    心願清單
                    <p className='allProduct fontWeightNormal'>（全部20）</p>
                </div>
            </div >
            <div
                style={{ width: '100%' }}
                onMouseLeave={dragStop}>
                <ScrollMenu
                    onMouseDown={() => dragStart}
                    onMouseUp={() => dragStop}
                    onMouseMove={handleDrag}
                >
                    <div className='createAddressSection starCardContainer'>
                        {
                            cartDummyData?.map((item) => {
                                const { id, icon, title, ProductName, price, oldPrice } = item
                                return (
                                    <Card
                                        starEnable
                                        title={title}
                                        ProductName={ProductName}
                                        price={price}
                                        icon={icon}
                                        oldPrice={oldPrice}
                                        itemId={id}
                                        disableBtn
                                        key={id}
                                        onClick={handleItemClick(id)}
                                        selected={id === selected}
                                    />
                                )
                            })
                        }
                    </div>
                </ScrollMenu>
            </div >
        </>
    );
}


export default WishList;
