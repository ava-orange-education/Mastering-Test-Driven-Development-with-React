import Checkbox from "components/checkbox";
import InputField from "components/fields/InputField";

const ManageUser = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5">
        <InputField
          variant="auth"
          extra="mb-3"
          label="Full Name*"
          placeholder="John Doe"
          id="fullName"
          type="text"
        />
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
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
            Roles
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

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Save edits
        </button>

      </div>
    </div>
  );
};

export default ManageUser;
