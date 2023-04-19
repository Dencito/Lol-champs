import React, { useState } from "react";
import { useEffect } from "react";
import ChampsItem from "./ChampsItem";
import { Input, Space, Spin } from "antd";

const ChampsList = () => {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getChamps = async () => {
      const response = await fetch(
        "http://ddragon.leagueoflegends.com/cdn/13.8.1/data/es_AR/champion.json"
      );
      const data = await response.json();
      setChampions(Object.values(data.data).filter((item) => {
        return item.id.toLowerCase().includes(search.toLowerCase());
      }))
      setLoading(true)
    };
    getChamps();
  }, [search]);

  if (!loading) {
    return <Space size="middle" className="loading">
    <Spin size="large" />
  </Space>;
  }

  return (
    
    <div className=" container-fluid">
        
        <div className="search">
        <input type="text" className="search" placeholder="Champion: akali" onChange={(e)=> setSearch(e.target.value)} />
        </div>
        {champions.length === 0  ? <h1 className="mt-5">No encontramos al champion {search}</h1>:
        (
            <div className="d-flex gap-4 justify-content-between flex-wrap">
        {
            Object.values(champions).map(e => 
                <ChampsItem key={e.id} data={e} />
               )
        }
        </div>
        )
        }
        
        
    </div>
  );
};

export default ChampsList;
