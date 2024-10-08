"use client";

import { decrement, increment, incrementByAmount } from "@/redux/features";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { memo } from "react";

export const Counter = memo(() => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <section className="flex flex-col justify-center items-center">
      <h1>Count: - {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment by 1</button>
      <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Decrement by 2
      </button>
    </section>
  );
});

Counter.displayName = "Counter";
