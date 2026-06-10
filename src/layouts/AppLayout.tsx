import type {
  ReactNode,
} from "react";
import Navbar from "../components/Navbar";

type Props = {
  children: ReactNode;
};

const AppLayout = ({
  children,
}: Props) => {

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <main className="">

        {children}

      </main>

    </div>

  );
};

export default AppLayout;