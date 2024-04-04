import { VscLoading } from "react-icons/vsc";
const Loading = () =>{
    return(
        <div className="flex justify-center items-center h-[30vh] lg:w-3/4 flex">
            <VscLoading className="animate-spin text-4xl dark:text-slate-50" />

        </div>
    )
}
export default Loading;