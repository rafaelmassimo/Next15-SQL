'use client'

import { UserButton } from '@clerk/nextjs'
import React from 'react'


const UserDropdown = () => {
  return (
    <div >
      <UserButton showName appearance={{
        elements: {
            userButtonOuterIdentifier: {
                color: 'white'
            }
        }
      }} />
    </div>
  )
}

export default UserDropdown

 