"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { addOne, initCounterState, substractOne } from "@/app/store/counter/counter-slice";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count:  number;
}

const getApiCounter = async(): Promise<CounterResponse> => {
  const data = await fetch('/api').then( res => res.json() );
  return data;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch( initCounterState(value) );  
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter()
      .then( ({ count }) => dispatch( initCounterState(count) ) );
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch( substractOne() )}
          className="flex items-center justify-center p-2 rounded-xl bg-red-700 text-white hover:bg-red-800 transition-all w-20 h-10 mr-2"
        >
          <FaMinus />
        </button>
        <button
          onClick={() => dispatch( addOne() )}
          className="flex items-center justify-center p-2 rounded-xl bg-green-700 text-white hover:bg-green-800 transition-all w-20 h-10 mr-2"
        >
          <FaPlus />
        </button>
      </div>
    </>
  )
}
