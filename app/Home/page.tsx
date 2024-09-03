import { authOptions } from "@/lib/authOptions";
import Logout from "../components/Logout";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <span className="text-2xl text-black">
        BLLLYYYYAAAAAAAAAAAAAAAAAAAAAATTTTTTTTTTTTTTTTTTT!!!
      </span>
      {session?.user ? (
        <span>Hello, {session.user.name}</span>
      ) : (
        <span>Hello, Guest</span>
      )}
      <Logout />
    </div>
  );
};

export default Home;
