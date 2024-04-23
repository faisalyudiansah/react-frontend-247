import React from 'react'

export const Content = ({ setTab, tab }) => {
  return (
    <>
      {tab === 0 && (
        <div>Content 0</div>
      )}
      {tab === 1 && (
        <div>Content 1</div>
      )}
      {tab === 2 && (
        <div>Content 2</div>
      )}
    </>
  )
}
