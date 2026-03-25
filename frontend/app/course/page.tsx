"use client";

import React from "react";
import { Search, ChevronDown, Info } from "lucide-react";

// 模擬數據結構
const COURSE_GROUPS = [
  {
    semester: "114 - 2",
    courses: [
      {
        id: 1,
        name: "課程名稱",
        code: "000 00000",
        section: "01",
        time: "一, 1-3",
        progress: 4,
        total: 16,
        hasUpdate: true,
      },
      {
        id: 2,
        name: "課程名稱",
        code: "000 00000",
        section: "01",
        time: "二, 6-7",
        progress: 4,
        total: 16,
      },
    ],
  },
  {
    semester: "113 - 2",
    courses: [
      {
        id: 3,
        name: "課程名稱",
        code: "000 00000",
        section: "02",
        time: "一, 1-3",
        progress: 16,
        total: 16,
      },
      {
        id: 4,
        name: "課程名稱",
        code: "000 00000",
        section: "01",
        time: "二, 1-3",
        progress: 15,
        total: 16,
      },
      {
        id: 5,
        name: "課程名稱",
        code: "000 00000",
        section: "01",
        time: "三, 1-3",
        progress: 16,
        total: 16,
      },
    ],
  },
];

export default function CoursePage() {
  return (
    <div className="p-8 flex flex-col gap-8">
      {/* 頂部標題與搜尋列 */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">我的課程</h1>
        <div className="relative w-72">
          <input
            type="text"
            placeholder="搜尋課程名稱"
            className="w-full pl-4 pr-10 py-2 bg-gray-200/50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 p-1.5 rounded-full text-white">
            <Search size={16} />
          </div>
        </div>
      </header>

      {/* 統計卡片區 */}
      <section className="flex gap-4">
        <StatCard icon="⌛" label="正在分析中" value={2} hasInfo />
        <StatCard
          icon="📊"
          label="已分析完成"
          value={23}
          iconBg="bg-blue-50"
          iconColor="text-blue-500"
        />
        <StatCard
          icon="📚"
          label="當前課程數量"
          value={46}
          iconBg="bg-cyan-50"
          iconColor="text-cyan-500"
        />
      </section>

      {/* 篩選與列表 */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-sm text-sm font-medium hover:bg-gray-50 transition-colors">
            所有學期 <ChevronDown size={16} />
          </button>
        </div>

        {/* 課程列表 */}
        <div className="space-y-10">
          {COURSE_GROUPS.map((group) => (
            <div key={group.semester} className="space-y-4">
              <h2 className="font-bold text-slate-700 ml-1">
                {group.semester}
              </h2>
              <div className="space-y-3">
                {group.courses.map((course) => (
                  <CourseItem key={course.id} {...course} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// --- 子組件：統計卡片 ---
function StatCard({
  icon,
  label,
  value,
  hasInfo = false,
  iconBg = "bg-orange-50",
  iconColor = "text-orange-500",
}: any) {
  return (
    <div className="flex-1 bg-white p-6 rounded-[24px] shadow-sm flex items-center justify-between transition-transform hover:scale-[1.02]">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 ${iconBg} ${iconColor} rounded-xl flex items-center justify-center text-xl`}
        >
          {icon}
        </div>
        <div className="flex items-center gap-1 text-slate-500 font-medium">
          {label}
          {hasInfo && <Info size={14} className="text-slate-300" />}
        </div>
      </div>
      <div className="text-4xl font-bold text-slate-800">{value}</div>
    </div>
  );
}

// --- 子組件：課程項目 ---
function CourseItem({
  name,
  code,
  section,
  time,
  progress,
  total,
  hasUpdate,
}: any) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow group">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800">{name}</span>
          {hasUpdate && <div className="w-2 h-2 bg-red-500 rounded-full" />}
        </div>
        <div className="flex gap-2">
          <Tag text={code} />
          <Tag text={section} />
          <Tag text={time} />
        </div>
      </div>
      <div className="text-right">
        <div className="text-[10px] text-slate-400 mb-1 uppercase tracking-wider">
          課程分析
        </div>
        <div className="text-xl font-bold text-slate-800">
          {progress}
          <span className="text-slate-300 font-normal">/{total}</span>
        </div>
      </div>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 bg-gray-100 text-slate-500 text-xs rounded-lg font-medium">
      {text}
    </span>
  );
}
