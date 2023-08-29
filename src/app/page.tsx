"use client"
import Image from 'next/image'
import './reset.css'
import styles from './page.module.css'
import Header from '../../components/layout/Header/Header'
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material'
import brazilianFlag from '../../public/brazilian_flag.svg';
import { useEffect, useState } from 'react'
import api from '../services/api'

export default function Home() {
  const [inputValue, setInputValue] = useState(0);
  const [dolarUSD, setDolarUSD] = useState<number | undefined>(undefined);
  const [libraEsterlinaGBP, setLibraEsterlinaGBP] = useState('');
  const [euroEUR, setEuroEUR] = useState('');
  const [ieneJaponesJPY, setIeneJaponesJPY] = useState('');
  const [pesoArgentinoARS, setPesoArgentinoARS] = useState('');
  const [francoSuicoCHF, setFrancoSuicoCHF] = useState('');

  const handleConvertDolarUSD = async () => {
    if (inputValue !== undefined) {
      const requestData = {
        moedaOrigem: 'BRL',
        moedaDestino: 'USD',
        moedaConvertida: inputValue
      };
      
      try {
        const response = await api.post('/convert', requestData);
        setDolarUSD(response.data.valorConvertido);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (inputValue !== undefined) {
        handleConvertDolarUSD();
      }
    }, 2000); // Intervalo de 2 segundos

    return () => clearInterval(interval);
  }, [inputValue]);

  const cards = [
    {
      coin: 'Dólar Americano (USD)',
      value: dolarUSD,
      borderRadius: '10px',
      background: 'linear-gradient(92deg, #3C3B6E 0%, #B22234 100%)',
      textColor: 'white'
    },
    {
      coin: 'Euro (EUR)',
      value: euroEUR,
      borderRadius: '10px',
      background: 'linear-gradient(92deg, #033699 44.73%, #FC0 100%)',
      textColor: 'white'
    },
    {
      coin: 'Libra Esterlina (GBL)',
      value: libraEsterlinaGBP,
      borderRadius: '10px',
      background: 'linear-gradient(92deg, #C8102E 0%, #012169 100%)',
      textColor: 'white'
    },
    {
      coin: 'Iene Japonês (YEN)',
      value: ieneJaponesJPY,
      borderRadius: '10px',
      background: '#FFF',
      boxShadow: '2px 2px 4px 0px rgba(246, 0, 0, 0.25)',
      textColor: '#F00000'
    },
    {
      coin: 'Peso Argentino (ARS)',
      value: pesoArgentinoARS,
      borderRadius: '10px',
      background: 'linear-gradient(92deg, #74ACDF 52.60%, #F6B40E 100%)',
      textColor: 'white'
    },
    {
      coin: 'Franco-suíço (CHF)',
      value: francoSuicoCHF,
      borderRadius: '10px',
      background: '#DA291C',
      textColor: 'white'
    }
  ]
  return (
    <div className={styles.body}>
    <Header />
    <main className={styles.main}>
    <section className={styles.upperSection}>
      <div className={styles.upperSectionText}>
        <h1>Converta rapidamente <br/> com RealNOW</h1>
        <p>Realize conversões da moeda real brasileira para as principais moedas do globo com a nossa ferramenta.</p>
        </div>
      <div className={styles.upperSectionInput}>
        <div className={styles.inputContainer}>
        <FormControl fullWidth sx={{ m: 1, width: '70%', fontSize: '20px'}} variant="standard">
          <InputLabel sx={{ color: 'black', fontSize: '21px', marginbottom: '50px'}} htmlFor="standard-adornment-amount">Real Brasileiro (BRL)</InputLabel>
          <Input
          type='number'
            onChange={e => setInputValue(Number(e.target.value))}
            placeholder='Digite o valor que deseja converter'
            id="standard-adornment-amount"
            startAdornment={<InputAdornment sx={{ color: 'black', fontSize: '18px', height: '200px'}}  position="start"><Image src={brazilianFlag} width={30} height={30} alt="brazilian flag" /></InputAdornment>}
          />
        </FormControl>
        </div>
        </div>
        </section>
        <div className={styles.lowerSection}>
        <div className={styles.cardsContainer}>
            {cards.map(card => (
              <div className={styles.card} style={{ background: card.background, color: card.textColor }}>
                <p>{card.coin}</p>
                <p>{card.value}</p>
              </div>
            ))}
          </div>
    </div>
    </main>
    </div>
  )
}
