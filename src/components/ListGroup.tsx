import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 10px;
`;

interface ListProps {
  active: boolean;
}

const ListItem = styled.li<ListProps>`
  margin-bottom: 6px;
  padding: 4px;
  padding-left: 10px;
  background-color: ${(props) => (props.active ? "blue" : "none")};
  color: ${(props) => (props.active ? "white" : "black")};
`;
interface Props {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
      {/* <h1>{heading}</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "pl-3 text-md bg-[#0F4C81] text-white"
                : "pl-3 border-b border-black-200 text-md "
            }
          >
            {item}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default ListGroup;
