import logo from '../../public/logo.svg'
import Image from 'next/image';

const Header = () => {
    return (
        <header className="p-3 bg-black">
            <div className="flex justify-between">
                <Image src={logo}/>
                <p className='ff1 text-[48px] fond-extrabold text-white'>BARGE</p>
            </div>
        </header>
    )
}

export default Header;