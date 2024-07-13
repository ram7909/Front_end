import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '9ebb670587msh95912589ecb4109p194485jsndb176e42d972',
                    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                localStorage.setItem("items", JSON.stringify(result.items));
                setData(result.items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div className="col-md-4 mb-3" key={item.id}>
                            <Link to={'/videodetail'} className="card bg-dark text-light">
                                <img src={item.snippet.thumbnails.default.url} className="card-img-top" alt="Thumbnail" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.snippet.title}</h5>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};
export default Home;
