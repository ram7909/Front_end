//Fetch Data From API 
const fetchDataFromAPI = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await api.json();
    console.log(data);
}
fetchDataFromAPI()