import "@fontsource/dancing-script";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import boardMembersData from "../assets/boardinfo.json";

const managementCommittee = [
  { name: "Example 1", role: "Management Committee Member" },
  { name: "Example 2", role: "Management Committee Member" },
  { name: "Example 3", role: "Management Committee Member" },
];

const Board = () => {
  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    setBoardMembers(boardMembersData);
  }, []);
  return (
    <section className="min-h-screen pt-32 pb-20 bg-creme-light">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-700 max-w-2xl mx-auto mb-14">
          The driving force behind innovation and leadership at ADG.
        </p>
        {/* Board Section */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl mb-6 text-gradient"
        >
          Meet <span style={{fontFamily: "Dancing Script, cursive", fontSize: "1.2em"}}>the</span> Board
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24">
          {boardMembers.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <img
                src={member["Attach photo"]}
                alt={member["Name"]}
                className="h-35 w-35 mx-auto mb-4 border-2 border-black rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {member["Name"]}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-4">
                {member["Board position"]}
              </p>
              <p className="italic text-sm mb-4" style={{color: "#9C7B5A"}}>
                "{member["One Quote"]}"
              </p>
              <div className="flex gap-3 justify-center mt-4">
                <a
                  href={member["Instagram Link"]}
                  className="px-4 py-2 bg-amber-50 text-gray-900 text-sm rounded-lg border border-gray-400 hover:bg-amber-100 transition w-28"
                >
                  Instagram
                </a>
                <a
                  href={member["Linkedin Profile link"]}
                  className="px-4 py-2 bg-amber-50 text-gray-900 text-sm rounded-lg border border-gray-400 hover:bg-amber-100 transition w-28"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Management Committee Section */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
        >
          Meet the Management Committee
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {managementCommittee.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
