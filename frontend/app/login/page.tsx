"use client";

import Image from "next/image";
import AuthSidebar from "@/components/AuthSidebar";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <main className="min-h-screen grid lg:grid-cols-[1fr_380px]">
        <div className="relative hidden lg:block p-6">
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <Image
              src="/images/img_login-kv_1920.svg"
              alt="Background"
              fill
              priority
              className="object-cover object-left-top"
            />
          </div>
        </div>
        <AuthSidebar onLoginClick={() => router.push("/home")} />
      </main>
    </>
  );
}
