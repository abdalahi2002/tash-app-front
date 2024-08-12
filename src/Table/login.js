import React, { useContext, useEffect } from "react";
import PasswordField from "../component/passwfield";
import AuthContext from "../Session";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  if (user) {
    navigate("/");
  }
  return (
    <div className="w-full h-screen">
      <div className="flex flex-row w-full h-screen">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div>
                <svg
                  className="w-10 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 225 225"
                >
                  <g transform="matrix(1, 0, 0, 1, 0,0)">
                    <path
                      className="st0"
                      d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4 M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
                Tache App
              </div>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
              Log in
            </h2>
            <div className="mt-12">
              <form onSubmit={loginUser}>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="email"
                    name="email"
                    placeholder="mike@gmail.com"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                  </div>

                  <PasswordField />
                </div>
                <div className="mt-10">
                  <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                    Log In
                  </button>
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                vous n'avez pas de compte?{" "}
                <a
                  className="cursor-pointer text-indigo-500 hover:text-indigo-800"
                  href="/signup"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
            <svg
              className="w-5/6 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 528.71721 699.76785"
            >
              <title>Login</title>
              <rect y="17.06342" width="444" height="657" fill="#535461" />
              <polygon
                points="323 691.063 0 674.063 0 17.063 323 0.063 323 691.063"
                fill="#7f9cf5"
              />
              <circle cx="296" cy="377.06342" r="4" fill="#535461" />
              <polygon
                points="296 377.66 298.773 382.463 301.545 387.265 296 387.265 290.455 387.265 293.227 382.463 296 377.66"
                fill="#535461"
              />
              <polygon
                points="337 691.063 317.217 691 318 0.063 337 0.063 337 691.063"
                fill="#7f9cf5"
              />
              <g opacity="0.1">
                <polygon
                  points="337.217 691 317.217 691 318.217 0 337.217 0 337.217 691"
                  fill="#fff"
                />
              </g>
              <circle cx="296" cy="348.06342" r="13" opacity="0.1" />
              <circle cx="296" cy="346.06342" r="13" fill="#535461" />
              <line
                x1="52.81943"
                y1="16.10799"
                x2="52.81943"
                y2="677.15616"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
                opacity="0.1"
              />
              <line
                x1="109.81943"
                y1="12.10799"
                x2="109.81943"
                y2="679.15616"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
                opacity="0.1"
              />
              <line
                x1="166.81943"
                y1="9.10799"
                x2="166.81943"
                y2="683"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
                opacity="0.1"
              />
              <line
                x1="223.81943"
                y1="6.10799"
                x2="223.81943"
                y2="687.15616"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
                opacity="0.1"
              />
              <line
                x1="280.81943"
                y1="3.10799"
                x2="280.81943"
                y2="688"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
                opacity="0.1"
              />
              <ellipse
                cx="463.21721"
                cy="95.32341"
                rx="39.5"
                ry="37"
                fill="#2f2e41"
              />
              <path
                d="M683.8586,425.93948l-10,14s-48,10-30,25,44-14,44-14l14-18Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#ffb8b8"
              />
              <path
                d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#7f9cf5"
              />
              <path
                d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
                transform="translate(-335.6414 -100.11607)"
                opacity="0.1"
              />
              <path
                d="M775.8586,280.93948s-21-28-30-18-27,24-27,24l-6,63,39-6,14-18-10,24Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#7f9cf5"
              />
              <path
                d="M775.8586,280.93948s-21-28-30-18-27,24-27,24l-6,63,39-6,14-18-10,24Z"
                transform="translate(-335.6414 -100.11607)"
                opacity="0.1"
              />
              <path
                d="M723.8586,402.93948s-32,30-22,45,33-27,33-27Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#ffb8b8"
              />
              <path
                d="M698.8586,320.93948l-14-2s-6,30-8,36-20,48-5,51,20-45,20-45l10-22Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#ffb8b8"
              />
              <path
                d="M775.8586,455.93948s-13-31-23-12-30,50-30,50-40,26-2,27,68-22,68-22l14-22s-19-6-10-21S775.8586,455.93948,775.8586,455.93948Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#2f2e41"
              />
              <path
                d="M728.8586,447.93948l4,18s-28,31-11,34,35-28,35-28l-4-23,8-10S741.8586,438.93948,728.8586,447.93948Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#2f2e41"
              />
              <path
                d="M775.8586,323.93948s-22-10-30,0-30,24-30,24l-6,36s-14,16-10,24-6,18,7,18,67-6,67-6-6-16,0-24,14-31,14-31Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#2f2e41"
              />
              <path
                d="M775.8586,323.93948s-22-10-30,0-30,24-30,24l-6,36s-14,16-10,24-6,18,7,18,67-6,67-6-6-16,0-24,14-31,14-31Z"
                transform="translate(-335.6414 -100.11607)"
                opacity="0.1"
              />
              <path
                d="M747.3586,267.43948c3.62841,0,6.57161-3.521,6.57161-7.85458V245.54926c0-4.33359-2.9432-7.85458-6.57161-7.85458s-6.57161,3.521-6.57161,7.85458v14.03564C740.787,263.91846,743.73019,267.43948,747.3586,267.43948Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#2f2e41"
              />
              <path
                d="M775.49127,254.456a7.53981,7.53981,0,0,0-4.97569-6.11189,3.17684,3.17684,0,0,0-.43993-3.38732c-1.57671-1.78685-4.68149-.8786-6.706-2.10815-1.74082-1.05811-1.71685-3.72139-3.67151-4.47907-1.76133-.67609-3.979,1.13953-5.75259.16581-2.26134-1.22753-1.22548-4.99939-3.52807-6.11848-1.93117-.93825-4.33661,1.1266-6.31816.35127a3.74629,3.74629,0,0,1-2.27078-3.44024c-.127-2.40333-1.88591-4.72533-4.18337-5.21345-2.92271-.60092-5.38228,2.747-5.272,5.68632s2.37063,5.73584,2.74562,8.75407c.25931,2.1189-.56827,4.35349.28633,6.35042a7.75472,7.75472,0,0,0,4.70294,4.13855c3.39617.86554,6.82456-.96727,10.26144-1.38928,3.26429-.40067,6.46583.511,9.72047.44218C769.99692,263.3454,775.67856,259.82532,775.49127,254.456Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#2f2e41"
              />
              <path
                d="M747.3586,254.93948a6.16865,6.16865,0,0,1-1.16492-.11121,4.59472,4.59472,0,0,1-3.0433-2.27856c-.48939-.92054-.63682-2.06866-1.44477-2.73077-.98727-.80545-2.544-.15548-3.73248-.88459-1.34051-.829-1.50547-2.87068-2.53078-4.00829-1.11051-1.24235-3.03584-1.252-4.615-1.84584-2.39107-.94716-4.35884-2.99145-5.07963-5.48234a8.45456,8.45456,0,0,1-.138-3.80525c.51862-2.37808,2.10477-4.28482,3.60442-6.17018s3.024-4.18212,5.34618-4.987a8.91425,8.91425,0,0,1,6.319.46037,10.39933,10.39933,0,0,1,3.77736,2.62253c.93811.94494,1.66164,2.1447,2.70891,2.98269,1.58013,1.26887,3.711.92357,5.61371,1.38946,2.93782.70871,5.17243,3.35264,5.93706,6.29059a8.31212,8.31212,0,0,1-.49672,4.81741c-.88938,1.95923-2.76123,3.1183-4.284,4.69224C752.72887,253.612,750.04446,254.93948,747.3586,254.93948Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#2f2e41"
              />
              <path
                d="M747.3586,235.93948s-24-26-48,0c0,0,8,34,0,52-8,18,18,26,18,26l10-10-10-10s-2-12,4-17S747.3586,235.93948,747.3586,235.93948Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#6c63ff"
              />
              <path
                d="M747.3586,235.93948s-24-26-48,0c0,0,8,34,0,52-8,18,18,26,18,26l10-10-10-10s-2-12,4-17S747.3586,235.93948,747.3586,235.93948Z"
                transform="translate(-335.6414 -100.11607)"
                opacity="0.1"
              />
              <path
                d="M747.3586,242.93948c7.732,0,14,6.268,14,14s-6.268,14-14,14-14-6.268-14-14S739.62661,242.93948,747.3586,242.93948Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#ffb8b8"
              />
              <path
                d="M756.3586,241.93948h-3a2,2,0,0,1-2-2v-7.24268c0-3.89764-2.791-7.19794-6.68884-7.72961a7.00524,7.00524,0,0,0-7.81116,7v8.82829c0,.552-.448,1-1,1h-3a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2h21a2,2,0,0,0,2-2h0A2,2,0,0,0,756.3586,241.93948Z"
                transform="translate(-335.6414 -100.11607)"
                fill="#2f2e41"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
