import { useState, useEffect } from "react";
import axios from 'axios';
import {RAPID_API_KEY} from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

const options = {
  method: 'GET',
  //used `` to make it dynamic
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': 'a1b158c595msh6f43bd7a79158ecp11c7b9jsn9b7239a57c8a',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {
    ...query
  },
};

const fetchData = async () => {
  setIsLoading(true);

  try {
    const response = await axios.request
    (options);

    setData(response.data.data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
    alert('There is an error')
  } finally {
    setIsLoading(false);
  }
}

useEffect(() => {
  //call fetchData function here
  fetchData();
}, []);

//refetch data if not displaying
const refetch = () => {
  setIsLoading(true);
  fetchData();
}

//return data on UI
return {data, isLoading, error, refetch};
}

export default useFetch;