import Image from "next/image";
import Link from "next/link";

export function Navbar(){
    return (
        <div className="bg-slate-100 border-t-0 w-full md:text-sm sm:text-xs lg:text-lg text-gray-600">
            <div className="p-4 text-sm flex items-center justify-between bg-blue-400 text-gray-200">
                {/**START */}
                    <Link href='/' className=" hover:text-slate-800"><span>Maisy</span></Link>
                {/**CENTER */}
                    <Link href="/edit" className=" hover:text-slate-800"><span>Edit</span></Link>
                    <Link href="/signup" className=" hover:text-slate-800"><span>Register</span></Link>
                    <Link href="/login" className=" hover:text-slate-800"><span>Login</span></Link>
                {/**END */}
                <div className="flex gap-4 items-center">
                    <Image 
                        src="/logout.png"
                        alt=""
                        width={25}
                        height={25}
                    />
                    <Image 
                        src="/account.png"
                        alt=""
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </div>
    )
};