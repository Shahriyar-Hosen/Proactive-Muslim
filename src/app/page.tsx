import { NextPage } from "next";
import { redirect } from "next/navigation";

const RootPage: NextPage = () => redirect("/en");

export default RootPage;
