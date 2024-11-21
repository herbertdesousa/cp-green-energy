import classNames from "classnames";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="flex h-screen">
      <div
        className={classNames(
          'flex flex-col flex-1 justify-between',
          "py-8 w-full max-w-[620px] mx-auto rounded-[16px]",
          "md:my-8 md:px-16 md:border md:border-[#2E3021]"
        )}
        style={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }}
      >
        <Outlet />
      </div>
    </main>
  );
};