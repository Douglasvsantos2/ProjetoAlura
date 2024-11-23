
/*
function buscarKeyword(keyword) {
    return posts.filter(post => 
        post.descricao.toLowerCase().includes(keyword.toLowerCase())
    );
}
*/
/*
app.get('/posts/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    const resultados = buscarKeyword(keyword);
    res.status(200).json(resultados);
});
*/
/*
function buscarKeyword(keyword) {
    return posts.filter(post => 
        post.descricao.includes(keyword)
    );
};

app.get("/posts/search/:keyword", (req, res) => {
    const keyword = buscarKeyword (req.params.keyword);
    
    res.status(200).json(keyword);

});
/*
function buscarID(id) {
    return posts.findIndex ((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id/", (req, res) => {
    const index = buscarID (req.params.id);
    res.status(200).json(posts[index]);

});
/*
*/
/*const posts = [
    {
        id: 1,
        descricao: "Um gatinho curioso",
        imagem: "https://placecats.com/200/300"
    },
    {
        id: 2,
        descricao: "Gato relaxando em um sofá",
        imagem: "https://placekitten.com/g/300/200"
    },
    {
        id: 3,
        descricao: "Gato preto brincando com um novelo de lã",
        imagem: "https://picsum.photos/id/237/300/200"
    },
    {
        id: 4,
        descricao: "Um gatinho siamês com olhos azuis",
        imagem: "https://source.unsplash.com/random/300x200/?cat,siamese"
    },
    {
        id: 5,
        descricao: "Gato olhando pela janela",
        imagem: "https.//loremflickr.com/300/200/cat,window"
    }
];
*/