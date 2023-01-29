import React from 'react'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'

export default function Home() {
  return (
    <div>
        <CssBaseline/> 
        <NavBar/>
        <Header/>
    </div>
  )
}
