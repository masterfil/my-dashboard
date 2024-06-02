import React, { useState } from 'react'
import { Todos } from '.'
import { Form, InputStyled, SaveButton } from './style'

interface EditTodoProps {
    todo: Todos
    editTodo: (value: string, id: string) => void
}

export const EditTodo: React.FC<EditTodoProps> = ({todo, editTodo}) => {

    const [value, setValue] = useState(todo.text)

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        editTodo(value, todo.id)
        setValue('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputStyled type="text" placeholder="Edit . . ." value={value} onChange={(e) => setValue(e.target.value)} maxLength={100} />
            <SaveButton type="submit">Save</SaveButton>
        </Form>

    )
}