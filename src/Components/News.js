
import React from 'react'
import { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setloading] = useState(true);
    const [category, setcategory] = useState('general');
    const [totalResults, settotalResults] = useState(0);
    // document.title = `NewsMatrix-${capitalizeFirstLetter(props.category)}`


    const updateNews = async () => {
        // setState({page: page +1})
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        setloading(true)
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json()
        props.setProgress(80);
        console.log(parsedData)
        setarticles(parsedData.articles);
        setloading(false);
        settotalResults(parsedData.totalResults)        
        props.setProgress(100);
    }
    useEffect(() => {
        return () => {
            updateNews();
        };
    }, [])

    const handlePrevClick = async () => {

        console.log("prev clicked")
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
        
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        
        setpage(page - 1)
        setarticles(parsedData.articles)
        setloading(false)
    }
    const handleNextClick = async () => {
        console.log("next clicked")

        if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
            
            setloading(true)
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData)
            
            setpage(page + 1)
            setarticles(parsedData.articles)
            setloading(false)
        }
    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page+1)
        // setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)

    };

    return (

        <div className='container my-3' id="C1">
            <h1 className="text-center" id="heading">NewsMatrix-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {/* {loading && <Loading />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}>
                <div className="row">
                    {/* !loading &&  */}
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem source={element.source.name} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={!element.urlToImage ? "https://img.etimg.com/thumb/msid-110672745,width-1070,height-580,overlay-etmarkets/photo.jpg" : element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between">
            <button disabled={page <=1} type="button" className="btn btn-dark" onClick={handlePrevClick} >&larr; Previous</button>
            <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
        </div >

    )

}
News.defaultProps = {
    country: 'in',
    pageSize: 6
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;