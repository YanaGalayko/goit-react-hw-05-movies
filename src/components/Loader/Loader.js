import { RotatingLines } from 'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

const Loader = () => {
return (
    <LoaderStyled>
       <RotatingLines
       strokeColor="grey"
       strokeWidth="5"
       animationDuration="0.75"
       width="96"
       visible={true}/>
    </LoaderStyled>
)
}

export default Loader