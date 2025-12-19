import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

import { useTheme } from "../../context/ThemeContext"
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../../utils/data"
import { containerVariants, itemVariants } from "../../utils/helper"

const SkillsSection = () => {
    const { isDarkMode } = useTheme();
    const skillsRef = useRef(null);
    const isInView = useInView(skillsRef, { once: true, margin: '-100px' });

    const { scrollYProgress } = useScroll({
        target: skillsRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const skillBarVariants = {
        hidden: { width: '0%', opacity: 0 },
        visible: (level) => ({
            width: `${level}%`,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.3,
            },
        }),
    };


    return <section
        ref={skillsRef}
        id="skills"
        className={`py-24 px-6 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
            } relative overflow-hidden`}
    >
        {/* Background Decorations */}
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
            <div
                className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5  
                ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
            />
            <div
                className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
                    }`}
            />
        </motion.div>
        <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center mb-20"
            >
                <motion.div
                    variants={itemVariants}
                    className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-blue-400" : "text-blue-600"
                        } mb-2`}
                >
                    Skills & Technologies
                </motion.div>
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-light mb-6"
                >
                    Skills &
                    <span className="text-blue-500 font-medium"> Technologies </span>
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"
                        } max-w-2xl mx-auto font-light`}
                >
                    A comprehensive toolkit for building modern, Scalable Web
                    applications from concept to deployment
                </motion.p>
            </motion.div>
            {/* Skills Grid */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-8 lg:gap-12"
            >
                {SKILLS_CATEGORY.map((category) => {
                    return (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className={`p-8 rounded-2xl border ${isDarkMode ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                                    : "bg-white/80 border-gray-200 backdrop-blur-sm"
                                }`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center mb-6">
                                <div
                                    className={`p-3 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-100"
                                        } mr-4`}
                                >
                                    <category.icons size={24} className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-1">{category.title}</h3>
                                    <p
                                        className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                            }`}
                                    >
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill) => {
                                    return (
                                        <div key={skill.name} className="group">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium">{skill.name}</span>
                                                <span
                                                    className={`text-xs ${isDarkMode ? "bg-red-500" : "bg-red-400"
                                                        }`}
                                                >
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div
                                                className={`h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-blue-800" : "bg-gray-200"
                                                    }`}
                                            >
                                                <motion.div
                                                    initial={{ width: '0%', opacity: 0 }}
                                                    animate={{
                                                        width: isInView ? `${skill.level}%` : '0%',
                                                        opacity: isInView ? 1 : 0,
                                                    }}
                                                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                                                    className="h-full rounded-full relative overflow-hidden"
                                                >
                                                    {/* Light theme gradient layer */}
                                                    <motion.div
                                                        className="h-full w-full absolute inset-0 bg-gradient-to-r from-red-300 to-blue-500"
                                                        initial={{ opacity: isDarkMode ? 0 : 1 }}
                                                        animate={{ opacity: isDarkMode ? 0 : 1 }}
                                                        transition={{ duration: 0.35 }}
                                                    />

                                                    {/* Dark theme gradient layer */}
                                                    <motion.div
                                                        className="h-full w-full absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-600"
                                                        initial={{ opacity: isDarkMode ? 1 : 0 }}
                                                        animate={{ opacity: isDarkMode ? 1 : 0 }}
                                                        transition={{ duration: 0.35 }}
                                                    />

                                                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center mt-20"
            >
                <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-medium mb-8"
                >
                    Tech Stack
                </motion.h3>
                <motion.div className="flex flex-wrap gap-3 justify-center">
                    {TECH_STACK.map((tech) => (
                        <motion.span
                            key={tech}
                            variants={itemVariants}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                                isDarkMode
                                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                                    : "bg-blue-100 text-blue-700 border border-blue-300"
                            }`}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16"
            >
                {STATS.map((stat) => (
                    <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        className={`text-center p-6 rounded-xl ${
                            isDarkMode ? "bg-gray-900/50 border border-gray-800" : "bg-white/50 border border-gray-200"
                        }`}
                    >
                        <motion.h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                            {stat.number}
                        </motion.h3>
                        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
};

export default SkillsSection