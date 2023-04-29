import { useState, useEffect } from "react";
import Image from "next/image";
import person from '../../public/person.jpg'
import { stringify } from "postcss";
import supabase from "../supabase";
import { v4 } from "uuid";
const TopContent = ({ user, type }) => {
    const [picture, setPicture] = useState(null)
    const [copiedStatus, setCopiedStatus] = useState(false)
    useEffect(() => {
        if (user.picture === null) {
            setPicture("https://ukctpgutqywmhmykntls.supabase.co/storage/v1/object/public/images/image-placeholder")
        } else {
            setPicture(`https://ukctpgutqywmhmykntls.supabase.co/storage/v1/object/public/images/${user.picture}`)
        }
        console.log(picture, "picture")
    }, [])


    const uploadFile = async (e) => {
        try {
            const file = e.target.files[0]
            const path = `${user.id}/${v4()}`;
            await supabase.storage.from('images').upload(path, file)
            setPicture(`https://ukctpgutqywmhmykntls.supabase.co/storage/v1/object/public/images/${path}`)
            await supabase.from('profile')
                .update({ picture: path })
                .eq('id', user.id)
        } catch (error) {
            console.error(error)
        }


    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`https://link-burge.vercel.app/profile/${user.id}`)
        setCopiedStatus(true)
    }

    return (

        <div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <Image
                        alt="Profile picture"
                        className="rounded-full"
                        width={145}
                        height={145}
                        src={picture || "https://ukctpgutqywmhmykntls.supabase.co/storage/v1/object/public/images/image-placeholder"}
                    />
                </div>

            </div>

            {type !== 'view' ? <div className="flex justify-center mt-3">
                <div>
                    <input onChange={(e) => uploadFile(e)} type="file" className="p-3 text-white bg-blue-400" placeholder="Upload Profile Picture" />
                </div>

            </div>
                : null
            }
            <div className="flex justify-center mt-3">
                <button onClick={copyToClipboard} className="bg-blue-400 p-3 font-bold text-white">
                    Share {copiedStatus ? "- Copied" : ""}</button>

            </div>

            <h1 className="ff1 text-center mt-2 font-extrabold text-[48px]">{user.name}</h1>

        </div>
    )

}

export default TopContent;