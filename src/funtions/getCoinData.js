import axios from "axios";

export const getCoinData = (id) => {
   const myData =  axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          // console.log("Response>>", response.data);
          //coinObject(setCoinData, response.data);
          return response.data
        })
        .catch((error) => {
          console.log("Error>>", error);
        });
        return myData;
}