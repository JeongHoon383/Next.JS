import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  // 배열 형태로 id 값 반환

  return <h1>Book {id}</h1>;
}

// /book/{id} -> 동적 경로
// [...id].tsx -> catch All segment(구간, 경로)
// ... -> book 이라는 경로 뒤에 여러개의 id가 연달아 들어올 수 있다.

// catch All segment 로도 대응할 수 없는 경로가 있음
// /book -> index 경로(아무 경로도 없으면)로 요청이 오면 대응할 수 없음

// [[...id]].tsx : catch All segment 와 기본 경로도 대응할 수 있음
// optional catch All segment 방식
