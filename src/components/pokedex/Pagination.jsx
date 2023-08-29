const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const firstPage = 1;

  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastPage = () => setCurrentPage(lastPage);

  const hanldePreviusPage = () => {
    setCurrentPage((prevState) => {
      const prevPage = prevState - firstPage;
      if (prevPage >= 1) return prevPage;
      return prevState;
    });
  };

  const handleFirstPage = () => setCurrentPage(firstPage);

  return (
    <ul className="flex justify-center gap-5 p-4 text-lg sm:text-[40px] cursor-pointer">
      {currentPage >= 2 && <li onClick={handleFirstPage}>{"<<"}</li>}
      {currentPage >= 2 && (
        <li
          className="hover:bg-red-500 hover:text-white w-5 text-center rounded-sm sm:w-[40px] sm:grid sm:items-center sm:h-[50px] sm:rounded-md"
          onClick={hanldePreviusPage}
        >
          {"<"}
        </li>
      )}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`${
            currentPage === page
              ? "text-white bg-red-500 w-5 text-center rounded-sm sm:w-[40px] sm:h-[50px] sm:grid sm:items-center sm:rounded-md"
              : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
      {
        (currentPage = 65 && (
          <li
            className="hover:bg-red-500 w-5 text-center hover:text-white sm:w-[40px] sm:grid sm:items-center sm:h-[50px] sm:rounded-md"
            onClick={handleNextPage}
          >
            {">"}
          </li>
        ))
      }
      {(currentPage = 65 && <li onClick={handleLastPage}>{">>"}</li>)}
    </ul>
  );
};

export default Pagination;
