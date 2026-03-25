"use client";

import Image from "next/image";
import NotificationItem from "@/components/NotificationItem";
import DataCard from "@/components/DataCard";

const COURSES = [
  {
    id: 1,
    name: "課程名稱",
    date: "09月25日",
    code: "D0040000",
    type: "必",
    credit: "1.0",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet co...",
    date: "09月14日",
    code: "D0040000",
    type: "選",
    credit: "2.0",
  },
  {
    id: 3,
    name: "課程名稱",
    date: "08月12日",
    code: "D0040000",
    type: "必",
    credit: "1.0",
  },
  {
    id: 4,
    name: "課程名稱",
    date: "08月12日",
    code: "D0040000",
    type: "必",
    credit: "1.0",
  },
];

const NOTIFICATIONS = [
  {
    id: 1,
    type: "system",
    date: "2025 / 01 / 22  23:59",
  },
  {
    id: 2,
    type: "update",
    date: "2025 / 01 / 22  20:59",
  },
  {
    id: 3,
    type: "personal",
    date: "2025 / 01 / 22  21:59",
  },
  {
    id: 4,
    type: "general",
    date: "2025 / 01 / 22  21:59",
  },
  {
    id: 5,
    type: "general",
    date: "2025 / 01 / 22  21:59",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#F2F2F2] text-slate-700 font-sans">
      {/* Main Content */}
      <main className="flex-1 p-8 flex gap-6 items-stretch">
        <div className="flex-3 flex flex-col gap-4 max-h-[calc(100vh-64px)]">
          <section className="relative h-[326px] rounded-[24px] p-10 flex flex-col justify-center overflow-hidden shrink-0">
            <Image
              src="/images/img_banner-w.svg"
              alt="Banner Background"
              fill
              priority
              className="object-cover object-right z-0"
            />
            <div className="relative">
              <h1 className="large-title-1 mb-2 text-gray-90">
                Good morning, 庭妤
              </h1>
              <p className="body-1-reg text-slate-600">
                資料上次更新時間：2025 年 1 月 8 日
              </p>
            </div>
          </section>

          <div className="grid grid-cols-[1.2fr_1fr] gap-4 flex-1 max-h-[calc(100vh-326px)] overflow-hidden">
            <DataCard title="最新分析" data={COURSES} hasChart />
            <DataCard title="近期查看" data={COURSES} />
          </div>
        </div>
        <aside className="flex-1 bg-[rgba(6,45,65,0.05)] rounded-[32px] p-6 flex flex-col max-h-[calc(100vh-64px)] sticky top-8">
          <h2 className="headline-3-sb text-gray-90">通知中心 (2)</h2>
          <div className="flex justify-end mb-2">
            <button className="body-2-reg text-blue-70 underline">
              全部標記為已讀
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {NOTIFICATIONS.map((n) => (
              <NotificationItem
                key={n.id}
                date={n.date}
                type={n.type as "system" | "update" | "personal" | "general"}
              />
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
