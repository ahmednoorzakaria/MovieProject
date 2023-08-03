function SingleMovie({movie}){
    return(
        <div className="col-md-3 pb-15">
        <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title.substring(0,15) + "..."}</h5>
              <p className="card-text">Release Date: {movie.release_date}</p>
              <p className="card-text">Rating: {movie.vote_average}</p>
            </div>
          </div>
          </div>
    );
}

export default SingleMovie;