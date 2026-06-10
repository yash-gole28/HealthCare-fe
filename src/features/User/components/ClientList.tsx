
import ClientFilters
from "../components/ClientFilters";

import ClientTable
from "../components/ClientTable";
import useClients from "../hooks/useClient";
import Pagination from "./Pagination";


const ClientList = () => {

  const {

    clients,

    loading,

    search,
    setSearch,

    gender,
    setGender,

    sortBy,
    setSortBy,

    page,
    setPage,

    pagination,

  } = useClients();

  return (

    <div>

      <h1 className="text-2xl font-bold mb-6">
        Clients
      </h1>

      <ClientFilters

        search={search}
        setSearch={setSearch}

        gender={gender}
        setGender={setGender}

        sortBy={sortBy}
        setSortBy={setSortBy}

      />

      <ClientTable
        clients={clients}
      />

      {!loading &&
        pagination && (

          <Pagination

            page={page}

            totalPages={
              pagination.totalPages
            }

            setPage={
              setPage
            }

          />

        )}

    </div>

  );
};

export default ClientList;