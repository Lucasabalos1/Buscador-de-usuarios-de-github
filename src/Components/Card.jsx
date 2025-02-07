import { useState , useEffect} from "react"
import '../styles/Card.css';

export const Card = ({user}) => {
  
  const [userData, setUserData] = useState(null);

  const fetchUser = async() => {
    try {
      if (!user) return;
      const response = await fetch(`https://api.github.com/users/${user}`);      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser();
  }, [user]);

  if (!user || !userData) return null;

  return (
    <>
        <section className="card-section">
            <div className="card-container">
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
            </div>
        </section>
    </>
  )
}

