import React, { useState } from 'react';
import Swal from 'sweetalert2'

export const InputAndTable = () => {
  const [newWord, setNewWord] = useState('');
  const [valueTable, setValueTable] = useState([
    {
      id: 1,
      kata: 'Faisal',
      jumlahKata: 6,
    },
    {
      id: 2,
      kata: 'Ronaldo',
      jumlahKata: 7,
    }
  ]);

  const newInput = () => {
    if (!newWord || newWord.trim() === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Text kamu tidak valid",
      });
      return;
    }
    const trimmedWord = newWord.trim()
    const lastId = valueTable[valueTable.length - 1].id;
    const newId = lastId + 1;

    const newInput = {
      id: newId,
      kata: trimmedWord,
      jumlahKata: trimmedWord.length,
    };
    setValueTable([...valueTable, newInput]);
    setNewWord('');
  };

  const handleDelete = (id, kata) => {
    Swal.fire({
      title: `Apa kamu ingin menghapus ${kata}?`,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTable = valueTable.filter((item) => item.id !== id);
        setValueTable(updatedTable);
        Swal.fire("Saved!", "", "success");
      }
    });
  };

  return (
    <>
      <div className='flex flex-1 items-center'>
        <input
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          className="mb-2 h-14 flex-1 rounded-l-xl text-black px-4 focus:outline-none"
          placeholder="Input your text"
        />
        <button onClick={newInput} className="mb-2 block h-14 flex-1 rounded-r-xl text-white bg-yellow-500 px-4">
          Add
        </button>
      </div>
      <div className='bg-base-300 m-20 rounded-2xl'>
        <div className="overflow-x-auto m-10">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Kata</th>
                <th>Jumlah Kata</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className='text-black'>
              {valueTable.map((el) => (
                <tr key={el.id}>
                  <th>{el.id}</th>
                  <td>{el.kata}</td>
                  <td className='text-center'>{el.jumlahKata}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(el.id, el.kata)}
                      className='btn bg-red-500 text-white'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
