import image from "../../assets/default.png";
const CastCard = ({ cast: { profile_path, character, original_name } }) => {
  const defaults = image;
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : defaults
          }
          alt={original_name}
        />
      </figure>
      <div className="card-body">
        <p className="card-title font-bold">{character}</p>
        <small className="italic">{original_name}</small>
      </div>
    </div>
  );
};

export default CastCard;
