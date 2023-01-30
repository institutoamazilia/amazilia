import React from 'react'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import Activities from '../../components/activities/Activities'
import NextAnnouncements from '../../components/nextAnnouncements/NextAnnouncements'
import Testimony from '../../components/testimony/Testimony'
import Results from '../../components/results/Results'

export default function Home() {
  return (
    <div style={{scrollBehavior: "smooth"}}>
        <CssBaseline/> 
        <NavBar/>
        <Header/>
        <Activities/>
        <NextAnnouncements/>
        <Testimony/>
        <Results/>
    </div>
  )
}
