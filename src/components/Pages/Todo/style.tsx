import styled from "styled-components";

export const TodoContainer = styled.div`
    padding: 2rem;
    width: 680px;
`

export const InputStyled = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 .5rem;
    border-radius: 6px;
    border: 1px solid #d3d3d36b;
    font-size: 1rem;
    box-sizing: border-box;
`

export const AddButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
        
    & > svg:hover {
        color: #4b4b4b;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
`

export const ListItemContainer = styled.ul`
    list-style: none;
    width: 648px;
`

export const TodoItem = styled.li<{isChecked: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 12px;
    border: 1px solid lightgray;
    border-radius: 6px;
    margin-bottom: 1rem;
    background-color: ${({ isChecked }) => isChecked ? '#f0f0f0' : 'white'};
    transition: background-color .3s;
`

export const TodoInput = styled.input`
  border: none;
  width: 1rem;
  height: 1rem;
  margin: 0;
  cursor: pointer;
`;

export const LabelStyled = styled.label`
    width: 100%;
`;

export const TextWrapper = styled.div`
    margin-bottom: 1rem;
    & > p {
        font-size: .9rem;
    }
`;

export const TextTodo = styled.p<{isChecked: boolean}>`
    max-width: 500px;
    word-wrap: break-word;
    font-size: 1rem;
    text-decoration: ${({ isChecked }) => isChecked ? 'line-through' : 'none'};
    color: ${({ isChecked }) => isChecked ? 'gray' : 'black'};
    transition: color .3s, text-decoration .3s;
`;

export const TodoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TodoActionsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
    cursor: pointer;
    
    & > svg:hover {
        color: #4b4b4b;
    }
`;

export const SaveButton = styled.button`
    font-size: 1rem;
    border-radius: 4px;
    padding: 0 4px;
    cursor: pointer;
    background-color: #4b4b4b;
    color: white;
`