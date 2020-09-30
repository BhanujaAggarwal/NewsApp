import React,{useEffect,useState} from 'react';
import alanbtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

const alankey = '571fdf5e040871d78fe929a6d70122222e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanbtn({
            key:alankey,
            onCommand : ({command,articles}) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    } , []);
    return(
        <div>
            <h1>Alan Ai </h1>
            <NewsCards articles = {newsArticles} />
        </div>
    );
}
export default App;