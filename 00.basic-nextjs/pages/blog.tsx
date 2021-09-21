import Layout from "../components/Layout";
import style from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}
export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog page">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={style.postBlog}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
}

// getServerSideProps digunakan utk data yg dinamis
export async function getServerSideProps() {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const dataBlog = await result.json();

  return {
    props: {
      dataBlog,
    },
  };
}
