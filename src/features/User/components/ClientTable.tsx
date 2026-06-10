import {
  useNavigate,
} from "react-router-dom";

type Props = {
  clients: any[];
};

const ClientTable = ({
  clients,
}: Props) => {

  const navigate =
    useNavigate();

  return (

    <div className="bg-white rounded-xl shadow overflow-auto">

      <table className="w-full">

        <thead>

          <tr className="bg-slate-100">

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-left">
              Mobile
            </th>

            <th className="p-4 text-left">
              Gender
            </th>

            <th className="p-4 text-left">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {clients.map(
            (client: any) => (

              <tr
                key={client._id}
                className="border-t"
              >

                <td className="p-4">
                  {
                    client.full_name
                  }
                </td>

                <td className="p-4">
                  {
                    client.email
                  }
                </td>

                <td className="p-4">
                  {
                    client.mobile
                  }
                </td>

                <td className="p-4">
                  {
                    client.gender
                  }
                </td>

                <td className="p-4">

                  <button

                    onClick={() =>
                      navigate(
                        "/clients/details",
                        {
                          state: {
                            clientId:
                              client.client_id,
                          },
                        }
                      )
                    }

                    className="
                      px-3
                      py-1
                      bg-slate-900
                      text-white
                      rounded-lg
                    "
                  >
                    View
                  </button>

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );
};

export default ClientTable;