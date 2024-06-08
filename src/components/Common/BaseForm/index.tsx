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
    roundBorder?: boolean
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
    showButton = true,
    roundBorder = false
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
                    roundBorder={roundBorder}
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
