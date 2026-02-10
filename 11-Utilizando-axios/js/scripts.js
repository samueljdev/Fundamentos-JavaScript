// 1 - instalando o axios
console.log(axios);

// 2 - Primeiro request
// função async espera os dados chegarem
const getData = async () => {
    try {
        // await espera a resposta do servidor
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
};

getData();