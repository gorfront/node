import { Link, Outlet } from "react-router-dom";
import * as route from "../../lib/route";
import css from "./index.module.scss";

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>IdeaNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={route.getAllIteasRoute()}>
              All Ideas
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={route.getNewIdeaRoute()}>
              Add Idea
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={route.getSignUpRoute()}>
              Sign Up
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={route.getSignInRoute()}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
