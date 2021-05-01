import Head from "next/head";

const IndexPage = () => (
  <div className="flex flex-col items-center text-white justify-center min-h-screen bg-gradient-to-b from-light-blue-900 to-cyan-600">
    <Head>
      <title>Expensely - Simple expense tracking</title>
      <link rel="icon" sizes="32x32" type="image/png" href="/favicon.png" />
    </Head>

    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">Welcome to Expensely</h1>

      <p className="mt-10 text-4xl font-bold"> Coming soon </p>
    </main>

    <footer className="flex items-center justify-center w-full h-24 border-t">
      <p>Expensely © 2021</p>
    </footer>
  </div>
);

export default IndexPage;
