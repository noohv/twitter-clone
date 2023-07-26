import LeftSidebar from "@/components/LeftSidebar"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <main></main>
        <section></section>
      </div>
    </div>
  )
}

export default Home
