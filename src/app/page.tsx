import LeftSidebar from "@/components/LeftSidebar"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <main className="ml-[275px] mx-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-800">
          <h1 className="text-xl font-bold my-4 px-6">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch py-4 space-x-2 border-gray-800 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
                <input type="text" className="w-full h-full text-xl placeholder:text-gray-500 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" placeholder="What's happening?" />
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className='bg-primary px-4 py-2 w-full rounded-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold'>
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({length:5}).map((_, i) => (
                <div key={i} className="border-t-[0.5px] border-b-[0.5px] border-gray-800 px-4">

                </div>
              ))
            }
          </div>
        </main>
        <section></section>
      </div>
    </div>
  )
}

export default Home
