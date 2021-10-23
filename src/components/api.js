import axios from 'axios'

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary',
        params: {
          bl_latitude: '11.847676',
          bl_longitude: '108.473209',
          tr_longitude: '109.149359',
          tr_latitude: '12.838442',
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': 'e138e013afmshef27749173bd0c7p179082jsnbe83a3737f7b'
        }
      };
      
    const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';
      
     export const getHotels = async () => {
          try{
              const {data : {data}} = await axios.get(URL, options);
               return data;
              }
              catch(error){
               console.log(error)
              }
          };



