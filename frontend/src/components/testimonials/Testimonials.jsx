import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Sekhar2004",
      title: "Projects",
      link:"https://github.com/Sekhar2004/",
      img:
        "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
      icon: "assets/github.png",
      desc:
        "The centralized repository housing all of my project developments and codebases.",
    },
    {
      id: 2,
      name: "Sekhar73",
      title: "Problem solving",
      link:"https://leetcode.com/u/Sekhar73/",
      img:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1696723200&semt=ais",
        icon: "assets/leetcode.svg",
      desc:
        "Solving leetcode problems consistently.",
    },

    
    {
      id: 3,
      name: "sekhar-Reddy-Jeeru",
      title: "500+ Connections",
      link:"https://www.linkedin.com/in/sekhar-reddy-jeeru/",
      img:
        "assets/sekhar.png",
      icon: "assets/linkedin.png",
      desc:
        "I am eager and available to take on new challenges and opportunities in my field of expertise.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
            <a href={d.link}>{d.name}</a>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}