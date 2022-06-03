import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export const AdminPage = () => {
  const { context } = useContext(StateContext);

  return <section>
    Hello I am page named AdminPage <br />
    The current profile count read from <b>context is {context.profileViewCounter}</b>
  </section>;
};
