// import axios from "axios";

// export default {
//   getBooks: function(query) {
//     return axios.get("/api/books", { params: { q: query } });
//   }
// };

import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/?t=";
const APIKEY = "&apikey=AIzaSyDRtTXAuQaLIOTSrmPjGhFInKWwLvg_AnI";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

