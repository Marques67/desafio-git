import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  name: string;
  followers: string;
  location: string;
  url: string;
  avatar_url: string;
  html_url: string;
};

type Informations = {
  name: string;
  followers: string;
  location: string;
  avatar_url: string;
  html_url: string;
};

const GitSearch = () => {
  const [information, setInformation] = useState<Informations>();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    followers: '',
    location: '',
    url: '',
    avatar_url: '',
    html_url: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.url}`)
      .then((response) => {
        setInformation(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setInformation(undefined);
        console.log(error);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1 className="text-title">Encontre um perfil GitHub</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="url"
              value={formData.url}
              className="search-input"
              placeholder="Usuário GitHub"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="container information-container">
        <div>
          {information && (
            <>
              <img
                className="image-information"
                src={information.avatar_url}
                alt=""
              />
            </>
          )}
        </div>
        <div className="container info-container">
          {information && (
            <>
              <p className="sub-title">Informações</p>
              <ResultCard title="Perfil: " description={information.html_url} />
              <ResultCard
                title="Seguidores: "
                description={information.followers}
              />
              <ResultCard
                title="Localidade: "
                description={information.location}
              />
              <ResultCard title="Nome: " description={information.name} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitSearch;
