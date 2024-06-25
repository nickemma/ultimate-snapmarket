"use client"

import { Session } from "next-auth"
import { signOut } from "next-auth/react"

export const UserButton = ({user}: Session) =>  {
    return (
      <div>
        <h2>{user?.email}</h2>
        <button onClick={() => signOut()}></button>
      </div>
    )
}