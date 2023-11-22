import styled from "styled-components";

const BoardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ItemBase = styled.li`
  padding: 15px;
  font-weight: 700;
  width: 90%;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: all ease 300ms;
  &:hover {
    background: ${(props) => props.theme.lightestPurple};
    color: ${(props) => props.theme.purple};
  }
`;

const BoardListItem = styled(ItemBase)`
  color: #848fa1;
  &.active {
    background: ${(props) => props.theme.purple};
    color: white;
    &:hover {
      background: ${(props) => props.theme.lightestPurple};
      color: ${(props) => props.theme.purple};
    }
  }
`;

const AddNewBoard = styled(ItemBase)`
  color: ${(props) => props.theme.purple};
  margin-bottom: auto;
`;

export { BoardList, BoardListItem, AddNewBoard };
