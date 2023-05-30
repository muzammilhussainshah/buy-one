// @app
// import {FastImage} from 'react-fast-image';
import LazyLoad from 'react-lazyload';
import { logoImg } from './styles';

const Imag = ({ width }) => {
    return (
            <img src={require('../assets/logo.JPG')} alt="My Image" style={logoImg(width)} />
    );
};
export default Imag;
