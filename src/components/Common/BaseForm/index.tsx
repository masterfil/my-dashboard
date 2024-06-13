import { AddCircleIcon } from "../../Icons";
import { AddButton, Form, InputStyled, LabelStyled } from "./style";

interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    htmlFor: string
    type: string
    name: string
    id: string
    placeholder: string
    maxLength: number
    showButton: boolean
    borderRound?: boolean
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
    borderRound = false,
}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <LabelStyled htmlFor={htmlFor}></LabelStyled>
            <InputStyled
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={handleChange}
                borderRound={borderRound}
            />
            {showButton &&
                <AddButton type="submit">
                    <AddCircleIcon sx={{ height: 32, width: 32 }} />
                </AddButton>
            }
        </Form>
    );
}
