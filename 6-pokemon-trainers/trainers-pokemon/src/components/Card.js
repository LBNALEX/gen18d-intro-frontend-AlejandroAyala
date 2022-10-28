import React from "react";
function Card({trainer}) {
    return (
        <React.Fragment>
           <div className="card">
        <div className="image-container"></div>
        <div className="card-content">
            <div className="stats">
                <p className="region-tag">{trainer.region}</p>
                <div className="rank">
                    <p className="rank-label">rango</p>
                    <p className="rank-tag">{trainer.rank}</p>
                </div>
            </div>
            <h2 className="trainer-name">{trainer.name}</h2>
            <div className="team">
                <h3 className="team-label">Equipo</h3>
                <div className="team-members">
                    <div className="pokemon-tag">
                        <p className="pokemon-tag--name">Charmander</p>
                        <p className="pokemon-tag--level">Nivel: 24</p>
                    </div>
                    <div className="pokemon-tag">
                        <p className="pokemon-tag--name">Bulbasaur</p>
                        <p className="pokemon-tag--level">Nivel: 31</p>
                    </div>
                    <div className="pokemon-tag">
                        <p className="pokemon-tag--name">Pikachu</p>
                        <p className="pokemon-tag--level">Nivel: 26</p>
                    </div>
                </div>
            </div>
            <a href="#" className="more-info">más información</a>
        </div>
    </div>
        </React.Fragment>
    );
}

export default Card;