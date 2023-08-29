"use client"
import Image from 'next/image'
import './reset.css'
import styles from './page.module.css'
import Header from '../../components/layout/Header/Header'
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material'
import brazilianFlag from '../../public/brazilian_flag.svg';
import { useEffect, useState } from 'react'
import api from '../services/api'

import USDflag from '../../public/usd_flag.svg';
import SUICAflag from '../../public/suica_flag.svg';
import JAPANflag from '../../public/japan_flag.svg';
import UKflag from '../../public/uk_flag.svg';
import ARSflag from '../../public/argentina_flag.svg';
import Europeflag from '../../public/europe_flag.svg'
export default function Home() {
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);
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
  const handleConvertLibraEsterlinaGBP = async () => {
    if (inputValue !== undefined) {
      const requestData = {
        moedaOrigem: 'BRL',
        moedaDestino: 'GBP',
        moedaConvertida: inputValue
      };
      
      try {
        const response = await api.post('/convert', requestData);
        setLibraEsterlinaGBP(response.data.valorConvertido);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };

  
  const handleConvertEuroEUR = async () => {
    if (inputValue !== undefined) {
      const requestData = {
        moedaOrigem: 'BRL',
        moedaDestino: 'EUR',
        moedaConvertida: inputValue
      };
      
      try {
        const response = await api.post('/convert', requestData);
        setEuroEUR(response.data.valorConvertido);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };
  const handleConvertIeneJaponesJPY = async () => {
    if (inputValue !== undefined) {
      const requestData = {
        moedaOrigem: 'BRL',
        moedaDestino: 'JPY',
        moedaConvertida: inputValue
      };
      
      try {
        const response = await api.post('/convert', requestData);
        setIeneJaponesJPY(response.data.valorConvertido);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };

  const handleConvertIenePesoArgentinoARS = async () => {
    if (inputValue !== undefined) {
      const requestData = {
        moedaOrigem: 'BRL',
        moedaDestino: 'ARS',
        moedaConvertida: inputValue
      };
      
      try {
        const response = await api.post('/convert', requestData);
        setPesoArgentinoARS(response.data.valorConvertido);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };
  const handleConvertFrancoSuicoCHF = async () => {
    if (inputValue !== undefined) {
      const requestData = {
        moedaOrigem: 'BRL',
        moedaDestino: 'CHF',
        moedaConvertida: inputValue
      };
      
      try {
        const response = await api.post('/convert', requestData);
        setFrancoSuicoCHF(response.data.valorConvertido);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (inputValue !== undefined) {
        handleConvertDolarUSD();
        handleConvertLibraEsterlinaGBP();
        handleConvertEuroEUR();
        handleConvertIeneJaponesJPY();
        handleConvertIenePesoArgentinoARS();
        handleConvertFrancoSuicoCHF();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [inputValue]);

  const cards = [
    {
      coin: 'Dólar Americano (USD)',
      value: dolarUSD,
      borderRadius: '10px',
      background: 'linear-gradient(92deg, #3C3B6E 0%, #B22234 100%)',
      textColor: 'white',
      flag: USDflag
    },
    {
      coin: 'Euro (EUR)',
      value: euroEUR,
      borderRadius: '10px',
      background: 'linear-gradient(92deg, #033699 44.73%, #FC0 100%)',
      textColor: 'white',
      flag: Europeflag
    },
    {
      coin: 'Libra Esterlina (GBL)',
      value: libraEsterlinaGBP,
      borderRadius: '10px',
      background: 'linear-gradient(92deg, #C8102E 0%, #012169 100%)',
      textColor: 'white',
      flag: UKflag
    },
    {
      coin: 'Iene Japonês (YEN)',
      value: ieneJaponesJPY,
      borderRadius: '10px',
      background: '#FFF',
      boxShadow: '2px 2px 4px 0px rgba(246, 0, 0, 0.25)',
      textColor: '#F00000',
      flag: JAPANflag
    },
    {
      coin: 'Peso Argentino (ARS)',
      value: pesoArgentinoARS,
      borderRadius: '10px',
      background: 'linear-gradient(92deg, #74ACDF 52.60%, #F6B40E 100%)',
      textColor: 'white',
      flag: ARSflag
    },
    {
      coin: 'Franco-suíço (CHF)',
      value: francoSuicoCHF,
      borderRadius: '10px',
      background: '#DA291C',
      textColor: 'white',
      flag: SUICAflag
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
              <div className={styles.card} style={{ background: card.background, color: card.textColor, borderRadius: card.borderRadius, boxShadow: card.boxShadow }}>
                <div className={styles.flag}>
                  <Image className={styles.flag} src={card.flag} alt="flag" />
                </div>
                <div className={styles.information}>
                <p className={styles.coin}>{card.coin}</p>
                <p className={styles.value}>{card.value}</p>
                </div>
              </div>
            ))}
          </div>
    </div>
    </main>
    </div>
  )
}
