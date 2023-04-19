import React from 'react'
import { Link } from 'react-router-dom'
import "./Champions.css"

const ChampsItem = ({data}) => {
  return (
    <Link to={`/champion/${data.id}`} className='col-xl-3 col-xxl-2 mx-auto link title card' style={{textDecoration: "none"}}>
        <h2 className='text-center'>
            {data.id}
        </h2>
        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`} alt="" width="100%" height="500px" />
        
        </Link>
  )
}

export default ChampsItem