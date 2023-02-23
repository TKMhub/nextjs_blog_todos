import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();

  const ligout = () => {
    cookie.remove("access_token", { path: "/" });
    router.push("/");
  };
  return (
    <Layout title="mainpage">
      <div className="mb-10">
        <Link href={"blog-page"}>
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-10 py-12 rounded">
            visit Blog
          </a>
        </Link>
        <Link href={"task-page"}>
          <a className="bg-blue-500 mr-8 hover:bg-blue-600 text-white px-10 py-12 rounded">
            visit Task
          </a>
        </Link>
      </div>
      <svg
        onClick={ligout}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="mt-10 cursor-pointer w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    </Layout>
  );
}
