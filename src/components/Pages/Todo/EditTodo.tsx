import React, { useState } from 'react'
import { Todos } from '.'
import { EditForm } from '../../Common/EditForm'

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