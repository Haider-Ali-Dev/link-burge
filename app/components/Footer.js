import Image from 'next/image';
import logoBlack from '../../public/logo-black.svg'

const Footer = () => {
    return (
        <footer className="p-3">
            <div className="flex justify-between">
                <p className="text-black ff1 text-[48px] ">
                 Copyright {new Date().getFullYear()}
                </p>
                <Image src={logoBlack}/>

            </div>
        </footer>
    )
}

export default Footer