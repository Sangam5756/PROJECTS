import React, { useState } from 'react';

const Notes = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleEdit = () => {
    onEdit(note.id, editedText);
    setIsEditing(false);
  };

  return (

      <div className='bg-slate-400 text-black w-[300px] h-[200px] rounded-md '>

        <div className='px-2'>
          <h1 className='text-center text-2xl font-semibold'>{note.title}</h1>

          <p className='ml-auto w-fit font-semibold text-sm '>Date: {new Date(note.date).toLocaleDateString()}</p>

          {isEditing ? (
            <textarea
              type='text'
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className='px-2  bg-slate-100 rounded-md h-24 mb-2 w-full border'
            />
          ) : (
            <p className='px-2 text-center rounded-md h-24 mb-2 w-full border'>{note.text}</p>
          )}
        </div>

        <div className='flex gap-5 px-2 '>
          {isEditing ? (
            <button
              className='bg-green-500 rounded-md px-2 py-1 hover:bg-green-600 duration-300'
              onClick={handleEdit}
            >
              Save
            </button>
          ) : (
            <button
              className='bg-green-500 rounded-md px-2 py-1 hover:bg-green-600 duration-300'
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}

          <button
            className='bg-red-500 rounded-md px-2 py-1 hover:bg-red-600 duration-300'
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>

      </div>
  );
};

export default Notes;
