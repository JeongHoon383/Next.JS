import { useRouter } from "next/router";
// next/router로 불러올 것

export default function Page() {
  const router = useRouter();
  // router 객체 저장

  const { q } = router.query;

  return <h1>Search {q}</h1>;
}
