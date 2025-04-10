import { NextPage } from "next";
import { PropsWithChildren } from "react";

export const BaseLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div
        className={
          "max-w-screen-xl m-auto flex flex-row px-4 max-sm:flex-col bg-[#2e2e2e]"
        }
      >
        <div
          className={"sm:flex-1 max-sm:mt-[60px] overflow-hidden bg-[#2e2e2e]"}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
