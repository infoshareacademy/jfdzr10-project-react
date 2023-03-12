import { ListElement } from './ListElement';

export const List = ({ list }) => {
  const renderList = () =>
    list.map((listElement) => <ListElement key={listElement.id} name={listElement.name} email={listElement.email} />);

  return (
    <div>
      <h2>Lista osób:</h2>
      <ul>{renderList()}</ul>
    </div>
  );
};
