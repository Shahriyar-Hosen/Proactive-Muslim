import { createUser } from "@/server/action/user.action";

const Test = () => {
  const handleCrateUser = () => {};

  return (
    <main className="bg-slate-950 text-slate-200 w-full min-h-screen flex justify-center items-center">
      <form action={createUser}>
        <h1 className="text-5xl font-bold text-center pt-5 pb-3">
          Create New User
        </h1>
        <button
          type="submit"
          className="bg-orange-400 p-2 px-5 rounded container"
        >
          Create USer
        </button>
      </form>
    </main>
  );
};

export default Test;
