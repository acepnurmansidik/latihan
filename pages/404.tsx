import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Custom404() {
  // useRouter() digunakan utk meridirect ke halam yang ditentukan
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // setelah 2s halaman akan redirect ke home
      router.push("/");
    }, 2000);
    // menambahkan array digunakan utk ertama kali
  }, []);
  return (
    <div className="title-not-found">
      <h1>Uppssss...</h1>
      <p>404 | Page not found</p>
    </div>
  );
}
