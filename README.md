# challenge-class

What is TypeScript
2번째 - 조금 더 신뢰할 수 있는 코드를 짜기 위해서
3번째 - 규모가 커질 수록 훨씬 안전해져서 강점이 있기 때문에

SuperSet이란 단어를 알아놓으면 좋다.
└ 자바스크립트를 그대로 옮겨놓았다.

package.josn 이 없으면 node 프로젝트가 아닌거임

package.json scripts = "dev": "tsc --watch ./hello-world.ts & node --watch ./hello-world.js" 둘다 킴 & -> &&면 A && B시에 A가 끝나고 B가 실행됨

    "tsc": "tsc --project tsconfig.json ./src/hello-world.ts"
    --project -> tsconfig.json 설정해주는 것 그리고 뒤에 파일 위치를 직접적는 것이 아닌 tsconfig의 rootDir에 src를 루트로 해줘야함

함수의 타입을 지정할 땐 뭐가 들어오고 뭐가 나가는지만 알려주면 된다.
이런 함수의 타입을 함수의 시그니쳐라고 한다.

함수가 아무것도 리턴하지 않는다면 타입을 void로 준다.

return 만 명시되어 있어도 void

null 줄때만 타입 null

interface를 리액트를 할 때 젤 마니씀
이 친구는 객체 형태의 지정에만 쓸 수 있음.

아까 언디파인드 관련해서 웹에선 브라우저가 값을 읽었을 때 읽지 못하면 임의로 undefined를 할당한다고 기억하는데 다른 문제일까요? 아닙 제가 잘못 아는 걸까요..?
웹에서 할당해주는 것이 아닌 자바스크립트의 함수 동작 방식 때문입니다.
자바스크립트에서 함수는 기본적으로 값을 반환합니다.
만약 명시적으로 값을 반환하지 않으면, 암묵적으로 undefined를 반환하게 됩니다

TypeScript에서 void 타입은 함수가 값을 반환하지 않는다는 것을 명시적으로 나타내기 위해 사용됩니다.
실제로는 undefined가 반환이 된다.

```tsx
function someFunction(): string | number {
  return 5;
}

// 우리는 someFunction이 number인걸 아니 as로 확실하게 컴퓨터에 알려ㅛ준다.
// 근데 너무 많이 사용하면 안된다 사용이 많아지면, 타입 할당을 잘못한 것이다.
const a = someFunction() as number;
```

한 번 정의한 함수가 `다양하게 재사용` 될 수 있는 이유는 무엇 덕분일까?
-> 매개변수를 받기 때문에
그렇다면 한 번 정의한 타입을 `다양하게 재사용하는` 방법은 없을까?
-> 타입에도 매개변수를 줄 수는 없을까?
