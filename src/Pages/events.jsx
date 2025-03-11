
import campusCarnival from "../../public/images/campusCarnival/carnival.png"
import hackblocks from "../../public/images/hackblocks/hack.png"
import pixel from "../../public/images/pixelToPitch/pixel.png"
import ux from "../../public/images/uxlerate/ux.png"
export function EventsPage() {
    const events = [
        {
          event_name: "Hackblocks 1.0",
          event_content: "Flagship hackathon held in three stages and final event was hosted in microsoft office",
          event_date: "25th Oct 2023",
          event_icon: "fa-solid fa-terminal fa-3x",
          event_image:hackblocks
        },
        {
          event_name: "Campus Carnival 2.0",
          event_content: "A bvest event filled with fun and challenges as highly calibered coders compete against each other",
          event_date: "29th Mar 2023",
          event_icon: "fa-solid fa-comment fa-3x",
          event_image:campusCarnival
        },
        {
          event_name: "Pixel to pitch",
          event_content: 'Event to pitch your product and create pixel perfect mvps for products.',
          event_date: "29th Mar 2023",
          event_icon: "fa-regular fa-object-group fa-3x",
          event_image: pixel
        },
        {
          event_name: "UXelerate",
          event_content: "Fun event focused on ease in user interface and good user experience",
          event_date: "27th Dec 2022",
          event_icon: "fa-solid fa-terminal fa-3x",
          event_image: ux
        },
      ];
    return (
        <div className="bg-black text-white w-full h-full flex flex-col items-center relative p-16">
            <div className="text-3xl p-5 poppins fixed top-0 w-full flex flex-col items-center backdrop-blur-lg border-2 border-red-600/50 rounded-full mt-1">
                <p>Past Events</p>
            </div>
            
            <div className="h-full w-full">
                {events.map((index,value)=>{
                    return (
                        <div key={index.event_name} className="h-screen w-full md:flex items-center gap-5">
                            {value%2===0 && <div className="hidden md:flex md:w-1/2 justify-center">
                                    <img src={index.event_image} className="min-h-[350px] min-w-350px] max-w-[550px] max-h-[550px] shadow-custom"/>
                                </div>}
                                {<div className="w-full md:hidden flex justify-center">
                                    <img src={index.event_image} className="min-h-[200px] min-w-[200px] max-h-[400px] max-w-[400px] shadow-custom"/>
                                </div>}
                                <div className="w-full h-full md:w-1/2 flex flex-col gap-2 bg-green-400">
                                    <i className={index.event_icon}></i>
                                    <p className="text-3xl md:text-6xl">{index.event_name}</p>
                                    <p>{index.event_content}</p>
                                    <p>{index.event_date}</p>
                                </div>
                                {value%2!=0 && <div className="hidden md:flex md:w-1/2 justify-center  rounded-md">
                                    <img src={index.event_image} className="min-h-[350px] min-w-[350px] max-w-[550px] max-h-[550px] shadow-custom"/>
                                </div>}
                           
                        </div>
                    )
                })}
            </div>
        </div>
    )
}