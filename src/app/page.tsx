import { BiHomeCircle, BiUser } from 'react-icons/bi'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'
import { BsBookmark, BsBell, BsTwitter, BsEnvelope, BsThreeDots } from 'react-icons/bs'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Search',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }
]

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col items-stretch h-screen">
          <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
            {
              NAVIGATION_ITEMS.map((item) => (
                <Link className='hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6' href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div><item.icon /></div>
                  {item.title !== "Twitter" && <div>{item.title}</div>}
                </Link>
              ))
            }
            <button className='w-full m-4 bg-primary rounded-full p-4 text-xl text-center hover:bg-opacity-70 transition duration-200'>
              Tweet
            </button>
          </div>
          <button className='rounded-full bg-transparent flex items-center space-x-2 m-4 p-4 text-center hover:bg-opacity-70 transition duration-200 w-full justify-between hover:bg-white/10'>
            <div className='flex items-center text-sm space-x-2'>
              <div className='rounded-full bg-slate-400 w-12 h-12'>
              </div>
              <div className='text-left text-xs'>
                <div className='font-semibold'>Username</div>
                <div className=''>@usertag</div>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  )
}

export default Home