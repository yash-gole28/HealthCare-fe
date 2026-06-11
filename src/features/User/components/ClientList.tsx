
import { useEffect } from "react";
import { getUserData } from "../../../utils/storage";
import ClientFilters
from "../components/ClientFilters";

import ClientTable
from "../components/ClientTable";
import useClients from "../hooks/useClient";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";


const ClientList = () => {
  const userDetails = getUserData()
  const navigate = useNavigate()
  console.log("userDetails in list", userDetails)
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

  useEffect(() => {
    if(userDetails.type !== "user"){
      navigate("/access-denied")
    }
  },[])
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