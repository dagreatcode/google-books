import React from "react";

const searchController = () => {
  return (
    <div>
      <h1>Search Page</h1>
      <form>
        <div class="form-group">
          <label for="Search1">Search Books</label>
          <input
            type="input"
            class="form-control"
            id="search"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Top Books
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default searchController;
