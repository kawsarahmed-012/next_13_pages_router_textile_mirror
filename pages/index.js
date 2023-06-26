import { Inter } from "next/font/google";

import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return <h1>Home</h1>;
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
