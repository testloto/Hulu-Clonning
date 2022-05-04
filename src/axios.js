
// axios is a library that we use to make request to any source or api end point .
// axios is a promise based http client for the browser and node.js

import axios from "axios";
/** base url to make requests to the the movie database
*/
const instance = axios.create({
baseURL:
"https://api.themoviedb.org/3",
});

export default instance;
