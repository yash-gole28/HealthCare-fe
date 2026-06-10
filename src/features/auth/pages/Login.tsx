import { useState } from 'react'
import { useLogin } from '../../auth/hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { login } =
    useLogin();
  const navigate = useNavigate()
  const [loginType, setLoginType] =
    useState<
      "user" | "client"
    >("user");

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleLogin =
    async () => {

      try {

        const response =
          await login(
            loginType,
            formData
          );
          if(response.success){
            if(loginType === "client"){
              localStorage.setItem("user_data",JSON.stringify(response.data.client))
              navigate("/dashboard")
            }
            if(loginType === "user"){
              localStorage.setItem("user_data",JSON.stringify(response.data.user))
            }
            localStorage.setItem("access_token",JSON.stringify(response.data.accessToken))
            localStorage.setItem("refresh_token",JSON.stringify(response.data.refreshToken))
            setFormData({email:"",password:""})
          }

      } catch (error) {

        console.log(error);

      }
    };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-slate-800">
            Welcome Back
          </h1>

          <p className="text-slate-500 mt-2">
            Login to continue
          </p>

        </div>

        {/* Toggle */}

        <div className="bg-slate-100 rounded-lg p-1 flex mb-6">

          <button
            onClick={() =>
              setLoginType(
                "user"
              )
            }

            className={`
              flex-1 py-2 rounded-md text-sm font-medium transition-all

              ${
                loginType ===
                "user"

                  ? "bg-white shadow text-slate-900"

                  : "text-slate-500"
              }
            `}
          >
            Portal User
          </button>

          <button
            onClick={() =>
              setLoginType(
                "client"
              )
            }

            className={`
              flex-1 py-2 rounded-md text-sm font-medium transition-all

              ${
                loginType ===
                "client"

                  ? "bg-white shadow text-slate-900"

                  : "text-slate-500"
              }
            `}
          >
            Client
          </button>

        </div>

        {/* Form */}

        <div className="space-y-4">

          <div>

            <label className="text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"

              placeholder="Enter email"

              value={
                formData.email
              }

              onChange={(e) =>
                setFormData({
                  ...formData,

                  email:
                    e.target.value,
                })
              }

              className="
                w-full mt-1 px-4 py-3
                border border-slate-300
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-slate-400
              "
            />

          </div>

          <div>

            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"

              placeholder="Enter password"

              value={
                formData.password
              }

              onChange={(e) =>
                setFormData({
                  ...formData,

                  password:
                    e.target.value,
                })
              }

              className="
                w-full mt-1 px-4 py-3
                border border-slate-300
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-slate-400
              "
            />

          </div>

          <button
            onClick={
              handleLogin
            }

            className="
              w-full
              bg-slate-900
              hover:bg-slate-800
              text-white
              py-3
              rounded-lg
              font-medium
              transition-all
            "
          >
            Login as {
              loginType ===
              "user"

                ? "Portal User"

                : "Client"
            }
          </button>

        </div>

      </div>

    </div>
  );
};

export default Login
