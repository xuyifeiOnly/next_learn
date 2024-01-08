"use client";

import { useAppContext } from "../_store";

const ReSecond = () => {
  // const { theme, setTheme } = useThemeContext();

  return (
    <div className="text-blue text-blue-800">
      redux的第一个页面
      <div>
        {/* {theme}
        <button onClick={() => setTheme("吃")}>修改主体</button> */}
      </div>
    </div>
  );
};

export default ReSecond;
