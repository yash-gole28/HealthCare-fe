type Props = {

  page: number;

  totalPages: number;

  setPage: (
    page: number
  ) => void;

};

const Pagination = ({
  page,
  totalPages,
  setPage,
}: Props) => {

  const getVisiblePages =
    () => {

      const pages: number[] =
        [];

      let start =
        Math.max(
          1,
          page - 2
        );

      let end =
        Math.min(
          totalPages,
          page + 2
        );

      if (page <= 3) {

        end =
          Math.min(
            totalPages,
            5
          );
      }

      if (
        page >=
        totalPages - 2
      ) {

        start =
          Math.max(
            1,
            totalPages - 4
          );
      }

      for (
        let i = start;
        i <= end;
        i++
      ) {

        pages.push(i);

      }

      return pages;

    };

  return (

    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">

      {/* First */}

      <button

        disabled={
          page === 1
        }

        onClick={() =>
          setPage(1)
        }

        className="
          px-3
          py-2
          rounded-lg
          border
          border-slate-300
          bg-white
          hover:bg-slate-100
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
         {"<<"}
      </button>

      {/* Previous */}

      <button

        disabled={
          page === 1
        }

        onClick={() =>
          setPage(
            page - 1
          )
        }

        className="
          px-3
          py-2
          rounded-lg
          border
          border-slate-300
          bg-white
          hover:bg-slate-100
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
         {"<"}
      </button>

      {/* Page Numbers */}

      {getVisiblePages().map(
        (pageNumber) => (

          <button

            key={
              pageNumber
            }

            onClick={() =>
              setPage(
                pageNumber
              )
            }

            className={`
              min-w-[40px]
              h-10
              rounded-lg
              border
              transition-all

              ${
                pageNumber ===
                page

                  ? `
                    bg-slate-900
                    text-white
                    border-slate-900
                  `

                  : `
                    bg-white
                    border-slate-300
                    hover:bg-slate-100
                  `
              }
            `}
          >
            {
              pageNumber
            }
          </button>

        )
      )}

      {/* Next */}

      <button

        disabled={
          page ===
          totalPages
        }

        onClick={() =>
          setPage(
            page + 1
          )
        }

        className="
          px-3
          py-2
          rounded-lg
          border
          border-slate-300
          bg-white
          hover:bg-slate-100
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
         {">"}
      </button>

      {/* Last */}

      <button

        disabled={
          page ===
          totalPages
        }

        onClick={() =>
          setPage(
            totalPages
          )
        }

        className="
          px-3
          py-2
          rounded-lg
          border
          border-slate-300
          bg-white
          hover:bg-slate-100
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
         {">>"}
      </button>

    </div>

  );
};

export default Pagination;