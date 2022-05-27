import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
  if (statusCode) return <Error statusCode={statusCode} />;
  return (
    <Layout footer={false} dark={false}>
      <div className="row github">
        <div className="col-md-4 offset-md-4">
          <div className="card  github card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a
              href={user.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2 w-100"
            >
              Blog
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary w-100"
            >
              Go to GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/xJo-Joex");

  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  console.log(res);

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;
