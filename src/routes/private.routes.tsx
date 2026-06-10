import ClientDashboard from "../pages/ClientDashboard";
import type { PermissionType } from "./permissions.type";


type PrivateRouteType = {
  path: string;

  element: React.ReactNode;

  module?: string;

  permissions?: PermissionType[];
};

const privateRoutes: PrivateRouteType[] = [
  {
    path:
      "/dashboard",

    element: (
      <ClientDashboard/>
    ),

    module: "dashboard",

    // permissions: ["view"],
  },

  {
    path:
      "/portal/users",

    element: (
      <div>
        Users
      </div>
    ),

    module: "user",

    permissions: [
      "view",
      "add",
    ],
  },

  {
    path: "/profile",

    element: (
      <div>
        Profile
      </div>
    ),
  },
];

export default privateRoutes;