import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            category: 'general',
            totalResults:0
        }
        document.title = `NewsMatrix-${this.capitalizeFirstLetter(this.props.category)}`
    }
    async updateNews(){
        // this.setState({page: this.state.page +1})
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =  await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json()
        this.props.setProgress(80);
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            loading:false             
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {

        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=37cc2d5375f84fd5a71a4a9b1dd86895&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews();

    }
    handlePrevClick = async () => {

        console.log("prev clicked")
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false,

        })
    }
    handleNextClick = async () => {
        console.log("next clicked")

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData)
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            // loading: false
        })

    };
    render() {
        return (

            <div className='container my-3' id="C1">
                <h1 className="text-center" id="heading">NewsMatrix-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {/* {this.state.loading && <Loading />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading/>}>
                    <div className="row">
                    {/* !this.state.loading &&  */}
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem source={element.source.name} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={!element.urlToImage ? "https://img.etimg.com/thumb/msid-110672745,width-1070,height-580,overlay-etmarkets/photo.jpg" : element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>

                {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
            </div >

        )
    }
}