import { NextPage } from "next";

import { APIsCheck } from "@/components/test/APIsCheck";
import { Admin } from "@/components/test/Admin";
import { Counter } from "@/components/test/Counter";
import { Button } from "@/components/ui/button";
import Loading from "../../loading";

const AdminPage = () => {
  return (
    <main>
      {/* <Loading /> */}
      <div className="flex flex-col justify-center items-center gap-5 relative">
        <APIsCheck />

        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-semibold text-primary drop-shadow-md">
            🔐 Auth
          </h1>

          <Button variant={"destructive"}>destructive</Button>
          <Button variant={"ghost"}>ghost</Button>
          <Button variant={"link"}>link</Button>
          <Button variant={"outline"}>outline</Button>
          <Button variant={"secondary"}>secondary</Button>
          <p className="text-white text-lg">A simple authentication service</p>
        </div>
        <Counter />

        <Admin />
      </div>
    </main>
  );
};

export default AdminPage;
