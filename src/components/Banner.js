// @app
import Imag from '../../src/components/Image';
import Colors from '../styles/Colors';
// import {FastImage} from 'react-fast-image';

const Banner = ({ }) => {
  return (
    <div style={{ height: '10vw', flexDirection: 'row', display: 'flex' }}>
      <div style={{ flex: 1.1, margin: 0 }}>
        {/* <img src='/images/logo.jpg' alt="My Image" style={'100%')} /> */}
        <Imag width={'100%'} />
      </div>
      <div style={{ backgroundColor: Colors.bg, flex: 8.9, flexDirection: 'row', display: 'flex' }}>

        <div style={{ margin: '.1vw' }}>
          <p style={{ textAlign: 'center', backgroundColor: 'black', textDecoration: 'underline', fontWeight: 'bold', color: 'white', margin: 0, fontSize: '1.5vw' }}>
            ad
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
          <p style={{ fontSize: '1.5vw' }}>
            ADVERTISING BANNER
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
