import fraudImg from "./assets/home1.png";
import fraudDetectedImg from "./assets/FraudDetected.png";

import churnImg from "./assets/Stay1.png";
import churnLeaveImg from "./assets/Will leave.png";

import houseImg from "./assets/Homeprediction.png";
import houseChartImg from "./assets/chart.png";

import loanApprovedImg from "./assets/Approved1.png";
import loanRejectedImg from "./assets/Rejected1.png";

import heroImg from "./assets/hero.png";

import { motion } from "framer-motion";

export default function App() {

  // =========================
  // PROJECT DATA
  // =========================
  const projects = [
    {
      title: "Fraud Detection System",
      description:
        "Machine Learning system that detects fraudulent banking transactions using classification algorithms.",
      image: fraudImg,
      secondImage: fraudDetectedImg,
      github: "https://github.com/CraigChiambiro/fraud-detection-system",
      demo: "https://fraud-detection-system-xhtapccyai4u7weahuzfzt.streamlit.app/",
      tech: ["Python", "Scikit-learn", "Streamlit"]
    },

    {
      title: "Bank Churn Prediction",
      description:
        "Predicts whether bank customers are likely to leave using machine learning classification.",
      image: churnImg,
      secondImage: churnLeaveImg,
      github: "https://github.com/CraigChiambiro/bank-churn-prediction",
      demo: "https://csh7dymb798bmbq8znz8xb.streamlit.app/",
      tech: ["Machine Learning", "Pandas", "Streamlit"]
    },

    {
      title: "House Price Prediction",
      description:
        "Regression-based AI system that estimates house prices using property features.",
      image: houseImg,
      secondImage: houseChartImg,
      github: "https://github.com/CraigChiambiro/house-price-prediction",
      demo: "https://house-price-prediction-jk3v3ewq5nylyrbsmb839h.streamlit.app/",
      tech: ["Regression", "NumPy", "Scikit-learn"]
    },

    {
      title: "Loan Prediction System",
      description:
        "Predicts loan approval outcomes using machine learning and financial applicant data.",
      image: loanApprovedImg,
      secondImage: loanRejectedImg,
      github: "https://github.com/CraigChiambiro/loan-prediction-system",
      demo: "https://loan-prediction-2tus5jtymgsdjr895y5hux.streamlit.app/",
      tech: ["Classification", "Python", "AI"]
    }
  ];

  // =========================
  // SKILLS
  // =========================
  const skills = [
    "Python",
    "Machine Learning",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Streamlit",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Data Analysis",
    "AI Applications"
  ];

  return (

    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen">

      {/* ========================= */}
      {/* NAVBAR */}
      {/* ========================= */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wide">
            Craig Portfolio
          </h1>

          <div className="hidden md:flex gap-6 text-gray-300">

            <a
              href="#home"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <motion.section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-blue-400 font-semibold tracking-widest uppercase">
              Machine Learning Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
              Craig Chiambiro
            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              I build intelligent software systems using Machine Learning,
              Artificial Intelligence, and modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              {/* GITHUB BUTTON */}
              <a
                href="https://github.com/CraigChiambiro"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition shadow-lg"
              >
                GitHub
              </a>

              {/* LINKEDIN BUTTON */}
              <a
                href="https://www.linkedin.com/in/craig-chiambiro-6b3394257"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition shadow-lg"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div>

            <img
              src={heroImg}
              alt="Portfolio Hero"
              className="rounded-3xl shadow-2xl border border-gray-800"
            />

          </div>

        </div>

      </motion.section>

      {/* ========================= */}
      {/* PROJECTS SECTION */}
      {/* ========================= */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        {/* SECTION TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Real-world AI and Machine Learning applications.
          </p>

        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-blue-500 transition duration-300 shadow-2xl"
            >

              {/* PROJECT IMAGES */}
              <div className="grid grid-cols-2 gap-1 bg-black">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />

                <img
                  src={project.secondImage}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />

              </div>

              {/* PROJECT INFO */}
              <div className="p-6">

                <div className="flex justify-between items-start gap-4">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">
                    ML Project
                  </span>

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex gap-4">

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    GitHub
                  </a>

                  {/* LIVE DEMO */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ========================= */}
      {/* SKILLS SECTION */}
      {/* ========================= */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build intelligent systems.
          </p>

        </div>

        {/* SKILLS GRID */}
        <div className="flex flex-wrap justify-center gap-4">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-800 hover:bg-blue-600 transition px-5 py-3 rounded-xl shadow-lg"
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </section>

      {/* ========================= */}
      {/* CONTACT SECTION */}
      {/* ========================= */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >

        <h2 className="text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
          Open to internships, junior software engineering roles,
          machine learning opportunities, and collaborations.
        </p>

        {/* CONTACT BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="mailto:chiambirocraig@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/CraigChiambiro"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            GitHub
          </a>

        </div>

      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

        <p>
          © 2026 Craig Chiambiro | Built with React + Tailwind CSS
        </p>

      </footer>

    </div>

  );
}