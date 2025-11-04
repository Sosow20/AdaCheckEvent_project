import events from '../assets/events.jpg'

export function HeroBanner (){

    return (

        <div className="HeroBanner h-60 relative flex justify-center-safe items-center-safe text-white">
        {/* <svg className=" absolute  bg-cover bg-[url(./assets/events.jpg)] h-full w-full"></svg> */}
        {/* <img src={events} className=' bg-contain h-full w-full' /> */}
        <h1 className=" absolute text-3xl"> Suivez vos événements où que vous soyez </h1>
        </div>
    )

}