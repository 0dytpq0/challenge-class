0703

public에 있는 테이블과 어스 스키마에 있는 테이블이 조인했을 때 정보를 못가져오더라구요

-- 새로운 트리거 함수 생성
CREATE OR REPLACE FUNCTION public.handle_new_user_custom() RETURNS TRIGGER AS $$ BEGIN INSERT INTO public.users (id, email) VALUES (NEW.id, NEW.email); RETURN NEW; END; $$ LANGUAGE plpgsql SECURITY DEFINER; -- 새로운 트리거 생성 CREATE TRIGGER on_auth_user_created_custom AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_custom();

닉네임도 받고싶어요!
-- 새로운 트리거 함수 생성
CREATE OR REPLACE FUNCTION public.handle_new_user_custom() RETURNS TRIGGER AS $$ BEGIN INSERT INTO public.users (id, email, nickname) VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'nickname'); RETURN NEW; END; $$ LANGUAGE plpgsql SECURITY DEFINER; -- 새로운 트리거 생성 CREATE TRIGGER on_auth_user_created_custom AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_custom();

닉네임을 메타데이터로 준거임 그래서 아래처럼 써주면 댐

const { data, error } = await supabase.auth.signUp({
email: "example@email.com",
password: "example-password",
options: { data: { nickname: "튜터" } },
});

DB 타입 가져오는법은 아래 링크에 있음
https://supabase.com/docs/guides/api/rest/generating-types

'https://upwqcjdjqkzepwhivlpz.supabase.co/storage/v1/object/public/'

사진을 여러장 받으면 db를 어떻게 관리하나요?

사진을 model로 관리한다. => 테이블로 만들어서 url 넣어서 따로 관리한다.
