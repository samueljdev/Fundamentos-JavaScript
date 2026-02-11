// Requisição
postsFetch.interceptors.request.use(function (config) {
    console.log('Antes da requisição...');
    return config;
}, function (error) {
    console.log('Erro na requisição');
    return Promise.reject(error);
});

// Resposta
postsFetch.interceptors.response.use(function (response) {
    console.log('Resposta recebida');
    return response;
}, function (error) {
    console.log('Erro na resposta');
    return Promise.reject(error);
});