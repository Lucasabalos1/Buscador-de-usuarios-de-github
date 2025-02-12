// import { useState , useEffect} from "react"
import { useFetchUsers } from '../Hooks/useFetchUsers';
import '../styles/Card.css';

export const Card = ({user}) => {
  
  const {userData} = useFetchUsers(user)

  return (
    <section className="card-section">
      <div className="card-container">
        {userData ? (
          <article className="card">
            <div className="photo-cont">
              <img src={userData.avatar_url} alt="" />
            </div>
            <div className="profile-info">
              <span className="user-name">{userData.name}</span>
              <span className="name-profile">{userData.login}</span>
              <p className="bio-profile">{userData.bio}</p>
              <div className="info-repo-cont">
                <span className="user-followers">Seguidores: {userData.followers}</span>
                <span className="user-follows">Seguidos: {userData.following}</span>
                <span className="user-repos">Repos publicos: {userData.public_repos}</span>
              </div>
              <div className="button-cont">
                <a  target="_blank" href={`https://github.com/${user}`}>Ir al perfil</a>
              </div>
            </div>
          </article>
        ) : (
          <h2>No se encontró el usuario</h2>
        )}
      </div>
    </section>
  );
}


