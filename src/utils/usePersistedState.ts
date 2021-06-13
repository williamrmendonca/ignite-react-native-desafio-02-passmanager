import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    //const storageValue: string | any = AsyncStorage.getItem(key);

    // if (storageValue) {
    //   return JSON.parse(storageValue!);
    // } else {
    //   return initialState;
    // }
    console.log('InitialState:', initialState)
    return initialState;
  });

  useEffect(() => {
    const jsonValue = JSON.stringify(state)
    AsyncStorage.setItem(key, jsonValue)
    //localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;