import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ count }) => {
  return (
    <div>
      <SkeletonTheme
        baseColor="#202020"
        highlightColor="#444"
        className="w-full grid gap-5 grid-col-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-col-3 md:grid-cols-2 place-content-center"
      >
        <Skeleton className="rounded-none h-64" count={count} />
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonCard;
