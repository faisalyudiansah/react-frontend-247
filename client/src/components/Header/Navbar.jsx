import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar bg-base-200 p-5">
      <div className="flex">
        <a className="btn btn-ghost text-xl text-bold">Frontend 247</a>
      </div>
      <div className="flex-none ml-10">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
        </ul>
      </div>
    </div>
  )
}
