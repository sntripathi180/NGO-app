import React from "react";


const tasks = [
  {
    id: 1,
    title: "Beach Cleanup",
    img: "https://source.unsplash.com/400x250/?beach,cleanup",
    desc: "Join us in keeping our beaches clean and green.",
  },
  {
    id: 2,
    title: "Tree Plantation",
    img: "https://source.unsplash.com/400x250/?tree,plantation",
    desc: "Let's plant trees to make the earth greener.",
  },
  {
    id: 3,
    title: "Food Drive",
    img: "https://source.unsplash.com/400x250/?food,donate",
    desc: "Help distribute food to those in need.",
  },
];

const Task = () => (
  <div className="min-h-screen bg-gray-50 p-6">
    <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">Tasks & Volunteering</h1>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-lg transition"
        >
          <img src={task.img} alt={task.title} className="h-48 w-full object-cover" />
          <div className="p-5 flex-1 flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h2>
            <p className="text-gray-600 mb-4 flex-1">{task.desc}</p>
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition self-center"
              onClick={() => alert(`You joined: ${task.title}`)}
            >
              Join
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Task;
