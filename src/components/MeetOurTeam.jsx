import React from "react";

const teamMembers = [
  {
    name: "Emily Johnson",
    role: "Head Chef",
    img: "https://media.istockphoto.com/id/1194938286/photo/lovely-plus-sizewoman-workingg-at-her-bakery.jpg?s=612x612&w=0&k=20&c=UuKrkCR_hjriQKGNHbMI4Ot4yI5AFvcW3hxvvQ6-unQ=",
  },
  {
    name: "James Carter",
    role: "Sous Chef",
    img: "https://images.pexels.com/photos/4253306/pexels-photo-4253306.jpeg",
  },
  {
    name: "Sophia Martinez",
    role: "Pastry Chef",
    img: "https://images.pexels.com/photos/3772531/pexels-photo-3772531.jpeg",
  },
  {
    name: "Liam Anderson",
    role: "Grill Master",
    img: "https://images.pexels.com/photos/4253303/pexels-photo-4253303.jpeg",
  },
  {
    name: "Olivia Thompson",
    role: "Line Cook",
    img: "https://images.pexels.com/photos/5946635/pexels-photo-5946635.jpeg",
  },
  {
    name: "Olivia Thompson",
    role: "Line Cook",
    img: "https://images.pexels.com/photos/5946635/pexels-photo-5946635.jpeg",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-12 mt-10 bg-[#FDF3E7] rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#A35D3D] play">Meet Our Team</h2>
        <p className="text-[#A35D3D]/60 lato mt-2">Passionate chefs creating delicious experiences.</p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className=" p-4 relative rounded-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="w-[80%] bg-[#FDF3E7]/80 mx-auto py-2 absolute bottom-8  rounded-lg left-10">
              <h3 className="text-xl font-semibold  text-[#3A2D1F]">{member.name}</h3>
              <p className="text-[#3A2D1F]/70 font-bold ">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
