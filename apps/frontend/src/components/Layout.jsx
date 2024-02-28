import { useAuth0 } from "@auth0/auth0-react";
const Layout = function () {
    const { loginWithRedirect } = useAuth0();
    function loginHandler() {
        loginWithRedirect();
    }

    return (
        <div className="flex flex-col h-full">
            <header className="flex-none h-16 bg-purple-300 overflow-clip truncate">
                Header asdasd Header asdasdHeader asdasdHeader asdasdHeader asdasdHeader asdasdHeader asdasdHeader asdasdHeader asdasd
            </header>
            <main className="grow flex flex-row">
                <aside className="flex flex-col min-w-48">
                    <section className="min-h-32">
                        logo
                    </section>
                    <section className="grow bg-blue-200">
                        menu
                    </section>
                </aside>
                <div className="grow bg-emerald-300">
                    <button onClick={loginHandler}>Click</button>
                </div>
            </main>
            <footer className="basis-0">
            Footer
            </footer>
        </div>
    )
}

export default Layout;