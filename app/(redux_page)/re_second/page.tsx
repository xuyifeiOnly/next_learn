import { sleep } from "@/app/lib/utils";
import { useAppContext } from "../_store";
import { globalConfig } from "../_store/global";
import { Metadata } from "next";
import { useSnapshot } from "valtio";
import { stateValtio } from "../_store/valtio";
var catObj = {
  count: 1,
};
export async function generateMetadata(): Promise<Metadata> {
  // read route params

  // fetch data
  const product = await fetch(`http://localhost:4006/api/ceshi`, {
    // cache: "no-store",
  }).then((res) => res.json());
  console.log(product.code);
  // optionally access and extend (rather than replace) parent metadata
  return {
    title: product.code,
  };
}

const ReSecond = async () => {
  const params = {
    param1: Date.now().toString(),
    param2: "value2",
  };
  const url = new URL("http://localhost:4006/api/ceshi");
  url.search = new URLSearchParams(params).toString();
  // const { theme, setTheme } = useThemeContext();
  const product = await fetch(url, {
    // cache: "no-store",
    // next: {
    //   revalidate: 1,
    // },
  }).then((res) => res.json());

  return (
    <div className="text-blue text-blue-800">
      {globalConfig.colums}
      redux的第一个页面
      <div>{product.code}</div>
      {catObj.count}
      <div>
        count值： {stateValtio.count}
        {/* {theme}
        <button onClick={() => setTheme("吃")}>修改主体</button> */}
      </div>
    </div>
  );
};

export default ReSecond;
