"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarIcon from "./SidebarIcon";

const NAV_ITEMS = [
  {
    id: "dashboard",
    href: "/home",
    label: "主控台",
    icon: "/icon/common/icon_home-d.svg",
    activeIcon: "/icon/common/icon_home-p.svg",
  },
  {
    id: "course",
    href: "/course",
    label: "我的課程",
    icon: "/icon/common/icon_course-d.svg",
    activeIcon: "/icon/common/icon_course-p.svg",
  },
  {
    id: "settings",
    href: "/settings",
    label: "系統設定",
    icon: "/icon/common/icon_settings-d.svg",
    activeIcon: "/icon/common/icon_settings-p.svg",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  if (pathname === "/login") {
    return null;
  }

  return (
    <aside className="w-[136px] flex flex-col items-center py-8 bg-[rgba(242,242,242,1)] shrink-0 h-screen sticky top-0">
      <div
        className="mb-12 text-[32px] font-normal leading-none tracking-[0.06em] text-center bg-[radial-gradient(154.49%_51.47%_at_50%_113.24%,#007FA9_0%,#262626_100%)] bg-clip-text text-transparent"
        style={{ fontFamily: '"Changa One", sans-serif' }}
      >
        NTU
      </div>

      <nav className="flex flex-col space-y-4 flex-1 items-center w-full">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="w-full flex justify-center"
          >
            <SidebarIcon
              label={item.label}
              active={pathname === item.href}
              icon={
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={44}
                  height={44}
                />
              }
              activeIcon={
                <Image
                  src={item.activeIcon}
                  alt={item.label}
                  width={44}
                  height={44}
                />
              }
            />
          </Link>
        ))}
      </nav>

      <div className="mt-auto w-[64px] h-[64px] rounded-full overflow-hidden">
        <Image
          src="/avatar/avatar_student.svg"
          alt="User"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>
    </aside>
  );
}
