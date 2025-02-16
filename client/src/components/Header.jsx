function Header() {
  return (
    <>
      <header className=' flex justify-between items-center p-2 rounded-3xl text-black w-6xl  '>
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
          <button className='text-base font-lg mr-5 cursor-pointer text-indigo-700'>SignUp</button>
          <button className=' login border-2 p-2  rounded-3xl px-5 border-indigo-500/100 bg-indigo-50 text-indigo-500  cursor-pointer text-lg font-bold'>Login</button>
        </div>
      </header>
    </>
  )
}
export default Header
