import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface Props {
  onLoginClick: () => void;
}

export default function AuthSidebar({ onLoginClick }: Props) {
  return (
    <aside className="flex items-center justify-center min-h-screen px-10">
      <div className="w-full max-w-md space-y-12">
        <div className="space-y-6">
          <Image
            src="/icon/logo/icon_logo-ntu.svg"
            alt="Logo"
            width={56}
            height={56}
          />

          <div>
            <h1 className="headline-2-sb text-gray-90">嗨！很高興見到你</h1>
            <p className="body-1-reg text-gray-70">
              歡迎使用臺大課堂互動分析系統，請用臺大計中帳號密碼登入
            </p>
          </div>
        </div>
        <div className="bg-[rgba(6,45,65,0.05)] rounded-[12px] p-4">
          <p className="body-1-reg text-gray-90">
            登入本系統將視為您已充分了解、並同意遵守相關
            <span
              className="text-blue-70 font-medium cursor-pointer hover:underline"
              onClick={onLoginClick}
            >
              使用條款
            </span>
            ！
          </p>
        </div>
        <Button
          variant="primary"
          size="large"
          onClick={onLoginClick}
          className="w-full"
        >
          計中帳號登入
        </Button>
      </div>
    </aside>
  );
}
