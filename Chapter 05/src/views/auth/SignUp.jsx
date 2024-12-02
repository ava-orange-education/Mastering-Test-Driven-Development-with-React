import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { useState } from "react";
import { mockFailedSignUpAPI, mockSignUpAPI } from "./Signup.test";

export default function SignUp() {
  const [showSucess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [exists, setExists] = useState(false);
  const signup = async (obj) => {
    setShowSuccess(true);
    if (email !== 'user@example.com') {
      setExists(true);
      await mockFailedSignUpAPI(obj);
    } else {
      await mockSignUpAPI(obj);
    }
  }
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[1vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Register
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter email and password to sign up!
        </p>
        <InputField
          variant="auth"
          extra="mb-3"
          label="Full Name"
          placeholder="John Doe"
          id="fullName"
          type="text"
        />
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Confirm Password"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        <InputField
          variant="auth"
          extra="mb-3"
          label="Organization Code"
          placeholder="Min. 4 characters"
          id="orgCode"
          type="text"
        />

        <div>
          <label
            className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium`}
          >
            Role
          </label>
          <div className="flex items-center gap-2 my-2">
            <div className="flex items-center gap-2">
              <Checkbox />
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                Admin
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox />
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                Member
              </p>
            </div>
          </div>
        </div>

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={() => {
          signup({
            fullName: 'John Doe',
            email: email,
            password: 'password123',
            orgCode: 'org123',
            role: 'user',
          }) }}>
          Sign Up
        </button>
      </div>
      {showSucess && <p>Sign-up successful!</p>}
      {exists && <p>User already exists. Please use a different email.</p>}
    </div>
  );
}
