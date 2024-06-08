import { SetStateAction } from 'react'
import { BaseForm } from '../../Common/BaseForm'
import { HabitFormContaier } from './style'

interface HabitFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleChange: (e: { target: { value: SetStateAction<string> } }) => void
}

const HabitForm: React.FC<HabitFormProps> = ({ handleChange, handleSubmit }) => {
    return (
        <HabitFormContaier>
            <BaseForm
                htmlFor="habit"
                type="text"
                name="habit"
                id="habit"
                placeholder="Add new habit. . ."
                maxLength={100}
                showButton={true}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </HabitFormContaier>
    )
}

export default HabitForm