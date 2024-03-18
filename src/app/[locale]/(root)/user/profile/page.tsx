import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ProfilePage = async () => {
  const user = await currentUser();

  return <UserInfo label="💻 Profile Information" user={user} />;
};

export default ProfilePage;
