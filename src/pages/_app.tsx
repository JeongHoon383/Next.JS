import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
    // replace, back : 뒤로가기
  };

  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
  // App 컴포넌트의 props
  // Component : 현재 page 역할을 할 컴포넌트들을 받음
  // pageProps : Component에 전달될 페이지에 props들을 모두 객체로 보관
}

// 리액트에서의 App 컴포넌트와 같은 역할 - Root 컴포넌트
// 모든 페이지의 역할을 하는 컴포넌트들의 부모 컴포넌트
