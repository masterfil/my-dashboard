import React from "react";
import { Form, InputStyled, SaveButton } from "./style";

interface EditFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const EditForm: React.FC<EditFormProps> = ({handleSubmit, value, setValue}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        placeholder="Edit . . ."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={100}
      />
      <SaveButton type="submit">Save</SaveButton>
    </Form>
  );
};
