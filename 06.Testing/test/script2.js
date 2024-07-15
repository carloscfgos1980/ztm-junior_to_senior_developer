// https://medium.com/@biplavmazumdar5/async-await-with-try-and-catch-get-api-8df3a9d25a7b

const axios = require('axios');

const STAR_WAR_API = 'http://swapi.py4e.com/api/people/'

// Fetching without axios. Try and Catch
const fetchData = async(url)=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const starWar = {
            count: data.count,
            results: data.results
        }
        // console.log(starWar);
        return starWar
        
    }catch(error){
        console.log("Error Fetching data ",error);
    }
   
}

// Fetching with axios. Try and Catch
const fetchStarWar2 = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data
      // data as it shown bellow, it is the way is shown in Jets docs and then the mocked object is also wrapped in []. It worked for the testing but my function was not loger working
      // const data = response.data[0]

      const starWar = {
            count: data.count,
            results: data.results
        }
        console.log(starWar);
        return starWar
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


// const fetchStarWar = fetchData(STAR_WAR_API);
// const fetchStarWar2 = fetchData2(STAR_WAR_API);
fetchStarWar2(STAR_WAR_API);


module.exports = {
    fetchData,
    STAR_WAR_API,
    fetchStarWar2
};