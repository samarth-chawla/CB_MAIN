import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Ms. Neha Gupta",
      role: "Faculty Mentor",
      url: "/images/nehaMaam.jpeg"
    },
    {
      name: "Muskan Nisar",
      role: "Vice Chairperson",
      url: "/images/MuskanNisar.jpg"
    },
    {
      name: "Gaurav",
      role: "Chairperson",
      url: "/images/Gaurav.jpeg"
    },
    {
      name: "Md Danish",
      role: "Vice Chairperson",
      url: "/images/Danish_2-min.jpg"
    }
  ];

  return (
    <div name="team" className="w-full min-h-screen text-white md:text-left text-center mt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Our Team</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {team.map(({ name, role, url }, index) => (
            <div
              key={index}
              className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500 bg-[#622e31]"
            >
              <img
                src={url}
                alt={name}
                className="rounded-full w-32 h-32 mx-auto object-cover"
              />
              <h3 className="text-xl font-bold text-center mt-4 ">{name}</h3>
              <p className="text-center text-[#ff525d]">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

// <SingleCard 
// return (
//   <div className="App">
//   <div className="card-grid">
//   {cards.map(card => (
//   <SingleCard
//   key={card.id}
//   card={card}
//   handleChoice={handleChoice}
//   flipped={}
//  />
//  ))} 
//   </div>


//SiingleCard
// export default function SingleCard({ card, handleChoice }) {

//   const handleClick = () => {
//   handleChoice(card)
//  }
//   return (
//   <div className="card">
//   <div>
//   <img className="front" src={card.src} alt="card front" />
//   <img
//   className="back"
//   src="/img/cover.png"
//   onClick={handleClick]
//   alt="card back"
// />
//   </div>
//   </div>