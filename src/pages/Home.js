import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import data from '../data/logements.json'
import image from '../assets/img/IMG.png'


const Home = () => {

  const [logementData, setLogementData] = useState([]);

  useEffect(() => {
    setLogementData(data);
  }, []);

  return (
    <div className='container'>
        <Banner image={image} h1='Chez vous, partout et ailleurs' className='section-body' alt='Banner' />
        <Card logementData={logementData} />
    </div>
  )
}

export default Home