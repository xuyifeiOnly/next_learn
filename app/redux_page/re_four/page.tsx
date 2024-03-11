"use client";
import { useSnapshot } from "valtio";
import { useAppContext } from "../_store";
import type { AppContextProps } from "../_store";
import { ActionType } from "../_store/AppReducer";
import { stateValtio } from "../_store/valtio/index";
const ReSecond = () => {
  const { state, dispatch }: AppContextProps = useAppContext();
  // const ceshi = useSnapshot(stateValtio);
  console.log(313);
  return (
    <div className="text-red-800">
      redux的第四个页面
      <div>
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
      </div>
      <div>count值：{stateValtio.count}</div>
      <div>
        <button
          onClick={() => {
            stateValtio.count = stateValtio.count + 2;
          }}
        >
          修改count
        </button>
      </div>
    </div>
  );
};

export default ReSecond;
