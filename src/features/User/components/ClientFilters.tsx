type Props = {

  search: string;

  setSearch: (
    value: string
  ) => void;

  gender: string;

  setGender: (
    value: string
  ) => void;

  sortBy: string;

  setSortBy: (
    value: string
  ) => void;

};

const ClientFilters = ({
  search,
  setSearch,
  gender,
  setGender,
  sortBy,
  setSortBy,
}: Props) => {

  return (

    <div className="bg-white rounded-xl shadow p-4 mb-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <input

          type="text"

          placeholder="Search Client"

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          className="
            border
            rounded-lg
            px-4
            py-2
          "
        />

        <select

          value={gender}

          onChange={(e) =>
            setGender(
              e.target.value
            )
          }

          className="
            border
            rounded-lg
            px-4
            py-2
          "
        >

          <option value="">
            All Gender
          </option>

          <option value="Male">
            Male
          </option>

          <option value="Female">
            Female
          </option>

        </select>

        <select

          value={sortBy}

          onChange={(e) =>
            setSortBy(
              e.target.value
            )
          }

          className="
            border
            rounded-lg
            px-4
            py-2
          "
        >

          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>

          <option value="name_asc">
            Name A-Z
          </option>

          <option value="name_desc">
            Name Z-A
          </option>

        </select>

      </div>

    </div>

  );
};

export default ClientFilters;