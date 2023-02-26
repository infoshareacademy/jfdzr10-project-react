import { Style } from "./footer.style"

const Footer = (props) => {
    return (
        <Style className="footer">
            <span>{props.text}</span>
            {props.children}
        </Style>
    );
};

export default Footer;