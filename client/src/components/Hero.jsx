function Hero() {
  return (
    <>
      <section className='hero text-center p-9'>
        <div className='title text-white'>
          <h1 className='text-7xl font-bold '>The only chatbot platform you need</h1>
          <p className='text-lg text-white-50 my-4'>The only easy-to-use chatbot platform you need to streamline lead gen, customer support and other use cases – at scale and cost-effectively.</p>
          <div className='btn w-fit m-auto flex items-center gap-4'>
            <button className='p-5 rounded-xl bg-blue-400 text-white font-bold text-lg hover:bg-blue-600'>Show demo</button>
            <button className='bg-transparent text-white border-1 border-indigo-500 p-5 font-bold rounded-xl text-lg'>Try for free</button>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero
