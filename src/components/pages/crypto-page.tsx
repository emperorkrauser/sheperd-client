import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCrypto } from '../../hooks';
import { Nav } from '..';
import { useLocation } from 'react-router-dom';

interface CryptoOptions {
  symbol: 'bitcoin' | 'ethereum' | 'dogecoin';
}

export const CryptoPage = (props: CryptoOptions) => {
  const { symbol = 'bitcoin' } = props;
  const [cryptoData, setCryptoData] = useState<any>();
  const { browse } = useCrypto();
  const [isLoading, setIsLoading] = useState(true);
  let location = useLocation();

  async function getData() {
    let response;
    setIsLoading(true);
    try {
      const res = await browse({ symbol });
      response = res;
    } catch (error) {
      console.log(error);
    } finally {
      setCryptoData(response);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [symbol, location, location.pathname]);

  const displayHistory = () => {
    let newArr = [];
    for (const key in cryptoData.history.current_price) {
      if (
        Object.prototype.hasOwnProperty.call(
          cryptoData.history.current_price,
          key
        )
      ) {
        newArr.push({ key, value: cryptoData.history.current_price[key] });
      }
    }
    return newArr.map((price) => {
      return (
        <span key={price.key}>
          {price.key} {price.value}
        </span>
      );
    });
  };

  if (isLoading || !cryptoData || !cryptoData.latest[symbol.toLowerCase()]) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Nav />
      <h4>{symbol}</h4>
      <p>Latest: {cryptoData.latest[symbol.toLowerCase()].eur ?? '--'}</p>
      <p>Average: {cryptoData.average ?? '--'} </p>
      <p>Count: {cryptoData.count ?? '--'}</p>
      <p>History: {displayHistory()}</p>
    </>
  );
};
