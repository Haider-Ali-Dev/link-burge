
import TopContent from "./components/TopContent";
import SocialLinks from "./components/SocialLinks";
import NonSocialLinks from "./components/NonSocialLinks";
import pfp from '../public/person.jpg'
import Footer from "./components/Footer";
export default async function Home() {
  const mockData = [
    {
      title: 'Link 1',
      url: 'link1.com'
    },
    {
      title: 'Link 2',
      url: 'link1.com'
    }, {
      title: 'Link 3',
      url: 'link1.com'
    }
  ]
  const mockUser = {
    name: 'Dwayne Johnson',
    image: pfp,
    bio: "American Actor"
  }
  return (
    <main className="mt-5 w-[100%] h-[100vh] flex justify-center ">
      <div className="flex justify-center flex-col">
        <TopContent user={mockUser} />
        <SocialLinks />
        <NonSocialLinks urlData={mockData} />
        {/* Not Part of lesson 2*/}
        {/* <AddUrl/> */}
      </div>

    </main>
  );
}
