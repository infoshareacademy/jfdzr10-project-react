import ListItem from "../ListItem";
import data from "../../assets/list.json";
import { UListStyle } from "./List.style";

const List = () => {
  const forKey = Math.floor(Math.random * 1500);
  return (
    <UListStyle>
      {data.map((m) => (
        <ListItem text={m.name} key={m.phone + forKey} />
      ))}
    </UListStyle>
  );
};
export default List;
