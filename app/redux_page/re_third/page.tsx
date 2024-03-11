"use client";
import { useSnapshot } from "valtio";
import { useAppContext } from "../_store";
import type { AppContextProps } from "../_store";
import { ActionType } from "../_store/AppReducer";
import { stateValtio } from "../_store/valtio/index";
import { arrState, useStore } from "../_store/self_store";
const ReSecond = () => {
  // const { state, dispatch }: AppContextProps = useAppContext();
  const ceshi = useSnapshot(stateValtio);
  const [state, setState] = useStore(arrState);
  return (
    <div className="text-red-800">
      redux的第二个页面
      {/* <div>
        {state.currentModel}
        <button
          onClick={() => {
            dispatch({
              type: ActionType.UPDATE,
              field: "currentModel",
              value: "方法哈手动阀",
            });
          }}
        >
          修改主体
        </button>
      </div> */}
      <div>{ceshi.count}</div>
      <button
        onClick={() => {
          stateValtio.count += 1;
        }}
      >
        修改主体
      </button>
      <div className="m-10">
        <div>
          {state.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <button
          onClick={() => {
            // console.log(setArr);
            setState([31]);
          }}
        >
          修改数据
        </button>
      </div>
    </div>
  );
};

export default ReSecond;
