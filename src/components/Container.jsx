const Container = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-col-3 md:grid-cols-2 place-content-center">
      {children}
    </div>
  );
};

export default Container;
