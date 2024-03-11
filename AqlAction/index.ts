"use server";
import { promisePool } from "./mysql";
export async function mysqlGetList<T>(table: string, query = {}): Promise<T[]> {
  const [rows, fields] = await promisePool.execute(`SELECT * FROM ${table}`);
  return rows as T[];
}

// 创建数据
export const mysqlCreate = async (table: string, form: any) => {
  let keys = [];
  let values = [];
  console.log(form);
  return false
//   for (let [k, v] of form) {
//     if (k.startsWith("$ACTION_ID")) {
//       continue;
//     }
//     keys.push(k);
//     values.push(`"${v}"`);
//   }

//   const sqlUrl = `
//   INSERT INTO ${table} (${keys.join(",")})
//   VALUES (${values.join(",")})
//   `;
//   try {
//     const [rows, fields] = await promisePool.execute(sqlUrl);
//     return rows;
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
};

// 创建表
export const mysqlTableCreate = async (table: string, form: any) => {
  const [rows, fields] = await promisePool.execute(`
    CREATE TABLE IF NOT EXISTS ${table} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255),
      password VARCHAR(255) 
    );
  `);
  console.log(rows);
  // return rows
  return "fasd";
};

// 删除数据
export const mysqlDeleteData = async (table: string, id: number) => {
  const [rows, fields] = await promisePool.execute(`
    DELETE FROM ${table} WHERE id = ${id};
    `);
  return rows;
};

export const mysqlUpdateData = async (table: string, form: any) => {
  let values = [];
  for (let [k, v] of form) {
    if (k.startsWith("$ACTION_ID") || k == "id") {
      continue;
    }
    values.push(`${k}="${v}"`);
  }
  const [rows, fields] = await promisePool.execute(`
  UPDATE ${table} SET ${values.join(",")} WHERE id = ${form.get("id")};
      `);
  return rows;
};

export const showTables = async (): Promise<any[]> => {
  const [rows, fields] = await promisePool.execute(`
  SHOW TABLES;
      `);
  return rows as any[];
};
