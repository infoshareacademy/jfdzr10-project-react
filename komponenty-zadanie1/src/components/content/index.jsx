import { Style } from "./content.style";

const Content = (props) => {
    return (
        <Style className='content'>
            <ul>{props.text}</ul>
            {props.children}
        </Style>
    );
};

export default Content;