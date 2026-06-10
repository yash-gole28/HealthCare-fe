import {
  useEffect,
  useState,
} from "react";
import { getClientsApi } from "../services/userservice";


const useClients = () => {

  const [loading, setLoading] =
    useState(false);

  const [clients, setClients] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  const [
    debouncedSearch,
    setDebouncedSearch,
  ] = useState("");

  const [gender, setGender] =
    useState("");

  const [sortBy, setSortBy] =
    useState("newest");

  const [page, setPage] =
    useState(1);

  const [pagination, setPagination] =
    useState<any>(null);

  /*
    Debounce Search
  */

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setDebouncedSearch(
          search
        );

      }, 500);

    return () =>
      clearTimeout(timer);

  }, [search]);

  /*
    Reset Page
    When Filters Change
  */

  useEffect(() => {

    setPage(1);

  }, [
    debouncedSearch,
    gender,
    sortBy,
  ]);

  /*
    Fetch Clients
  */

  const fetchClients =
    async () => {

      try {

        setLoading(true);

        const response =
          await getClientsApi({

            page,

            limit: 10,

            search:
              debouncedSearch,

            gender,

            sortBy,

          });

        if (
          response?.success
        ) {

          setClients(
            response.data
          );

          setPagination(
            response.pagination
          );

        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  /*
    Fetch On Change
  */

  useEffect(() => {

    fetchClients();

  }, [
    page,
    gender,
    sortBy,
    debouncedSearch,
  ]);

  return {

    loading,

    clients,

    search,
    setSearch,

    gender,
    setGender,

    sortBy,
    setSortBy,

    page,
    setPage,

    pagination,

    fetchClients,

  };
};

export default useClients;