import Head from "next/head"

const Layout = ({ children, page}) => {
    return (
        <div className="bg-blue-50 pt-5 text-center min-h-screen ">
            <Head>
                <title>{page}</title>
            </Head>
            <header>
                {children}
            </header>
        </div>
    );
};

export default Layout;