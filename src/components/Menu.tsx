import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul
      className={
        "bg-orange-500 text-white font-semibold p-4 flex justify-around"
      }
    >
      <li>
        <Link to={"auth"}>Аутентифікація</Link>
      </li>
      {/*<li>*/}
      {/*  <Link to={""}>aaa</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to={""}>aaa</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to={""}>aaa</Link>*/}
      {/*</li>*/}
    </ul>
  );
};

export default Menu;
