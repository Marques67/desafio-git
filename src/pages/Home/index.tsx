import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-info">
        <h1>Desafio GitHub API</h1>
        <p>DevSuperior - Escola de programação</p>
      </div>
      <Link to="/gitsearch">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
