import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Image, Popover, Space, Spin } from "antd";
const Single = () => {
  const { name } = useParams();
  const [champion, setChampion] = useState({});
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getChamp = async () => {
      const res = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.8.1/data/es_AR/champion/${name}.json`
      );
      const data = await res.json();
      setChampion(data.data[name]);
      setLoading(true)
    };
    getChamp();
  }, [name]);
  if (!loading) {
      return <Space size="middle" className="loading">
      <Spin size="large" />
    </Space>;
    }
  return (
    <div className="container my-5">
      <div className="row mb-5">
        <Link to="/" className="link h1">
          ←
        </Link>
      </div>
      <div className="row">
        <div className="col-md-8 col-lg-4 col-xl-3 mx-auto">
          <img
            className="hover-img"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion?.id}_0.jpg`}
            alt=""
            width="100%"
            height="500px"
          />
        </div>
        <div className=" col-md-10col-lg-8 col-xl-9">
          <h1>{champion?.name}</h1>
          <p>{champion?.lore}</p>
          <h2>Habilidades</h2>
          <div className="col-12 d-flex gap-5 flex-wrap">
            <div className="spell">
              <Popover
                color="#D0A85C"
                content={champion?.passive?.description}
                placement="bottom"
                title="Pasiva"
              >
                <img
                  className="hover-img-spell"
                  src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/passive/${champion?.passive?.image?.full}`}
                  alt=""
                />
              </Popover>
            </div>
            {champion.spells?.map((spell, i) => (
              <div className="spell" key={i}>
                <Popover
                  color="#D0A85C"
                  content={spell.description}
                  placement="bottom"
                  title={spell.name}
                >
                  <img
                    
                    className="hover-img-spell"
                    src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${spell?.image?.full}`}
                    alt=""
                  />
                </Popover>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <h2>Skins</h2>
        <div className="skins d-flex flex-wrap flex-wrap">
            {champion?.skins?.map((champion, i) => (
                <div key={i} className="skin col-md-6 col-xl-5 mx-auto my-2">
                    <h3>{champion.name}</h3>
                    <Image className="col-12 hover-img" key={i} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${champion?.num}.jpg`} alt="" height="300px"/>
                </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
