const List: React.FC<{ numbers: number[]; type: 'a' | 'b' }> = ({ numbers, type }) => {
  const listItems = numbers.map((number, index) => <ListItem key={type + index.toString()} value={number} />);

  return <ul>{listItems}</ul>;
};

const ListItem = ({ value }: { value: number }) => <li>{value}</li>;

export default List;
