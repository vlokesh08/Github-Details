import React, { useEffect, useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Details from './Details';
var text;



export default function Search() {
  const [inputValue, setInputValue] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [temp, temp1] = useState({});
  let datas;

  const getData = () => {
    axios.get("/fetch").then((response) => {
      console.log(response.data);
      if(response.data.length === 0)
        toast.error("No data found !");
        else
        temp1(response.data.json());
    });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    const {data} = await axios.post(`/fetch`, {inputValue} )
    temp1(data);
    console.log(typeof(data));
    console.log(typeof(temp));

  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="content-center" onSubmit={handleSubmit}>
        <form class="flex items-center">  
        <div className="flex flex-col"> 
          <div className="flex flex-row">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <input type="text" value={inputValue} onChange={handleInputChange} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
            </div>
            <button type="submit"  onClick={() => setShowDetails(!showDetails)} class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-main-dabba rounded-lg border  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:main-dabba dark:main-dabba dark:focus:main-dabba">
                <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
            </button>
            </div>
            <div className="flex flex-row">
            {showDetails && <div>
              <Details details = {temp} />
              </div>
            } 
            </div>
            </div>
       </form>

    </div>
  )
}

