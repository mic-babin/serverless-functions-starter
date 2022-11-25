const result = document.querySelector('.result')

const fetchData = async () => {
    try{
        const {data} = await axios.get('/api/2-basic-api')
        console.log(data)
    } catch(error) {
        console.log(error.response.data)
    }
}

fetchData();