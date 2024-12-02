import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { useState } from "react";
import { mockFailedSignInAPI, mockSignInAPI } from "./SignIn.test";

export default function SignIn({ }) {
  const [showSucess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInvalid, setShowInvalid] = useState(false);
  const signIn = async (obj) => {
    console.log('signed in called.');
    setShowSuccess(false);
    setShowInvalid(false);
    if (email === '' || password === '') {
      setShowError(true);
    } else {
      if (email !== 'user@example.com') {
        setShowInvalid(true);
        await mockFailedSignInAPI(obj);
      } else {
        await mockSignInAPI(obj);
      }
      setShowSuccess(true);
    }
  }
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      {
        !showSucess &&
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Log In
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          {
            showError &&
            <p>Email is required.</p>
          }

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
            
          {
            showError &&
            <p>Password is required.</p>
          }
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
            <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={() => signIn({
              email: email,
              password: password,
            })}>
            Sign In
          </button>
          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            <a
              href=" "
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Create an account
            </a>
            </div>
            {
              showInvalid &&
              <span>Invalid credentials. Please try again.</span>
            }
        </div>
      }
      {
        showSucess &&
        <p>Sign-in successful!</p>
      }
    </div>
  );
}
