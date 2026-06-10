
import { getUserData } from "../utils/storage";

const Navbar = () => {
    const user = getUserData();

    console.log("user from navbar", user)
     const logout =
  () => {

    localStorage.removeItem(
      "access_token"
    );

    localStorage.removeItem(
      "refresh_token"
    );

    localStorage.removeItem(
      "user_data"
    );

    window.location.href =
      "/login";
  };
    return (

       <header
  className="
    bg-white
    shadow-sm
    px-4 md:px-6
    py-4
    flex
    justify-between
    items-center
  "
>

  <h1
    className="
      text-lg
      md:text-xl
      font-semibold
      text-slate-800
      whitespace-nowrap
    "
  >
    Healthcare Portal
  </h1>

  <div
    className="
      flex
      items-center
      gap-4
      flex-shrink-0
    "
  >

    {/* Hide on Mobile */}

    <div
      className="
        hidden
        md:flex
        items-center
        gap-2
      "
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-slate-600"
      >
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>

      <p
        className="
          font-medium
          text-slate-800
          whitespace-nowrap
        "
      >
        {user?.full_name}
      </p>

    </div>

    <button
      onClick={logout}
      className="
        px-3 md:px-4
        py-2
        rounded-lg
        bg-red-500
        hover:bg-red-600
        text-white
        font-medium
        transition-all
        whitespace-nowrap
      "
    >
      Logout
    </button>

  </div>

</header>

    );
};

export default Navbar;