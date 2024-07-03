"use client";

import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import Page from "@/components/Page";
import supabase from "@/contexts/supabase.context";
import { ComponentProps } from "react";

function SignUpPage() {
  // 'use client' 조건 -> 훅쓸 때, onClick같이 상호작용할 때, api랑 통신할 때
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: "example2@email.com",
      password: "example2-password",
      options: { data: { nickname: "박요셉" } },
    });
  };

  return (
    <Page title="회원가입" width="sm">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col gap-y-8">
        <div>
          <Input required label="아이디" />
          <Input required label="비밀번호" />
          <Input required label="비밀번호 확인" />
        </div>
        <Button type="submit">회원가입하기</Button>
      </form>
    </Page>
  );
}

export default SignUpPage;
