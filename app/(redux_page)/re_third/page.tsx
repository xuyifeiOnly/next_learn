"use client";
import { useAppContext } from "../_store";
import type { AppContextProps } from "../_store";
import { ActionType } from "../_store/AppReducer";

const ReSecond = () => {
  const { state, dispatch }: AppContextProps = useAppContext();
  return (
    <div className="text-red-800">
      redux的第二个页面
      <div>
        {state.currentModel}
        <button
          onClick={() => {
            dispatch({
              type: ActionType.UPDATE,
              field: 'currentModel',
              value: '方法哈手动阀',
            });
          }}
        >
          修改主体
        </button>
      </div>
    </div>
  );
};

export default ReSecond;
