export function EditForm() {
    return (
        <div className="edit-form flex flex-col bg-slate-900 text-gray-500 p-6">
            <form action="post" className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center text-left gap-4">
                    {/**Username */}
                    <label htmlFor="name" className="text-gray-100">Username</label>
                    <input type="text" placeholder="Username" className="rounded-md w-64 h-10 text-center" />
                    {/**Email */}
                    <label htmlFor="email" className="text-gray-100">Email Address</label>
                    <input type="text" placeholder="Email Address" className="rounded-md w-64 h-10 text-center" />
                    {/**Primary Colour Edit */}
                    <label htmlFor="primary-color" className="text-gray-100">Primary Colour</label>
                    <input type="text" placeholder="Enter HexCode" className="rounded-md w-64 h-10 text-center" />
                    {/**Secondary Colour */}
                    <label htmlFor="secondary-color" className="text-gray-100">Secondary Colour</label>
                    <input type="text" placeholder="Enter the HexCode" className="rounded-md w-64 h-10 text-center" />
                    {/**Tertiary Colour */}
                    <label htmlFor="tertiary-color" className="text-gray-100">Username</label>
                    <input type="text" placeholder="Enter the HexCode" className="rounded-md w-64 h-10 text-center" />
                    {/**Role */}
                    <label htmlFor="role" className="text-gray-100">Role</label>
                    <input type="text" placeholder="Choose Role" className="rounded-md w-64 h-10 text-center" />
                    <button type="submit"
                    className="text-white rounded-md px-4 py-2 bg-neutral-400
                    hover:bg-neutral-100 hover:text-gray-500"
                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    )
}