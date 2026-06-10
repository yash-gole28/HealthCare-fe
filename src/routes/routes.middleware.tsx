import {
  Navigate,
} from "react-router-dom";
import type { PermissionType } from "./permissions.type";
import { getUserData } from "../utils/storage";

type RouteMiddlewareProps = {
  children: React.ReactNode;

  module?: string;

  permissions?: PermissionType[];
};

const RouteMiddleware = ({
  children,
  module,
  permissions,
}: RouteMiddlewareProps) => {

  /*
    Validate User
  */

  const userData =
    localStorage.getItem(
      "user_data"
    );

  if (!userData) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  const user = getUserData();

  /*
    Super Admin Bypass
  */

  // if (
  //   user.is_super_admin
  // ) {
  //   return children;
  // }

  /*
    If No Permission Needed
  */

  if (
    !module ||
    !permissions?.length
  ) {
    return children;
  }

  /*
    Find Module
  */

  const currentModule =
    user?.role_id?.modules?.find(
      (
        item: {
          module_name: string;
        }
      ) =>
        item.module_name ===
        module
    );

  if (!currentModule) {

    return (
      <Navigate
        to="/access-denied"
        replace
      />
    );
  }

  /*
    Validate All Permissions
  */

  const hasAccess =
    permissions.every(
      (permission) =>
        currentModule
          .permissions?.[
            permission
          ]
    );

  if (!hasAccess) {

    return (
      <Navigate
        to="/access-denied"
        replace
      />
    );
  }

  return children;
};

export default RouteMiddleware;