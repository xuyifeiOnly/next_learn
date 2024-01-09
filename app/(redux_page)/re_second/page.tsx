
import { sleep } from "@/app/lib/utils";
import { useAppContext } from "../_store";
import { globalConfig } from "../_store/global";

const ReSecond =async () => {
  // const { theme, setTheme } = useThemeContext();
  const re = await sleep(3000,new Date().getTime().toString());
  return (
    <div className="text-blue text-blue-800">
      {globalConfig.colums}
      redux的第一个页面
      <div>
        {/* {theme}
        <button onClick={() => setTheme("吃")}>修改主体</button> */}
      </div>
    </div>
  );
};

export default ReSecond;
