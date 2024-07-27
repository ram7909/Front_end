import express from "express"
import bodyParse from 'express'

const app = express();
const port = 1000;
app.use(bodyParse.json())

const movies = [
    {
        id: 1,
        title: "Inception",
        description: "A skilled thief is given a chance to have his criminal history erased if he can implant an idea into a target's subconscious.",
        imdbRating: 8.8
    },
    {
        id: 2,
        title: "The Matrix",
        description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
        imdbRating: 8.7
    },
    {
        id: 3,
        title: "Interstellar",
        description: "A team of explorers travels through a wormhole near Saturn in search of a new habitable planet for mankind.",
        imdbRating: 8.6
    },
    {
        id: 4,
        title: "The Shawshank Redemption",
        description: "A banker sentenced to life in prison befriends a fellow inmate and seeks redemption through a series of ingenious escapes.",
        imdbRating: 9.3
    },
    {
        id: 5,
        title: "The Dark Knight",
        description: "Batman faces his greatest challenge yet as he battles the psychotic Joker who seeks to plunge Gotham City into chaos.",
        imdbRating: 9.0
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Movie API</h1>');
});
app.get('/movies', (req, res) => {
    res.json({ message: "You request has been accepted", movies, success: true })
})
app.get('/movies/:id', (req, res) => {
    const id = req.params.id
    const movieDetail = movies.filter((data) => data.id == id)
    res.json({ message: "You request has been accepted", movieDetail, success: true })
})
app.post('/movie/add', (req, res) => {
    movies.push(req.body)
    res.json({ message: "You request has been accepted", movies, success: true })
})
app.delete('/movie/delete/:id', (req, res) => {
    const id = req.params.id
    const remainMovie = movies.filter((data) => data.id != id)
    res.json({ message: "You request has been accepted", remainMovie, success: true })
})
app.put('/movie/update', (req, res) => {
    const updatedMovie = req.body;
    for (let i = 0; i < movies.length; i++) {
        if (updatedMovie.id == movies[i].id) {
            movies[i].title = updatedMovie.title;
            movies[i].description = updatedMovie.description;
            movies[i].imdbRating = updatedMovie.imdbRating;
            break;
        }
    }
    res.json({ message: 'your movie has been updated', movies, success: true })
})
app.listen(port, () => console.log(`Server is Running on port ${port}`))