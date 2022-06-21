import PageHead from "@/components/Head";
import styles from "../styles/Home.module.scss";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        React Hook Form with <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className={styles.grid}>
        <a className={styles.card}>
          <h2>Post form</h2>

          <span className={styles.link}>customised react hook form</span>
        </a>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <PageHead header="Home Page" />
      {page}
    </Layout>
  );
};
