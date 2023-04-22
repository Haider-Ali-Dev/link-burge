import Image from "next/image";
import person from '../../public/person.jpg'
const TopContent = ({ user }) => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <Image className="w-[145px] h-[145px]  rounded-[360px]" src={user.image} />
                </div>
            </div>
            <h1 className="ff1 text-center mt-2 font-extrabold text-[48px]">{user.name}</h1>

        </div>
    )

}

export default TopContent;