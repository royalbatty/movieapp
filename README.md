## Installing And Running! 

* Run `npm install` 
* Once dependencies are installed, `npm run dev` will build & launch the server.
* Navigate to `localhost:3000` in the browser to interact!
* If you are so industrious you already have something on 3000, set an environment variable and navigate to that port instead!

## Server API

### Get information for a movie
  * GET `/api/movie/:id`

**Path Parameters:**
  * `id` movie id

**Success Status Code:** `200`

**Returns:** JSON

```json
{
  "adult": "Boolean",
  "backdrop_path": "String",
  "budget": "Number",
  "genres": "Array",
  "homepage": "String",
  "id": "Number",
  "imdb_id": "String",
  "original_language": "String",
  "original_title": "String",
  "overview": "String",
  "popularity": "Number",
  "poster_path": "Number",
  "production_companies": "Array",
  "production_countries": "Array",
  "release_date": "String",
  "revenue": "Number",
  "runtime": "Number",
  "spoken_languages": "Array",
  "status": "String",
  "tagline": "String",
  "title": "String",
  "video": "Boolean",
  "vote_average": "Number",
  "vote_count": "Number"
}
```

### Get most popular movies
  * GET `/api/movies`

**Success Status Code:** `200`

**Returns:** JSON 

```json
{
  "page": "Number",
  "total_results": "Number",
  "total_pages": "Number",
  "results": "Array"
}
```

### Search movies
  * GET `/api/search/:query`

**Path Parameters:**
  * `query` search query

**Success Status Code:** `200`

**Returns:** JSON 

```json
{
  "page": "Number",
  "total_results": "Number",
  "total_pages": "Number",
  "results": "Array"
}
```
