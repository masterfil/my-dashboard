import { SetStateAction } from "react";
import { BaseForm } from "../../Common/BaseForm";

interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleChange: (e: { target: { value: SetStateAction<string> } }) => void
}

export const FormTodo: React.FC<FormProps> = ({ handleSubmit, handleChange }) => {
    return (
        <BaseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            htmlFor="todo"
            type="text"
            name="todo"
            id="todo"
            placeholder="Write your next task. . ."
            maxLength={100}
            showButton={true}
        />
    );
}
