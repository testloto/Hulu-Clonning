
import React , {forwardRef} from "react";
import "./VideoCard.css";
// import TruncateMarkup from 'react-truncate-markup';
import { Ellipsis } from 'react-row-ellipsis';
import {ThumbUpSharp} from "@mui/icons-material";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard=forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="VideoCard">
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" />
      {/* <p> {movie.release_date || movie.first_air_date}</p> */}
      <Ellipsis lines={1}>
      <p>{movie.overview}</p>

      </Ellipsis>
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} *`}
        {movie.release_date || movie.first_air_date} ◽
        <ThumbUpSharp/>{" "}{movie.vote_count}
        </p>
    </div>
  );
});

export default VideoCard;
