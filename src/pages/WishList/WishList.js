import React, {
    useEffect,
    useState
} from 'react';
import './style.css'
import { OrderHeader } from '../ConfirmAddress/Components/Components';
import { cartDummyData } from '../Home/data';
import { Card } from '../../components/card';
import useDrag from '../../components/useDrage';
// import { ScrollMenu } from 'react-horizontal-scrolling-menu/dist/types';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { sliderSection } from '../Home/styles';
import { SliderComp } from '../Home/Components/Components';

function WishList() {
    const [selected, setSelected] = useState("");

    const { dragStart, dragStop, dragMove, dragging } = useDrag();

    const handleItemClick = (itemId) => () => {
        if (dragging) {
            return false;
        }
        setSelected(selected !== itemId ? itemId : "");
    };


    // NOTE: for drag by mouse
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
                <div className='cartHeading productImgContainer'>
                    {/* <CostContainer /> */}
                </div>

            </div >
            {/* <div style={sliderSection()}  > */}
            <div
                style={{ width: '100%' }}
                onMouseLeave={dragStop}>
                <ScrollMenu
                    onMouseDown={() => dragStart}
                    onMouseUp={() => dragStop}
                    onMouseMove={handleDrag}
                >
                    <div className='createAddressSection starCardContainer'
                    >
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
            <SliderComp />
        </>
    );
}


export default WishList;
