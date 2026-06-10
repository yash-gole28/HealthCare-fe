type Props = {
  profile: any;
};

const UserDetailsCard = ({
  profile,
}: Props) => {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        User Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <p className="text-sm text-slate-500">
            Full Name
          </p>

          <p className="font-medium text-slate-800">
            {
              profile?.full_name
            }
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Email
          </p>

          <p className="font-medium text-slate-800">
            {profile?.email}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Gender
          </p>

          <p className="font-medium text-slate-800">
            {profile?.gender}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Phone
          </p>

          <p className="font-medium text-slate-800">
            {profile?.mobile}
          </p>
        </div>

      </div>

    </div>
  );
};

export default UserDetailsCard;