// Import stylesheets
import "./style.css";
import { searchData } from "./searchData";

// GOAL: console.log search results from searchData.js based on a search query
// HINT: Use .includes() function to find words in text
// HINT: Use the searchData from above and search from within the "title" and "snippet" attribute
function search(searchQuery) {
  // Enter code here
  for (let i = 0; i < searchData.organic_results.length; i++) {
    if (
      searchData.organic_results[i].title
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
      searchData.organic_results[i].snippet
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase())
    ) {
      console.log(searchData.organic_results[i]);
    }
  }
}

// search("tea")
// search("coffee");
// search("react")
// search("JavaScript");
