'use client'
const Searchbox = ({term, setTerm, handler}:any) => {
    return (
        <>
            <input onChange={(e) => setTerm(e.target.value)} value={term}
                onKeyDown={handler}
                type="text" placeholder="دنبال چی میگردی؟" className="w-2/3 bg-searchBox dark:bg-slate-400 dark:placeholder:text-white placeholder:text-whiteNav  focus:outline-none ps-6 py-2 rounded-lg text-sm" />

      
        </>

    )
}
export default Searchbox;