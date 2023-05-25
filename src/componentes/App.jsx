import styles from './App.module.css'
import logo from '../assets/suglogo.svg'
import { useState } from 'react'
import api from '../services/api';

function App() {
  const [newRepo, setNewRepo] = useState('');
  const [repos, setRepos] = useState([]);

  async function pesquisar() {
    if (!newRepo) {
      alert('Digite o autor/nome do repositório')
      return
    }

    try {
      const resposta = await api.get(`repos/${newRepo}`)
      const repo = resposta.data

      setRepos([...repos, repo])
    } catch (erro) {
      alert('Erro ao buscar repositório')

    }
  }

  return (
    <>
      <img src={logo} alt='Github Explorer' />
      <div className={styles.form}>
        <input
          value={newRepo}
          placeholder='Digite o nome do repositório '
          onChange={(e) => { setNewRepo(e.target.value) }} />
        <button onClick={pesquisar}>Pesquisar</button>
      </div>
      <div className={styles.repo}>

        {
          repos.map((repo, i) => {
            return (
              <a key={i} href={repo.html_url}>
                <img src={repo.owner.avatar_url} />
                <div>
                  <strong>{repo.full_name}</strong>
                  <p>{repo.description}</p>
                </div>
              </a>

            )
          })
        }

      </div>
    </>
  )
}

export default App

