import React, {
  useEffect,
  useState
} from 'react';

import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import {   TextField } from '@mui/material';
// import Button from '@material-ui/core/Button';
import {
  collection,
  query,
  addDoc,
  limit,
  startAfter,
  getDocs
} from "@firebase/firestore";

import Banner from '../../components/Banner'
import Colors from "../../styles/Colors"
import MyButton from '../../components/MyButton';
import useDrag from '../../components/useDrage';
import { Card } from '../../components/card';
import { db } from '../../firebase';
import { Cart } from './Components/Components';
import '../../App.css'
import { bannerContainer, bannerSection, HorizontalSliderContainer, inputStyle, leftPanel, leftPanelButtonContainer, leftPanelButtonStyle, leftPanelContainer, leftPanelHeaderSection, leftPanelHeading, leftPanelRightIcon, leftPanelstyle, newContainer, newText, rightButton, searchBar, searchBarBtn, searchBarContainer, searchBarSection, sliderContainer, sliderHeading, sliderSection } from './styles';
import { Header } from '../../components/Header';
// import { styles } from './styles';


function Home() {
  const [selected, setSelected] = useState("");
   const [docs, setDocs] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loader, setLoader] = useState(false);
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  // if we wana add more data to db so we can use this function 
  const addData = async (data) => {
    const ref = await collection(db, "cart")
    let array = data
    await addDoc(ref, { cartdata: array })
  }
  // if we wana add more data to db so we can use this function 


  useEffect(() => {
    const q = query(
      collection(db, 'cart'),
      limit(20)
    );
    getDocs(q).then((snapshot) => {
      setDocs(snapshot.docs);
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
    });
  }, []);

  const loadMore = async () => {
    setLoader(true)
    setTimeout(async () => {
      const q = await query(
        collection(db, 'cart'),
        startAfter(lastVisible),
        limit(20)
      );
      await getDocs(q).then((snapshot) => {
        setDocs([...docs, ...snapshot.docs]);
        setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      });

      setLoader(false)
    }, 1000);
  };


  var settings = {
    arrows: false,
    focusOnSelect: true,
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    speed: 500

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

  const handleItemClick = (itemId) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };
 

  return (
    <div style={{ backgroundColor: Colors.bg }}>
     
      <div
        style={searchBarSection()}
      >
        <div
          style={searchBarContainer()}
        >
          <div style={searchBar()}>
            <TextField
              variant="standard"
              placeholder='搜尋商品'
              sx={inputStyle()}
              InputProps={{
                disableUnderline: true,
                style: { fontSize: '1vw' }
              }}
            />
            <button
              className='searchButtonsHover'
              style={searchBarBtn()}>
              {`搜尋`}
            </button>
          </div>
        </div>
        <div
          style={leftPanelButtonContainer()}
        >
          {['食品及飲品', '酒類', '美食預訂', '調味料', '水果', '醬料', '個人護理', '寵物食品', '更多'].map((item) => {
            return (
              <MyButton
                style={{ fontSize: '0.9vw', border: '0px', }}
                label={<span style={{ margin: 0 }}>{item}</span>} />
            )
          })}
          <MyButton
            style={rightButton()}
            label="登 " />
        </div>
      </div>
      <div
        style={leftPanel()}
      >
        <div
          style={leftPanelHeaderSection()}
        >
          <h3 style={leftPanelHeading()}>{`分類`}</h3>
          <div style={leftPanelContainer()}>
            {['飲品、即沖飲品', '酒類、酒精飲品', '美食預訂/到會', '美食預訂/到會', '罐頭、醃製食品', '調味料、醬料', '零食、餅乾', '甜品', '烘焙', '乾貨', '嬰幼兒奶粉'].map((item, index) => {
              return (
                <MyButton
                  icon={<ArrowForwardIosIcon sx={leftPanelRightIcon()} />}
                  style={leftPanelButtonStyle()}
                  label={<span style={leftPanelstyle()}>{item}</span>} />
              )
            })}
          </div>
        </div>
        <div
          style={HorizontalSliderContainer()}
        >
          <div style={sliderContainer()}>
            <h3 style={sliderHeading()}>最新上架</h3>
            <div style={newContainer()}>
              <p style={newText()}>NEW!</p>
            </div>
          </div>
          <div style={sliderSection()}  >
            <div
              style={{ width: '100%' }}
              onMouseLeave={dragStop}>
              <ScrollMenu
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
              >
                {docs?.length > 0 && docs.map((doc) => {
                  const { id, icon, title, ProductName, price, oldPrice } = doc.data().cartdata
                  return (
                    <Card
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
              </ScrollMenu>
            </div>
          </div>
        </div>
      </div>

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
      <div
        style={{ width: '95%', margin: '0px auto', backgroundColor: Colors.white }}
      >
        <div style={{ height: '5vw', display: "flex", alignItems: 'center' }}>

          <h3 style={{ margin: '2vw', fontSize: '1.5vw', fontWeight: 'normal' }}>{`猜你喜歡`}</h3>
          <div style={{ height: '1.8vw', backgroundColor: Colors.red, width: '3.2vw', borderRadius: 5, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <p style={{ fontSize: '.9vw', color: Colors.white }}>NEW!</p>
          </div>


        </div>
        <div >
          <InfiniteScroll
            dataLength={docs.length}
            next={loadMore}
            hasMore={true}
            style={{
              display: 'flex', flexWrap: 'wrap', padding: '.5vw',
              //  maxHeight: '100vw' 
            }}
            className='scrollBar'
          >
            {docs.map((doc, index) => {

              const { id, icon, title, ProductName, price, oldPrice } = doc.data().cartdata
              return (
                <>
                  <Cart
                    title={title}
                    icon={icon}
                    ProductName={ProductName}
                    price={price}
                    oldPrice={oldPrice}
                    disableBtn
                  />
                </>
              )
            })}
          </InfiniteScroll>
          {loader &&
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
              <img
                style={{ height: '10vw', width: '10vw' }}
                src="https://static.wixstatic.com/media/369c26_b396f2977e5a40839e2fc77a6f9aac2b~mv2.gif"
                alt="GIF image" />
            </div>
          }

        </div>
      </div>

    </div >
  );
}


export default Home;
