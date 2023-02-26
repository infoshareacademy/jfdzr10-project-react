import users from "../../users";
import ListItem from "../listItem";

const List = () => {
    // users.forEach(element => console.log(element));
    return (
    <ul>{users.map(element => (
        <ListItem name={element.name} key={element.id} />
    ))}</ul>
    );
};

export default List;


