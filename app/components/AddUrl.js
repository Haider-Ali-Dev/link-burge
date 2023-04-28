import { useState } from "react";
import { createLink } from "../utils/data";
const AddUrl = ({ user }) => {
    const [addLinkOpen, setAddLinkOpen] = useState(false);
    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")

    const addLink = async () => {
        if (url && title) {
            // check if url includes twitter, snapchat, instagram or facebook
            const linkType = url.includes("twitter") ? "twitter" : url.includes("snapchat") ? "snapchat" : url.includes("instagram") ? "instagram" : url.includes("facebook") ? "facebook" : "link"
            const data = await createLink({ user_id: user.id, linkType: linkType, url, title, order: 1 })
            console.log(data)
        }

    }
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
                            <input onChange={(e) => setUrl(e.target.value)} className="p-2 border-black font-extrabold" placeholder="Url" />
                            <button onClick={addLink} className="p-3 rounded bg-white font-extrabold border-black">Add Link</button>
                            <button onClick={() => setAddLinkOpen(false)} className="p-3 rounded bg-red-400 font-extrabold border-black">Close</button>

                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default AddUrl