import { BaseForm } from "../../Common/BaseForm";

interface HabitFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HabitForm: React.FC<HabitFormProps> = ({
  handleChange,
  handleSubmit,
}) => {
  return (
    <BaseForm
      htmlFor="habit"
      type="text"
      name="habit"
      id="habit"
      placeholder="Add new habit. . ."
      maxLength={100}
      showButton
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default HabitForm;
