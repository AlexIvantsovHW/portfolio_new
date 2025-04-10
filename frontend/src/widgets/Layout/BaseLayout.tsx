import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Footer } from "@/src/widgets/Footer";

import { useRouter } from "next/router";

const BaseLayout = ({ children, cl }: { children: ReactNode; cl?: string }) => {
  const path = usePathname();
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (path?.includes("/personal") && !token) {
      router.push("/");
    }
  }, [path, router]);

  return (
    <div
      className={`w-full min-h-screen flex flex-col md:flex-row  justify-between ${cl} `}
    >
      <div className="w-full flex flex-col justify-between">
        {" "}
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default BaseLayout;
