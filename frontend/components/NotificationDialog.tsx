import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  icon: string;
}

export default function NotificationDialog({
  isOpen,
  onClose,
  title,
  date,
  icon,
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-[500px] rounded-[32px] overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-8 pb-6 flex items-start justify-between border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              <Image src={icon} alt="icon" width={40} height={40} />
            </div>
            <div>
              <h3 className="title-1 text-gray-90">{title}</h3>
              <p className="body-3-reg text-gray-70">{date}</p>
            </div>
          </div>
        </div>

        <div className="px-8 pt-6 pb-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="space-y-4 body-1-reg text-gray-600 leading-relaxed">
            <p>
              親愛的用戶您好，本系統將於 2025 年 1 月 22 日進行例行性維護更新，
              預計維護時間為凌晨 00:00 至 04:00。
            </p>
            <p>
              維護期間內，部分線上課程與數據分析功能將暫停服務，
              造成不便敬請見諒。若有任何問題，請聯繫技術支援中心。
            </p>
          </div>
        </div>

        <div className="px-8 pb-6 flex justify-center">
          <Button
            variant="secondary"
            size="medium"
            onClick={onClose}
            className="w-1/2"
          >
            返回
          </Button>
        </div>
      </div>
    </div>
  );
}
