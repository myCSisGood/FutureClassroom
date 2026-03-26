import React from "react";
import {
  LogOut,
  Languages,
  FileText,
  Users,
  Info,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export default function SettingsPage() {
  return (
    <div className="p-8 flex flex-col gap-14 bg-[rgba(242,242,242,1)]">
      <header className="flex justify-between items-center">
        <h1 className="title-1 text-gray-90">系統設定</h1>
      </header>
      <div className="relative bg-white rounded-[2rem] h-[96px] shadow-sm flex items-center justify-between pr-8">
        <div className="flex items-center">
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-[144px] h-[144px] rounded-full bg-white p-1 shadow-lg overflow-hidden border border-slate-50">
            <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/avatar/avatar_student.svg"
                alt="User"
                className="object-cover"
                width={144}
                height={144}
              />
            </div>
          </div>

          <div className="pl-42">
            <h2 className="text-xl font-bold text-slate-800 leading-tight mb-2">
              陳子毅
            </h2>
            <p className="text-slate-500 text-sm">中文系 • 學生</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-red-50 text-red-500 rounded-full font-medium hover:bg-red-100 transition-colors">
          <LogOut size={18} />
          <span>登出</span>
        </button>
      </div>
      <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {/* 語言設定 */}
          <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                <Languages size={24} />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-800">語言</div>
                <div className="text-slate-500 text-sm">
                  選擇您想要在本平台使用的語言
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-600 hover:bg-white">
              依照瀏覽器
              <ChevronDown size={18} />
            </button>
          </div>

          {/* 使用條款 */}
          <div className="p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl">
              <FileText size={24} />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-800">使用條款</div>
              <div className="text-slate-500 text-sm">
                為維護您的權益，請一起來了解我們的
                <span className="text-blue-500 underline ml-1 cursor-pointer">
                  隱私保護政策及用戶協議
                </span>
              </div>
            </div>
          </div>

          {/* 聯絡我們 */}
          <div className="p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
              <Users size={24} />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-800">聯絡我們</div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>lightchen@ntu.edu.tw / (02) 33662388</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">
                  #610
                </span>
              </div>
            </div>
          </div>

          {/* 版本資訊 */}
          <div className="p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors">
            <div className="p-3 bg-sky-100 text-sky-600 rounded-2xl">
              <Info size={24} />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-800">版本資訊</div>
              <div className="text-slate-500 text-sm">v1.0.0</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-50 text-xs tracking-wide">
        Copyright © 2026 國立臺灣大學教務處 版權所有 v1.0.0
      </footer>
    </div>
  );
}
