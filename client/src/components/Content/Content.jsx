import React from 'react'
import { ContentDefault } from './ContentDefault'

export const Content = ({ tab }) => {
  return (
    <>
      {tab === 0 && (
        <ContentDefault />
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
