import { ReactNode } from "react";

export default function Layout({
  children,
  isPending,
}: {
  children: ReactNode;
  isPending: boolean;
}) {
  return (
    <div className="">
      <section
        className={`bg-slate-300 text-center ${isPending && "bg-slate-400"}`}
      >
        Music Browser
      </section>
      {isPending && "loading..."}
      <main>{children}</main>
    </div>
  );
}
