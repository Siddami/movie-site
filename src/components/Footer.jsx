
export default function Footer(){
    return(
        <footer className="flex flex-col justify-center items-center p-6 md:gap-5">
            <div className="flex gap-5 md:m-3">
                <a href="#"><img src="./vectors/facebook.svg" className="w-5 h-5" /></a>
                <a href="#"><img src="./vectors/fa-brands_instagram.svg" className="w-5 h-5" /></a>
                <a href="#"><img src="./vectors/fa-brands_twitter.svg" className="w-5 h-5" /></a>
                <a href="#"><img src="./vectors/fa-brands_youtube.svg" className="w-5 h-5" /></a>
            </div>
            <div className="flex gap-5 m-3 text-xs">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <small className="text-gray-600 text-xs">© 2021 MovieBox by Adriana Eka Prayudha </small>
        </footer>
    )
}
