import { useContext, useEffect } from "react";
import { StateContext } from "../context/StateContext";

export const MyProfile = () => {
  const { context, setContext } = useContext(StateContext);

  useEffect(() => {
    setContext({
      ...context,
      profileViewCounter: context.profileViewCounter + 1
    });
  }, []);

  return <section>
    <b style={{ float: 'right' }}>This page view count is {context.profileViewCounter}</b>
    <h1>Hi 👋, I'm Vishakha Nagapl</h1>
    <h3>A passionate developer and coder from India.</h3>

    <p> <img src="https://komarev.com/ghpvc/?username=vishanagpal&label=Profile%20views&color=0e75b6&style=flat" alt="vishanagpal" /> </p>

      - 🔭 I’m currently working on React, Typescript & python <br />
      - 🌱 I’m currently learning web vitals & Python<br />
      - 💬 Ask me about Front end development<br />
      - ? A beginner trying my hands on golang now<br />
      - 📫 How to reach me : <a href="https://www.linkedin.com/in/vishakha-nagpal-182436130/">Linkedin</a><br />
      - 📄 **<a href="https://github.com/vishaNagpal/vishaNagpal/blob/main/Vishakha's%20Resume.pdf">Resume</a>**<br />

    <p>
      <img src="https://github-readme-stats.vercel.app/api/top-langs?username=vishanagpal&show_icons=true&locale=en&layout=compact" alt="vishanagpal" /></p>

  </section>;
};
