import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useLoginStore = create(
  // immer를 미들웨어로 쓰고 싶어? immer로 한번 감싸주면 됨
  // persist = 로컬스토리지에 zustand가 알아서 저장
  persist(
    immer((set, get) => ({
      isLoggedIn: false,
      //async도 쓸 수 있음
      logIn: () => set((prevState) => ({ isLoggedIn: true })),
      logOut: () => set((prevState) => ({ isLoggedIn: false })),
      school: {
        class: {
          students: [{ 이름: "진영" }],
        },
      },
      // toggleIsLoggedIn : () => set((prevState) => ({isLoggedIn : !prevState.isLoggedIn})),
      toggleIsLoggedIn: () => {
        const prevState = get();

        // const currentIsLoggedIn = prevState.isLoggedIn

        // await fetch(`/blabla/${currentIsLoggedIn}`)

        // 아래 코드, 즉 set하기 전에
        // 어딘가 통신을 하고 데이터를 가져와야 한다 등의 일이 있을 수 있음
        // 왜? set 안에선 async가 안되거든
        set({ isLoggedIn: !prevState.isLoggedIn });
      },
      // updateClass : () => set(produce((school, (draft) => {
      // })))

      // 이렇게 래핑해서 구조분해로 할당하면 불필요한 리렌더링이 발생하진 않는다.
      // 하지만 어떤 특이사항이 있을지는 더 봐야한다.
      // functions : {
      //   logIn: () => set((prevState) => ({ isLoggedIn: true })),
      // logOut: () => set((prevState) => ({ isLoggedIn: false })),
      // }
    })),
    {
      name: "login-store",
      storage: createJSONStorage(() => sessionStorage), //storage를 통으로 안쓰면? localStorage가 default임
    }
  )
);

export default useLoginStore;
