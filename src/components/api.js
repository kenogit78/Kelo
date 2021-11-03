import axios from 'axios'

   
     export const getHotels = async (type, sw, ne) => {
          try{
              const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
                params: {
                  bl_latitude: sw.lat,
                  bl_longitude: sw.lng,
                  tr_latitude: ne.lat,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                  'x-rapidapi-key': '6ceb393fa5msha9d56f4f5b5bc81p10d611jsn9132b416098d'
                }
              });
              
              
              // console.log(sw.lat, sw.lng, ne.lat, ne.lng);
               return data;
             
              
               
              }
              catch(error){
               console.log(error)
              }
          };
   
          // export const searchHotels = async ()=>{

          //   try{
          //     const {data } = await axios.get('https://hotels4.p.rapidapi.com/get-meta-data', {
          //       // params: {query: 'new york', locale: 'en_US'},
          //       headers: {
          //         'x-rapidapi-host': 'hotels4.p.rapidapi.com',
          //         'x-rapidapi-key': 'e138e013afmshef27749173bd0c7p179082jsnbe83a3737f7b'
          //       }
          //     });
          //     console.log(data)
          //     return data;
          //   }
          //   catch(error) {
          //     console.error(error);
          //   }
          // };
         
        

