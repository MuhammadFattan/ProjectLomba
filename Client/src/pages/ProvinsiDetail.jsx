import React from 'react'
import Maps from '../components/provinsiDetail/Maps'
import Budaya from '../components/provinsiDetail/Budaya'
import Kuliner from '../components/provinsiDetail/Kuliner'
import Pariwisata from '../components/provinsiDetail/Pariwisata'
import Tokoh from '../components/provinsiDetail/Tokoh'
import { useAppContext } from '../contexts/AppContext'

const ProvinsiDetail = () => {
  const { isDarkMode } = useAppContext();

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-5`}>
      <Maps />
      <Budaya />
      <Kuliner />
      <Pariwisata />
      <Tokoh />
    </div>
  )
}

export default ProvinsiDetail
