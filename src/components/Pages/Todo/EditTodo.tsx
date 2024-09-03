import React, { useState } from 'react'
import { EditForm } from '../../Common/EditForm'
import { Todos } from './Todos'

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
        <EditForm handleSubmit={handleSubmit} value={value} setValue={setValue} />
    )
}