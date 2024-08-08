import Head from "next/head";

interface ComponentProps {
  title: string;
}
const WebPageTitle = ({ title }: ComponentProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="Zainab Oyedeji's Portfolio" key="title" />
      </Head>
    </div>
  );
};
export default WebPageTitle;
