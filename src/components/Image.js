// @app
// import {FastImage} from 'react-fast-image';
import LazyLoad from 'react-lazyload';
import { logoImg } from './styles';

const Imag = ({ width }) => {
    return (
        <LazyLoad height={150}>
            <img src='/images/logo.jpg' alt="My Image" style={logoImg(width)} />
        </LazyLoad>
    );
};
export default Imag;
