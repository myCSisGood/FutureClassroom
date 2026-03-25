import React, { useState } from "react";
import Image from "next/image";
import NotificationDialog from "./NotificationDialog";

interface NotificationProps {
  date: string;
  type: "system" | "update" | "personal" | "general";
}

export default function NotificationItem({ date, type }: NotificationProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const config = {
    system: {
      icon: "/icon/decoration/icon_maintenance.svg",
      title: "系統維護",
    },
    update: {
      icon: "/icon/decoration/icon_update.svg",
      title: "功能更新",
    },
    personal: {
      icon: "/icon/decoration/icon_message.svg",
      title: "個人通知",
    },
    general: {
      icon: "/icon/decoration/icon_document.svg",
      title: "一般公告",
    },
  }[type];

  return (
    <>
      <div
        className="bg-white rounded-[16px] p-5 transition-all cursor-pointer group"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="flex items-start gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="shrink-0">
                <Image
                  src={config.icon}
                  alt={type}
                  width={40}
                  height={40}
                  className="transition-transform"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="title-2 text-gray-90">{config.title}</span>
                <span className="body-3-reg text-gray-70">{date}</span>
              </div>
            </div>

            <div className="w-full">
              <p className="body-1-reg text-gray-90 leading-relaxed line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                elementum odio dui, a tristique magna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NotificationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={config.title}
        date={date}
        icon={config.icon}
      />
    </>
  );
}
