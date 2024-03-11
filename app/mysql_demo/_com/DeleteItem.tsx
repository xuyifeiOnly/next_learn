"use client";
const DeleteItem = ({
  action,
  item,
  updateData,
}: {
  updateData: Function;
  action: Function;
  item: any;
}) => {
  let type = "";

  return (
    <div>
      <form
        action={action as any}
        onSubmit={(e) => {
          type = (e.nativeEvent as any).submitter.value;
          e.preventDefault();

          const form = new FormData(e.currentTarget);
        //   for (let [k, v] of form) {
        //     console.log(k);
        //   }
          if (type == "change") {
            if (confirm("确认修改吗？")) {
              updateData(form);
            }
          }
          if (type == "delete") {
            if (confirm("确认删除吗？")) {
              action(form);
            }
          }
        }}
      >
        <span className="inline-block w-40">
            <input type="text" name="name" defaultValue={item.name} />
        </span>
        <input
          name="id"
          defaultValue={item.id}
          type="hidden"
          className="h-0 inline-block overflow-hidden "
        />
        <input
          type="submit"
          name="submitBtn"
          value="delete"
          id="8898"
          className="ml-20 text-blue-500 cursor-pointer"
        ></input>
        <input
          type="submit"
          value="change"
          name="submitBtn"
          id="313"
          className="ml-20 text-red-500 cursor-pointer"
        ></input>
      </form>
    </div>
  );
};

export default DeleteItem;
