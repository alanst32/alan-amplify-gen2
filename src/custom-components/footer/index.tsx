import { FooterDiv, TextDiv } from "./styled";


type ComponentProps = {
    signOut: () => void;
};  

const Footer: React.FC<ComponentProps> = ({signOut}) => {
    return (
        <FooterDiv>
           <TextDiv>
            🥳 App successfully hosted.
            <br />
            <a href='https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates'>
              Review next step of this tutorial.
            </a>
          </TextDiv>
          <div>
            <button onClick={signOut}>Sign out</button>
          </div>
        </FooterDiv>
    );
}

export default Footer;