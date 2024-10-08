import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ProfilePage = async () => {
  const user = await currentUser();

  return <UserInfo user={user} />;
};

export default ProfilePage;
