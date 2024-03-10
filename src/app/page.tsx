"use client";

import { decrement, increment, incrementByAmount } from "@/Redux/features";
import { RootState } from "@/Redux/store";
import { UserButton } from "@clerk/nextjs";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <UserButton />
      <h1>Count: - {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment by 1</button>
      <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Decrement by 2
      </button>
    </main>
  );
};

export default Home;
