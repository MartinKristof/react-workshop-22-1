const List = ({ numbers, type }: { numbers: number[]; type: 'a' | 'b' }) => {
  const listItems = numbers.map((number, index) => <ListItem key={type + index.toString()} value={number} />);

  return <ul>{listItems}</ul>;
};

const ListItem = ({ value }: { value: number }) => <li>{value}</li>;

export default List;
