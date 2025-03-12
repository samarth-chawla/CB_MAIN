
import campusCarnival from "../../public/images/campusCarnival/carnival.png"
import hackblocks from "../../public/images/hackblocks/hack.png"
import pixel from "../../public/images/pixelToPitch/pixel.png"
import ux from "../../public/images/uxlerate/ux.png"
import { Card } from "../components/card";
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
        <div className="bg-black text-white w-full h-full flex flex-col items-center relative px-10 mt-20">
            <div className="text-3xl p-5 poppins w-full flex flex-col items-center backdrop-blur-lg border-2 border-red-600/50 rounded-full mt-1">
                <p>Past Events 🎉</p>
            </div>
            <div className="w-full h-full py-10 flex flex-col gap-10">
                <Card title="Hackblocks 1.0" link={"/events/hackblocks"}/>
                <Card title="Campus Carnival 2.0" link={"/events/carnival"}/>
                <Card title="Pixel To Pitch" link={"/events/p2p"}/>
                <Card title="UXelerate" link={"/events/uxelerate"}/>
            </div>
        </div>
    )
}
