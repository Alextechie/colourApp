import Image from "next/image";
import Link from "next/link";


export function Login() {
    return (
        <div className="flex flex-col text-center">
            <div className="form-inputs bg-slate-900 p-10 flex flex-col items-center gap-6">
                <span className="mt-4 text-white">Welcome back</span>
                <div className="">
                    <label htmlFor="username" className="text-white">Username</label>
                    <div className="relative flex items-center gap-4 bg-white w-60 h-12 rounded-md">
                        <Image
                            src="/edit.png"
                            alt=""
                            width={22}
                            height={22}
                            className="absolute ml-2"
                        />
                        <input type="text" placeholder="John Doe" className="ml-8 w-30 h-6 outline-none" name="username" />
                    </div>
                </div>
                {/**EMAIL INPUT */}
                <div className="">
                    <label htmlFor="email" className="text-white">Email</label>
                    <div className="relative flex items-center gap-4 bg-white w-60 h-12 rounded-md">
                        <Image
                            src="/email.png"
                            alt=""
                            width={22}
                            height={22}
                            className="ml-2"
                        />
                        <input type="email" placeholder="johndoe@gmail.com" className="outline-none" name="email" />
                    </div>
                </div>
                {/**PASSWORD INPUT */}
                <div className="">
                    <label htmlFor="username" className="text-white">Password</label>
                    <div className="relative flex items-center gap-4 bg-white w-60 h-12 rounded-md">
                        <Image
                            src="/padlock.png"
                            alt=""
                            width={20}
                            height={20}
                            className="ml-2"
                        />
                        <input type="password" placeholder="*******" className="outline-none" name="password" />
                    </div>
                </div>
                <button type="submit" className="text-gray-600 bg-slate-300 p-2 rounded-md hover:bg-slate-500 hover:text-white">Submit</button>
                <p className="text-white">Don't have an account? <Link href="/signup" className="text-gray-400">Register</Link></p>
            </div>
        </div>
    )
}