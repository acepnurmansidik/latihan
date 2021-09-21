import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
// style
import style from "./users.module.css";

interface UserLayout {
  // mendifined dataUser sebagai Array
  dataUser: Array<any>;
}
// props mendapatkan dataUser dari UserLayout
export default function User(props: UserLayout) {
  // desctruture props,
  const { dataUser } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users page">
      {dataUser.map((user) => (
        // ketika tombol di klik maka akan masuk ke age detail sesuai id yang dikirmkan
        // lalu akan di tangkap oleh dynamic routes
        <div
          key={user.id}
          onClick={() => router.push(`/users/${user.id}`)}
          className={style.cardName}
          onKeyDown={() => router.push(`/users/${user.id}`)}
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
      ;
    </Layout>
  );
}

// bisa digunakan utk call API

// getStaticProps akan memanggil API terlbih dahulu,
// lalu datanya dikerim ke browser yang merequestnya(berupa html)

// getStaticProps sangat cocok utk data yang statis
export async function getStaticProps() {
  // ambil data lewat API menggunakan fetch
  const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const dataUser = await result.json();
  // setelah mendapatkan datanya maka masukan kedalam dataUser
  return {
    props: {
      dataUser,
    },
  };
}
