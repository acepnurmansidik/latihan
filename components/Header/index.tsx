import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.item}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={style.item}>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
}
