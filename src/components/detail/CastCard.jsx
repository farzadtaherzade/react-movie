const CastCard = ({ cast: { profile_path, character, original_name } }) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt="Shoes"
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
