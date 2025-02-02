import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
const Events = () => {
  // State to track flipped status of each card
  // const [flippedCards, setFlippedCards] = useState({});
  const [flip, setFlip] = useState(false);
  // // Toggle flip state for a specific card
  // const handleFlip = (index) => {
  //   setFlippedCards((prev) => ({
  //     ...prev,
  //     [index]: !prev[index], // Toggle the specific card
  //   }));
  // };
  const events = [
    {
      event_name: "Campus Carnival",
      event_content: "Ditch the boredom and participate in an array of fun events",
      event_date: "25th Oct 2023",
      event_icon: "fa-solid fa-terminal fa-3x"
    },
    {
      event_name: "Tech-A-Thlon 2.0",
      event_content: "A bvest event filled with fun and challenges as highly calibered coders compete against each other",
      event_date: "29th Mar 2023",
      event_icon: "fa-solid fa-comment fa-3x"
    },
    {
      event_name: "Geek out",
      event_content: 'A bvest event to arrange the jumbled pieces of code as the time running is out',
      event_date: "29th Mar 2023",
      event_icon: "fa-regular fa-object-group fa-3x"
    },
    {
      event_name: "Coding and College",
      event_content: "The guest for the session are Mr.Varun Kohli(CEO and Co-founder of Coding Blocks) and Mr. Kartik Mathur.(Co-founder of Coding Blocks)",
      event_date: "27th Dec 2022",
      event_icon: "fa-solid fa-terminal fa-3x"
    },
  ];

  return (
    <div name="events" className="w-full min-h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20 md:text-left text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Past Events</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {events.map(({ event_name, event_content, event_date, event_icon }, index) => (
            <div
              key={index}
              className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500 bg-[#622e31]"
            >
              <div className='flex gap-4 items-center'>
                <i class={event_icon}></i>
                <h3 className="text-2xl font-bold text-[#ff525d]">{event_name}</h3>
              </div>
              <p className="mt-2">{event_content}</p>
              <p className="text-lg mt-2 text-gray-300 justify-end flex gap-2 items-center"><i class="fa-regular fa-calendar-check"></i>{event_date}</p>
              
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}

export default Events;