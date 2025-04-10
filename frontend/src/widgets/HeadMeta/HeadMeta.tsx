import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  keywords?: string[];
  actualData?: string[];
  pageData?: string[];
};

export const HeadMeta = ({
  title,
  description,
  keywords,
  actualData,
  pageData,
}: Props) => {
  const desc = description ? description : `Агробазар`;
  const key = keywords ? keywords.join(",") : `Агробазар`;
  const actual_data = actualData ? actualData.join(",") : "объявления";
  const page_data = pageData ? pageData.join(",") : "";

  return (
    <Head>
      <title>{title}</title>
      {description ? <meta content={description} name={"description"} /> : null}
      {keywords ? <meta content={key} name={"keywords"} /> : null}
      {actualData ? <meta content={actual_data} name={"description"} /> : null}
      {pageData ? <meta content={page_data} name={"pageData"} /> : null}
      <meta content={"width=device-width, initial-scale=1"} name={"viewport"} />
      <link href={"/favicon.ico"} rel={"icon"} />
    </Head>
  );
};
