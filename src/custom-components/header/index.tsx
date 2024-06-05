import { HeaderDiv, TextDiv } from "./styled";
import amplifyIcon from '../../assets/amplify.png';




const Header: React.FC = ({}) => {
    return (
        <HeaderDiv>
            <>
                <img src={amplifyIcon} style={{ width: '60px', height: '50px' }} />
            </> 
            <TextDiv>
                Ampligy Gen 2 case
            </TextDiv>
        </HeaderDiv>
    );
}

export default Header;