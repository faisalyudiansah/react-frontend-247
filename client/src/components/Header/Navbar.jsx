import React from 'react'

export const Navbar = ({ setTab }) => {

  const onChangeTab = (valueTab) => {
    setTab(valueTab)
  }

  return (
    <div id='navbar' className="navbar bg-base-200 p-5">
      <div className="flex">
        <a className="btn btn-ghost text-xl text-bold" onClick={() => onChangeTab(0)}>Frontend 247</a>
      </div>
      <div className="flex-none ml-10">
        <ul className="menu menu-horizontal px-1">
          <li><a onClick={() => onChangeTab(0)}>Home</a></li>
        </ul>
      </div>
    </div>
  )
}
