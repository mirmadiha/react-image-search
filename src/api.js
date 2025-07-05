import axios from 'axios';

const searchImages=async(term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID J_E2Zq9Os8HNLHQPmAtt5Eexe7OD3Z4-7okr_ZVpIi8',
        },
        params:{
            query:term,
        },
    });
    console.log(response.data.results);

    return response;
};
export default searchImages;