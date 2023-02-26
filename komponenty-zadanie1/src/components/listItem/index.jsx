import { StyleListItem } from "./listItem.style";

const ListItem = (props) => {
    return (
        <StyleListItem>{props.name}</StyleListItem>
    )
}

export default ListItem;