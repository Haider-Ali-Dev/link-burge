import facebookIcon from '../../public/facebook.svg'
import snapchatIcon from '../../public/snapchat.svg'
import twitterIcon from '../../public/twitter.svg'
import instagramIcon from '../../public/instagram.svg'
import Image from 'next/image';
const SocialLinks = ({ }) => {
    return (

        <div className='flex justify-center gap-11'>

            <a href='https://facebook.com'>
                <Image width={24} height={46} priority src={facebookIcon} />
            </a>
            <a href='https://snapchat.com'>
                <Image width={46} height={43} priority src={snapchatIcon} />
            </a>
            <a href='https://twitter.com'>
                <Image width={45} height={37} priority src={twitterIcon} />
            </a>
            <a href='https://instagram.com'>
                <Image width={48} height={35} priority src={instagramIcon} />
            </a>
        </div>
    )
}

export default SocialLinks;