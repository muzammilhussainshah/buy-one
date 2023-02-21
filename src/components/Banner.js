// @app
import Imag from '../../src/components/Image';
// import {FastImage} from 'react-fast-image';

const Banner = ({ }) => {
  return (
    <div style={{ backgroundColor: 'green', flex: 1, flexDirection: 'row', display: 'flex' }}>
      <div style={{ backgroundColor: 'yellow', flex: 1.1,margin:0 }}>
        <Imag width={'100%'} />
      </div>
      <div style={{ backgroundColor: 'pink', flex: 8.9, flexDirection: 'row', display: 'flex' }}>

        <div style={{ backgroundColor: 'black', width: '3%', height: '19%', marginLeft: 5 }}>
          <p style={{ textAlign: 'center', textDecoration: 'underline', fontWeight: 'bold', color: 'white', margin: 0, fontSize: '1.5vw' }}>
            ad
          </p>
        </div>
        <div style={{ backgroundColor: 'green', flex: 1, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
          <p style={{ backgroundColor: 'red', fontSize: '1.5vw' }}>
            ADVERTISING BANNER
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
