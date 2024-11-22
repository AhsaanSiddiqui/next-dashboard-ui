import Image from "next/image"

const LoginPage = () => {
    return (
        <div className="">
            <div className="flex h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center mb-5">
                    <Image src="/logo-colored.png" alt="logo" width={200} height={44} />
                    <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">Email address</label>
                        <div className="mt-2">
                        <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label className="block text-sm/6 font-medium text-gray-900">Password</label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                        </div>
                        <div className="mt-2">
                        <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm/6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 py-3 px-5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500">Sign in</button>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage