import { Link, Outlet } from "react-router-dom";
import { getAllIteasRoute } from "../../lib/route";

export const Layout = () => {
  return (
    <div>
      <p>
        <b>Idea Nick</b>
      </p>
      <ul>
        <li>
          <Link to={getAllIteasRoute()}>All Ideas</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
