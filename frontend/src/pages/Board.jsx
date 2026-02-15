import { motion } from 'framer-motion'

const boardMembers = [
  { name: 'President' },
  { name: 'Vice President' },
  { name: 'General Secretary' },
  { name: 'Treasurer' },
  { name: 'Technical Head' },
]

const managementCommittee = [
    { name: 'Example 1', role: 'Management Committee Member' },
    { name: 'Example 2', role: 'Management Committee Member' },
    { name: 'Example 3', role: 'Management Committee Member' },
  ]
  
  const Board = () => {
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
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Meet the Board
          </motion.h1>
  
          
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24">
            {boardMembers.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
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
                transition={{ type: 'spring', stiffness: 300 }}
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
    )
  }
  
  export default Board