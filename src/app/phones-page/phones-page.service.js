
export default BASE_URL;
const BASE_URL = 'https://konolga.github.io/Phones-catalog';


      

export class PhonesPageService {

  async  getAllPhones({ text, orderBy }) {
    try{
    //we want to use promise in case data has to be pulled everytime, we want to make it async
   // return new Promise((res) => {
    const phones = await fetch(`${BASE_URL}/mocked-data/phones/phones.json`)
      .then((res) => res.json());
    const searchedPhones = this._searchByText(phones, text);
    const sortedPhones = this._sort(searchedPhones, orderBy);
    return sortedPhones;
    }
    catch (err) {
      console.log(err);
    }
    }


  _searchByText(phones, searchText){
    if(!searchText){
      return phones;
    }
    return phones.filter (phone =>{
      //String#toLowerCase for getting comparable values,
      //String#includes for checking two string, if one contains the other.
      return phone.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  _sort(phones, orderBy){

    return [...phones] //spread operator
    .sort ((phone1, phone2)=>{ return phone1[orderBy]>phone2[orderBy] ? 1 : -1; });
  }

  async getPhonesById(id) {
    try{
    return await fetch(`${BASE_URL}/mocked-data/phones/${id}.json`)
    .then((res) => res.json());
    }
    catch (err) {
      console.log(err);
    }
  }



}


/* 
Fetch method:
fetch(path, method = 'GET') {
Promise ((res,rej)=>{
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`${BASE_URL}/mocked-data/phones/${id}.json`,  false);
  xhr.send();
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      rej(`${xhr.status} ${xhr.statusText} `)
    } else {
      res(JSON.parse(xhr.responseText));
    }
  });
}); */