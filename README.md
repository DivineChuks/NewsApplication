
NEWS APPLICATION

This is a modern and interactive news application built using Next.js, Tailwind CSS, TypeScript, and Redux Toolkit. The application consumes the News API provided by newsapi.org to fetch and display the latest news articles. With this application, users can stay informed about current events, explore articles from various sources, and read in-depth content on specific topics of interest.

FEATURES
1. Display a list of news articles: Fetches and displays the latest news articles from the News API. Each article is presented with its title, description, author, and published date.

2. Filter articles by source: Provides a user-friendly dropdown or input field that allows users to filter articles based on their preferred news source. When a specific source is selected, the application fetches and displays articles exclusively from that source.

3. Implement pagination: Implements pagination controls to limit the number of articles displayed per page to a maximum of 10. Users can navigate through pages of articles using intuitive previous and next buttons.

4. Implement article details page: When a user clicks on an article, a separate page is displayed with the full content. The article details page includes the title, description, author, published date, and even the article's image if available.

5. Trending Topics: Showcases the current trending topics or popular categories/topics in the news, providing users with quick links to navigate to related articles and explore the latest trends.

6. Subscribe to our newsletter: Includes a section for users to subscribe to the newsletter, enabling them to receive regular updates and personalized recommendations straight to their inbox.

GETTING STARTED
Follow these steps to get the project up and running on your local machine:

1. Clone this repository to your local environment.
2. Install the project dependencies using npm install.
3. Obtain an API key from newsapi.org and update the configuration file (config.js) with your API key.
4. Ensure to use the prefix NEXT_PUBLIC if you are using environment variable.
5. Start the development server using npm run dev.
6. Open your browser and navigate to http://localhost:3000 to access the application.
Dependencies.

The key dependencies used in this project are:

1. Next.js: A React framework for server-rendered applications.
2. Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
3. TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
4. Redux Toolkit: A library that simplifies the implementation of Redux by providing utilities for efficient state management.
5. Axios: A library used for making HTTP requests from a browser. It provides a simple and convenient way to send asynchronous HTTP requests to a server and handle the response.

For a full list of dependencies, refer to the package.json file.

CONTRIBUTING.
Contributions to this project are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. Let's collaborate and make this news application even better together.

LICENSE.
This project is licensed under the MIT License. Feel free to use and modify the code for your own purposes.