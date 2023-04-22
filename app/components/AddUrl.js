import { useState } from "react";
const AddUrl = ({ pid }) => {
    console.log(pid)
    const [addLinkOpen, setAddLinkOpen] = useState(false);
    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    return (
        <div className="mt-5">
            {
                addLinkOpen ? null : <button onClick={() => setAddLinkOpen(true)} className="p-3 rounded bg-white font-extrabold border-black">Add Link</button>
            }
            {
                addLinkOpen ? (
                    <div className="flex justify-center">
                        <div className="flex flex-col gap-3 ">
                            <input onChange={(e) => setTitle(e.target.value)} className="p-2 border-black font-extrabold" placeholder="Title" />
                            <input onChange={(e) => setTitle(e.target.value)} className="p-2 border-black font-extrabold" placeholder="Url" />
                            <button className="p-3 rounded bg-white font-extrabold border-black">Add Link</button>
                            <button onClick={() => setAddLinkOpen(false)} className="p-3 rounded bg-red-400 font-extrabold border-black">Close</button>

                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default AddUrl