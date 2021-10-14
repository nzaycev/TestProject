import React, {useState, useEffect} from 'react';
import {StyleSheet, VirtualizedList} from 'react-native';

import {TickerProps, TickerView} from './TickerView';
 
const TIME_INTERVAL = 5000;
type ResponseObject = { [key: string]: object };

interface TickerListProps {
  active: boolean;
  onError?: (message: string) => void;
  onFirstLoading?: () => void;
  onSuccess?: () => void;
}

interface LoadingStateInterface {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const useApi = (active: boolean) => {
  const [dataset, updateDataset] = useState<Array<object>>([]);
  const [loadingState, updateLoadingState] = useState<LoadingStateInterface>({
    loading: false,
    success: false,
    error: null
  })

  function onError(error: string){
    updateLoadingState({
      loading: false,
      success: false,
      error,
    })
  }

  useEffect(() => {
    if (!active)
      return
    function onResponse(response: ResponseObject){
      console.log({response})
      updateDataset(
        Object.keys(response).map(tickerKey => 
          ({...response[tickerKey], key: tickerKey}))
        )
      updateLoadingState(oldState => ({
        ...oldState, 
        error: null,
        success: true, 
        loading: false
      }))
    }

    const callBack = () => {
      updateLoadingState(oldState => ({...oldState, loading: true}))
      fetch("https://poloniex.com/public?command=returnTicker")
        .then(res => res.json())
        .then(onResponse)
        .catch(onError)
    }

    let interval = setInterval(callBack, TIME_INTERVAL)
    callBack()
    return () => {
      clearInterval(interval)
    }
  }, [active])

  return {dataset, ...loadingState}
}

const TickerList = ({
    active = false,
    onError = alert, 
    onSuccess = () => {}, 
    onFirstLoading = () => {}
  }: TickerListProps) => {
  const {dataset, loading, success, error} = useApi(active);

  useEffect(() => {
    if (loading && !success)
      onFirstLoading();
    if (error)
      onError(error);
    if (success)
      onSuccess();
  }, [loading, success, error, onSuccess, onError, onFirstLoading])

  return (
    <VirtualizedList
      data={dataset}
      renderItem={({item, index}) => <TickerView key={index} ticker={item as TickerProps} />}
      getItemCount={_ => dataset.length}
      getItem={(data, index) => data[index]}
    />
  )

}

export default TickerList;