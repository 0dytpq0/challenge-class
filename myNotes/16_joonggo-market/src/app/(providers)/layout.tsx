import { AuthProvider } from "@/contexts/auth.context";
import React from "react";
// 자식이 클라이언트 컴포넌트라고 해서 부모가 use client를 쓸 필요는 없다.
function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;
