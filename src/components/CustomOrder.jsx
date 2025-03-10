import { FaPalette, FaClipboardCheck, FaBirthdayCake } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Choose Your Design",
    description: "Select your flavor, size, and design preferences.",
    icon: <FaPalette className="w-20 h-20 text-[#A35D3D]" />,
  },
  {
    id: 2,
    title: "Confirm & Customize",
    description: "Finalize details, add special requests, and confirm your order.",
    icon: <FaClipboardCheck className="w-20 h-20 text-[#A35D3D]" />,
  },
  {
    id: 3,
    title: "Enjoy the Delight!",
    description: "Receive your freshly made custom order and celebrate!",
    icon: <FaBirthdayCake className="w-20 h-20 text-[#A35D3D]" />,
  },
];

export default function CustomOrderSteps() {
  return (
    <div className="flex flex-col bg-[#FDF3E7] items-center md:p-20  p-5 lg:p-20 border-y-[#F5E6D3]/30 border-2  border-x-0  w-full  ">
      <h2 className="md:text-4xl lg:text-4xl text-3xl text-center md:text-left lg:text-left play font-bold text-[#720E18] mb-6">Place Custom Order in 3 Steps</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step) => (
          <div key={step.id} className="border-x-1 border-[#ffefda]/60  flex flex-col items-center text-center  p-6  w-64 ">
            <div className="p-4 rounded-full mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[#3A2D1F]/70 lato">{step.title}</h3>
            {/* <p className="text-gray-500 mt-2">{step.description}</p> */}
          </div>
        ))}
      </div>

     
    </div>
  );
}
