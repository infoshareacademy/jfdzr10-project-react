import { Style } from "./header.style";

const Header = (props) => {
    return (
      <Style className='header'>
        <h1>{props.text}</h1>
        {props.children}
      </Style>
    );
  };
  
  export default Header;