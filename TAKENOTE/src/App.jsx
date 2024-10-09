import React, { useState, useEffect } from 'react';
import Notes from './components/Notes';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');
    const [title, setTitle] = useState('');
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes,counter]);

    const inCounter = () => {
        setCounter(prev => prev + 1)
    }
    const decCounter = () => {
        setCounter(prev => prev - 1)
    }


    const addNote = () => {
        if (input && title) {
            const newNote = {
                id: Date.now(),
                title: title,
                text: input,
                date: new Date().toISOString(),
                counter

            };
            setNotes([...notes, newNote]);
            setInput('');
            setTitle('');
            inCounter();
        }
    };

    const deleteNote = (id) => {
        decCounter()
        setNotes(notes.filter(note => note.id !== id));
    };

    const editNote = (id, newText) => {
        setNotes(notes.map(note =>
            note.id === id ? { ...note, text: newText } : note
        ));
    };


    return (
        <div className='w-full h-[screen] flex flex-col items-center bg-slate-900 py-5 px-2'>

            <div className='mb-5 flex flex-col w-full  items-center justify-center mt-2 gap-3'>

                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    className='mr-2 p-2 rounded bg-slate-800 text-xl text-white w-fit text-center'
                />
                <textarea
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Add a new note'
                    className='px-4  bg-slate-800 text-white text-xl outline-none rounded-md h-[400px]  w-full '
                />
                <button
                    className='bg-blue-500 rounded-md px-2 py-1  w-fit hover:bg-blue-600 duration-300'
                    onClick={addNote}
                >
                    Add Note
                </button>

            </div>

            {/* Display All Notes */}
            <div className='px-8 mr-auto w-fit grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {notes.map(note => (
                    <Notes
                        key={note.id}
                        note={note}
                        onDelete={deleteNote}
                        onEdit={editNote}
                        decCounter={decCounter}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
