"use client"

import { addUser } from "@/app/api/data/route";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";


const initialState = {
    message: null
}

export async function Signup() {

    //  // NEED TO BE LOOKED INTO
    // const router = useRouter();
    // const [state, formAction] = useFormState(addUser, initialState)
    // const handleClick = async () => {
    //     const data = await axios.post('/api/data', {addUser})
    // }
    return (
        <div className="signin">
            <div className="flex items-center flex-col bg-slate-800 py-4">
                {/**EACH INPUT SECTION */}
                <form action="">
                    <div className="flex flex-col items-center gap-2">
                        <label htmlFor="username" className="text-white">Username</label>
                        <div className="relative flex items-center gap-4 bg-white w-64 h-12 rounded-md">
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
                    <div className="flex items-center flex-col gap-2 p-4">
                        <label htmlFor="email" className="text-white">Email</label>
                        <div className="relative flex items-center gap-4 bg-white w-64 h-12 rounded-md">
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
                    <div className="flex items-center flex-col gap-2 p-4">
                        <label htmlFor="country" className="text-white">Country</label>
                        <div className="relative flex items-center gap-4 bg-white w-64 h-12 rounded-md">
                            <Image
                                src="/world.png"
                                alt=""
                                width={24}
                                height={24}
                                className="ml-2"
                            />
                            <input type="text" placeholder="Country" name="country" className="outline-none" />
                        </div>

                    </div>
                    <div className="flex items-center flex-col gap-2 p-4">
                        <label htmlFor="username" className="text-white">Password</label>
                        <div className="relative flex items-center gap-4 bg-white w-64 h-12 rounded-md">
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
                    <div className="flex flex-col mt-2 items-center text-lg">
                        <button className="text-sm rounded-lg bg-green-400 w-24 h-8 hover:bg-green-600" onClick={handleClick}>Submit</button>
                        <span className="text-gray-300 mt-6">Already have an account?  <Link href="/login" className="text-gray-500">Login</Link></span>
                    </div>
                </form>
            </div>

        </div >
    )
}