import { SetStateAction } from "react";
import { AddCircleIcon } from "../../Icons";
import { AddButton, Form, InputStyled, LabelStyled } from "../../Pages/Todo/style";

interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleChange: (e: { target: { value: SetStateAction<string> } }) => void
    htmlFor: string
    type: string
    name: string
    id: string
    placeholder: string
    maxLength: number
    showButton: boolean
    roundborder: boolean
}

export const BaseForm: React.FC<FormProps> = ({ 
    handleSubmit, 
    handleChange,
    htmlFor,
    type,
    name,
    id,
    placeholder,
    maxLength,
    showButton,
    roundborder,
}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <LabelStyled htmlFor={htmlFor}>
                <InputStyled
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    onChange={handleChange}
                    roundborder={roundborder}
                />
            </LabelStyled>
            {showButton &&
                <AddButton type="submit">
                    <AddCircleIcon sx={{ height: 32, width: 32 }} />
                </AddButton>
            }
        </Form>
    );
}
