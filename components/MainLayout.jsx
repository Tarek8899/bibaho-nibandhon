"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children }) {
  const pathname = usePathname();

  const isDashboardRoute = 
    pathname.startsWith("/admin/dashboard") || 
    pathname.startsWith("/kaji/dashboard") || 
    pathname.startsWith("/user/dashboard");
    return (
      <div>
        {!isDashboardRoute && <div className="print:hidden"><Header /></div>}
        {children}
        {!isDashboardRoute && <div className="print:hidden"><Footer /></div>}
      </div>
    );
}

export default MainLayout;
