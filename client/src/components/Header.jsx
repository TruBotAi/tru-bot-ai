function Header() {
  return (
    <>
      <header className=' flex justify-between items-center p-3 rounded-full bg-white text-black w-6xl '>
        <div className='logo pl-5 '>
          <h1 className='m-none font-bold text-2xl'>TruBot</h1>
        </div>

        <nav className='flex items-center gap-4 justify-between'>
          <ul className='flex item-center justify-center gap-5 font-medium'>
            {["Home", "Pricing", "Blog", "About", "Contact"].map((li) => (
              <li key={li} className='px-5 py-2 rounded-xs cursor-pointer'>
                {li}
              </li>
            ))}
          </ul>
        </nav>
        <div className='acct'>
          <button className='text-base font-lg mr-5 cursor-pointer'>SignUp</button>
          <button className='border-2 bg-black p-2  rounded-full px-5 text-white  cursor-pointer text-lg font-bold'>Login</button>
        </div>
      </header>
    </>
  )
}
export default Header
