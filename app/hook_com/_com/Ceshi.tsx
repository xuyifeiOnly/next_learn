"use client";
import { ReactNode, forwardRef } from "react";

const Title = function ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) {
  return (
    <div>
      发送到发{children} {name}
    </div>
  );
};
Title.displayName = "Title";

export interface JsonViewProps<T extends object>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  value?: T;
  indentWidth?: number;
}
type JsonViewComponent = React.FC<React.PropsWithRef<JsonViewProps<object>>> & {
  title: typeof Title;
};

const Ceshi: JsonViewComponent = forwardRef<
  HTMLDivElement,
  JsonViewProps<object>
>((props, ref) => {
  const { children, title, ...eleElement } = props;
  let Temp: ReactNode = null;
  let child: ReactNode[] = [];
   if(children){
        let tem = children as ReactNode[]
        tem.forEach((it:any) => {
            if(it.type.name){
                Temp = it
            }else{
                child.push(it)
            }

        })
   }
  return (
    <div ref={ref}>
      <div className=" text-red-500">
        {Temp}
      </div>
      {child}
    </div>
  );
}) as unknown as JsonViewComponent;

Ceshi.title = Title;
Ceshi.displayName = "Ceshi";

export default Ceshi;
