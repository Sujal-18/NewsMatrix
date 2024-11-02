# NewsMatrix

NewsMatrix is a responsive web application that aggregates and displays news articles from various sources in real-time. Built using the MERN stack, it provides users with a seamless experience for exploring news across categories, featuring infinite scroll and other user-friendly functionalities.

## Features

- **Real-Time News Updates**: Aggregates news from multiple sources using NewsAPI.
- **Infinite Scroll**: Enables continuous browsing of news articles as users scroll down.
- **Category Filtering**: Users can filter news by categories (e.g., sports, technology, business) to focus on topics of interest.
- **Responsive Design**: Optimized for both desktop and mobile use for a seamless user experience.

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: NewsAPI (only)
- **API**: Personal NewsAPI key for fetching news articles

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/news-matrix.git
   cd news-matrix
```

2.Install dependencies for the frontend:

```cd client
npm install
```
3.API Key Configuration:

Obtain a personal NewsAPI key from https://newsapi.org/.

Create a .env file in the client directory and add your API key:

4.Start the development server:

```
cd client
npm start
```
5.Visit http://localhost:3000 in your browser to access NewsMatrix.


## Usage

1. **Explore News**: After starting the application, you can browse through various news articles. The application supports infinite scrolling, so new articles will load automatically as you reach the bottom of the page.
   
2. **Filter by Category**: You can filter news articles by different categories. Simply select your preferred category from the dropdown menu to see relevant articles. Categories include options like Sports, Technology, Business, and more.

3. **Search Functionality**: Use the search bar to find specific articles or topics of interest. This feature enhances user experience by allowing quick access to relevant news.

4. **View Article Details**: Click on any article headline to view more details, including a summary, publication date, and source information.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
