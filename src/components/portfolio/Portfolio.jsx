import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Mern Social",
    img: "https://images.pexels.com/photos/26652844/pexels-photo-26652844/free-photo-of-a-sign-that-says-to-telescope-on-top-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "A social media site with real time chat feature, built using MERN Stack socket.io.It uses ContextAPI. It includes features like Login, Register Uploading Posts/Images and Edit, Like feature, Follow or Unfollow, fetching Online Friends"
    // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quia alias repellat fugiat natus, sit hic quod quisquam odit, debitis, earum iste at delectus numquam itaque perferendis temporibus sint nostrum?",
  },
  {
    id: 2,
    title: "React Mysql Blog Site",
    img: "https://images.pexels.com/photos/14578656/pexels-photo-14578656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "It is a blog site that is built on technologies like ReactJS, Node-ExpressJs and uses MySQL as a database.It uses ContextAPI. Features include Login, Register, Posting blogs and edit/delete."
    // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quia alias repellat fugiat natus, sit hic quod quisquam odit, debitis, earum iste at delectus numquam itaque perferendis temporibus sint nostrum?",
  },
  {
    id: 3,
    title: "React News Portal",
    img: "/newsSite1.png",
    // img: "https://images.pexels.com/photos/18579303/pexels-photo-18579303/free-photo-of-white-clouds-on-blue-sky-above-power-lines-running-across-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "A news site that uses ReactJS and uses Redux Toolkit as state management tool. It is responsive and has an integrated external API to fetch news (Gnews API)." 
    // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quia alias repellat fugiat natus, sit hic quod quisquam odit, debitis, earum iste at delectus numquam itaque perferendis temporibus sint nostrum?",
  },
  {
    id: 4,
    title: "Recipes Html",
    img: "/recipes.png",
    // img: "https://images.pexels.com/photos/13770293/pexels-photo-13770293.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Can't get any basic than this. It is a static responsive site build using just html, css and little bit of javaSript and JQuery."
    // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quia alias repellat fugiat natus, sit hic quod quisquam odit, debitis, earum iste at delectus numquam itaque perferendis temporibus sint nostrum?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start end"],
  });
  console.log(scrollYProgress)
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  console.log(y)
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={`ProjectImg${item.id}`} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    daming: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
