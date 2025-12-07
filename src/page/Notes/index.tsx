import { useEffect, useState } from 'react'

import {
  AddButton,
  CreateArea,
  DeleteButton,
  NoteItem,
  NotesList,
  NoteText,
  Title,
  Wrapper,
} from './styled'

export default function Notes() {
  const [text, setText] = useState('')
  const [notes, setNotes] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('notes')
    if (saved) setNotes(JSON.parse(saved))
  }, [])

  const saveNotes = (newNotes: string[]) => {
    setNotes(newNotes)
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  const addNote = () => {
    if (!text.trim()) return
    const newNotes = [text.trim(), ...notes]
    saveNotes(newNotes)
    setText('')
  }

  const editNote = (value: string, index: number) => {
    const updated = [...notes]
    updated[index] = value
    saveNotes(updated)
  }

  const deleteNote = (index: number) => {
    const updated = notes.filter((_, i) => i !== index)
    saveNotes(updated)
  }

  return (
    <Wrapper>
      <Title>Notes</Title>

      <CreateArea
        placeholder='Write a note...'
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <AddButton onClick={addNote}>Add</AddButton>

      <NotesList>
        {notes.map((note, index) => (
          <NoteItem key={index}>
            <NoteText
              value={note}
              onChange={e => editNote(e.target.value, index)}
            />
            <DeleteButton onClick={() => deleteNote(index)}>X</DeleteButton>
          </NoteItem>
        ))}
      </NotesList>
    </Wrapper>
  )
}
