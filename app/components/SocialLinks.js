import Image from 'next/image';
import facebookIcon from '../../public/facebook.svg';
import snapchatIcon from '../../public/snapchat.svg';
import twitterIcon from '../../public/twitter.svg';
import instagramIcon from '../../public/instagram.svg';

const iconsMap = {
  'facebook': facebookIcon,
  'snapchat': snapchatIcon,
  'twitter': twitterIcon,
  'instagram': instagramIcon,
};

const SocialLinks = ({ urls }) => {
  return (
    <div className='flex justify-center gap-11'>
      {urls.map(({ url, title }) => {
        const platform = Object.keys(iconsMap).find(key => url.includes(key));
        const icon = platform ? iconsMap[platform] : null;

        return (
          <a href={url} key={url.id}>
            {icon && (
              <Image
            
                src={icon}
                alt={title}
                width={title === 'Facebook' ? 24 : 48}
                height={title === 'Facebook' ? 46 : 35}
                priority
              />
            )}
          </a>
        );
      })}
    </div>
  );
};



export default SocialLinks;