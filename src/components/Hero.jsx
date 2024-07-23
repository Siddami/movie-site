import logo from '../images/tv.png'
import poster from '../images/Poster.png'
import menu from '../images/Menu alt 4.png'
import tomatoe from '../images/tomatoe.png'
import play from '../images/Play.png'

export default function Hero() {

    const heroStyle = {
      backgroundImage: `url(${poster})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
      maxwidth: '100%',
    };

    return (
      <header style={heroStyle} className='p-2 md:px-20 w-full'>
          <nav className="lg:p-6 flex justify-between items-center h-20 gap-2" >
              <div className='flex justify-center items-center'>
                  <img src={logo} className='w-8 h-8 lg:w-12 lg:h-12'/>
                  <h2 className='lg:text-xl text-sm font-bold text-white lg:px-4'>MovieBox</h2>
              </div>
              <div className=''>
                    <form action="search" className='flex justify-between md:w-96 md:px-4 w-52 items-center relative rounded ring-2 ring-white'>
                        <input type="search" className=' ring-transparent text-xs md:text-lg bg-transparent block rounded' placeholder='What do you want to watch?'/>
                        <button type='submit'><i className='text-white block p-2 fa fa-search text-xs md:text-lg'></i></button>
                    </form>
              </div>
              <div className='flex justify-between items-center'>
                <h2 className='text-white p-3 hidden md:inline-flex md:text-xl'>Sign in</h2>
                <button className='block bg-rose-700 rounded-full ring-rose-700 p-2'>
                  <img src={menu} className='w-4 h-4 md:w-6 md:h-6'/>
                </button>
              </div>
        </nav>
        <div className='text-white flex flex-col my-20 mx-7 justify-start items-start gap-3 md:gap-5  md:w-2/4'>
            <h1 className='md:text-6xl text-4xl'>John Wick 3 : Parabellum</h1>
            <div className='flex gap-5'>
              <div className='flex justify-start items-center'>
                <img src="./vectors/imdb.svg" alt="imdb rating" className='w-8 h-5'/>
                <span className='p-2 text-sm'>880/100</span>
              </div>
              <div className='flex justify-start items-center'>
                <img src={tomatoe} className='w-3 h-4'/>
                <span className='p-2 text-sm'>97%</span>
              </div>
            </div>
            <p>John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <button className='bg-rose-700 inline-flex items-center p-2 rounded'><img src={play} className=''/><span>Watch Trailer</span> </button>
        </div>
      </header>
    );
  }
