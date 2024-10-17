export function Admin(){
    return (
        <div className="bg-slate-800 p-6">
            <header className="text-center text-gray-300 mb-6 text-lg">Add a country and its HexCode</header>
            <form action="post" className="flex flex-col items-center gap-6">
                <label htmlFor="country" className="text-gray-200 ">Country</label>
                <input type="text" placeholder="Country Name" className="rounded-md w-64 h-10 text-center"/>
                <label htmlFor="hexcode" className="text-gray-200">Colour HexCode</label>
                <input type="text" placeholder="Enter the HexCode"className="rounded-md w-64 h-10 text-center"/>
                <button type="submit" className="rounded-md bg-slate-600 px-6 py-2 mt-4 hover:text-gray-100 hover:bg-slate-400">Add</button>
            </form>
        </div>
    )
}