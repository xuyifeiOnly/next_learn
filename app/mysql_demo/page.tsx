import {
  mysqlCreate,
  mysqlDeleteData,
  mysqlGetList,
  mysqlTableCreate,
  mysqlUpdateData,
  showTables,
} from "@/AqlAction";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import DeleteItem from "./_com/DeleteItem";
export interface INvoiceProps {
  name: string;
  email: string;
  id: number;
  password: string;
}

const MysqlDemo = async function () {
  const result = await mysqlGetList<INvoiceProps>("invoice");
  const tables = await showTables();
  async function createData(data: FormData) {
    "use server";
    const result = await mysqlCreate("invoice", data);
    if (result) {
      revalidatePath("/mysql_demo");
    } else {
    }
  }
  async function createTable(data: FormData) {
    "use server";
    const result = await mysqlTableCreate("invoice", data);
    if (result) {
    }
  }
  async function deleteData(data: FormData) {
    "use server";
    const result = await mysqlDeleteData("invoice", Number(data.get("id")));
    if (result) {
      revalidatePath("/mysql_demo");
    }
  }
  async function updateData(data: FormData) {
    "use server";
    const result = await mysqlUpdateData("invoice", data);
    if (result) {
      revalidatePath("/mysql_demo");
    }
  }
  return (
    <div className="flex">
      <div>
        <form action={createData}>
          <label htmlFor="name">
            姓名
            <input name="name" type="text" />
          </label>
          <br />
          <label htmlFor="email">
            邮箱
            <input name="email" type="text" />
          </label>
          <br />
          <label htmlFor="email">
            图片
            <input name="email" type="file" />
          </label>
          <button type="submit">提交</button>
        </form>

        <div>
          <h2>数据列表</h2>
          {result.map((it) => (
            <div key={it.id}>
              <DeleteItem
                updateData={updateData}
                action={deleteData}
                item={it}
              ></DeleteItem>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-20 border-2 p-10">
        <h1 className="text-red-400">表列表</h1>
        {tables.map((it: any, index: number) => {
          return <div key={index}>{it.Tables_in_ru_tang_tools}</div>;
        })}
        <form action={createTable}>
          
          <input name="table" type="text" />
          <button type="submit">创建表</button>
        </form>
      </div>
    </div>
  );
};

export default MysqlDemo;
