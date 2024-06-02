import { SetStateAction } from "react";
import { AddCircleIcon } from "../../Icons";
import { AddButton, InputStyled, Form, LabelStyled } from "./style";

interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void     
    handleChange: (e: { target: { value: SetStateAction<string> } }) => void
}

export const FormTodo: React.FC<FormProps> = ({ handleSubmit, handleChange }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <LabelStyled htmlFor="todo">
                <InputStyled
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next task. . ."
                    maxLength={100}
                    onChange={handleChange}
                />
            </LabelStyled>
            <AddButton type="submit">
                <AddCircleIcon sx={{ height: 32, width: 32 }} />
            </AddButton>
        </Form>
    );
}
