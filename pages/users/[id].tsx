// import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UserDetailProps {
  user: User;
}
export default function UserDetail(props: UserDetailProps) {
  // dynamic routes

  // const router = useRouter();
  // router.query digunakan utk mendapatkan query dari path
  // const { id } = router.query;

  const { user } = props;
  // console.log(user);

  return (
    <Layout pageTitle="User detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}

// fungs getStaticPaths akan men-generate halaman staic HTML sejumlah user yang kita milki
export async function getStaticPaths() {
  // ambil data lewat API menggunakan fetch terlebih dahulu
  const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const dataUser = await result.json();
  // paths dari user2 yang kita milki, lalu mapping utk mendapatkan id user,
  // sehingga pathnya berisi objek id user
  const paths = dataUser.map((user: User) => ({
    // masukan user.id ke params
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    // fallback: false, jika tidak ada halaman yang tidak ditemukan maka akan redirect ke 404
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}
export async function getStaticProps(context: GetStaticProps) {
  // distructuring di id, didapat dari path
  const { id } = context.params;
  // ambil data lewat API menggunakan fetch secara spesifik
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await result.json();

  return {
    props: {
      user,
    },
  };
}
