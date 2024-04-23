import React, { useState } from 'react'
import Swal from 'sweetalert2'

export const Rectangle = () => {
  const [newNumber, setNewNumber] = useState("");
  const [squares, setSquares] = useState([]);
  const [lastPage, setLastPage] = useState(null)
  const [pageNumber, setPageNumber] = useState(1);
  const squaresPerPage = 100;

  const handleAddButtonClick = () => {
    setLastPage(newNumber)
    const num = parseInt(newNumber);
    const squaresArray = Array.from({ length: num }, (_, index) => index + 1);
    setSquares(squaresArray);
    setPageNumber(1)
  };

  const startIndex = (pageNumber - 1) * squaresPerPage;
  const endIndex = Math.min(startIndex + squaresPerPage, squares.length);
  const visibleSquares = squares.slice(startIndex, endIndex);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.trim() === '') {
      setNewNumber('');
      return;
    }
    if (inputValue.toLowerCase().includes('e')) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Input harus angka!',
      });
      setNewNumber('');
      setSquares([])
      return;
    }
    const numericValue = parseInt(inputValue);
    if (isNaN(numericValue) || parseFloat(numericValue) > 10000) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: isNaN(numericValue) ? 'Input harus angka!' : 'Maksimal input adalah 10000',
      });
      setSquares([])
      setNewNumber('');
      return;
    }
    if (inputValue.trim() === '') {
      setNewNumber('');
      return;
    }
    setNewNumber(inputValue);
  };

  const goToLastPage = () => {
    const totalPages = Math.ceil(squares.length / squaresPerPage);
    setPageNumber(totalPages);
  };

  return (
    <>
      <div className='flex gap-28'>
        <div className='flex flex-1 items-center'>
          <input
            value={newNumber}
            onChange={handleInputChange}
            className="mb-2 h-14 flex-1 rounded-l-xl text-black px-4 focus:outline-none"
            placeholder="Input your number..."
          />
          <button onClick={handleAddButtonClick} className="mb-2 block h-14 flex-1 rounded-r-xl text-white bg-yellow-500 px-4">
            Add
          </button>
        </div>
        <div className='flex flex-col justify-center'>
          <div className='bg-base-300 w-[600px] h-[650px] p-10'>
            <div className='font-bold text-xl text-yellow-500'>Result :</div>
            <div className="mt-4 flex flex-wrap justify-center">
              {visibleSquares.map((squareNumber) => (
                <div
                  key={squareNumber}
                  className="w-9 h-9 bg-blue-500 m-2 flex items-center justify-center text-center"
                >
                  {squareNumber}
                </div>
              ))}
            </div>
          </div>
          {squares.length > squaresPerPage && (
            <div className="mt-4">
              <button
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber === 1}
                className={`mr-2 px-3 py-1 rounded ${pageNumber === 1 ? "bg-yellow-700" : "bg-yellow-500"}`}
              >
                Prev
              </button>
              <button
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={endIndex >= squares.length}
                className={`px-3 py-1 rounded ${endIndex >= squares.length ? "bg-yellow-700" : "bg-yellow-500"}`}
              >
                Next
              </button>
              {lastPage > 200 && (
                <button
                  onClick={goToLastPage}
                  disabled={endIndex >= squares.length}
                  className={`ml-2 px-3 py-1 rounded ${endIndex >= squares.length ? "bg-yellow-700" : "bg-yellow-500"}`}
                >
                  Last
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
