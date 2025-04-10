"use client";

import * as i from "./imports";

export const Header = () => {
  const router = i.useRouter();
  const [anchorEl, setAnchorEl] = i.useState<null | HTMLElement>(null);

  return (
    <section
      className={` w-full items-center flex justify-center h-[80px]`}
      style={{ fontFamily: "Cinzel" }}
    >
      <header className="w-full xl:w-[75%]  ">
        {" "}
        <div className="w-full "></div>
      </header>
    </section>
  );
};
