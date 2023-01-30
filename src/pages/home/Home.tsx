import React from 'react'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import Activities from '../../components/activities/Activities'
import NextAnnouncements from '../../components/nextAnnouncements/NextAnnouncements'
import Testimony from '../../components/testimony/Testimony'
import Results from '../../components/results/Results'
import Contribution from '../../components/contribution/Contribution'
import Supporters from '../../components/supporters/Supporters'

export default function Home() {
  return (
    <div>
        <CssBaseline/> 
        <NavBar/>
        <Header/>
        <Activities/>
        <NextAnnouncements/>
        <Testimony/>
        <Results/>
        <Contribution/>
        <Supporters/>
    </div>
  )
}
