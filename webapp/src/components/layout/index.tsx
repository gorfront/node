import { Link, Outlet } from "react-router-dom";
import * as route from "../../lib/route";
import css from "./index.module.scss";
import { useMe } from "../../lib/ctx";
import { createRef } from "react";
import Logo from "../../assets/images/logo.svg?react";

export const layoutContentElRef = createRef<HTMLDivElement>();

export const Layout = () => {
  const me = useMe();
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <Logo className={css.logo} />
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={route.getAllIdeasRoute()}>
              All Ideas
            </Link>
          </li>
          {me ? (
            <>
              <li className={css.item}>
                <Link className={css.link} to={route.getNewIdeaRoute()}>
                  Add Idea
                </Link>
              </li>
              <li className={css.item}>
                <Link className={css.link} to={route.getEditProfileRoute()}>
                  Edit profile
                </Link>
              </li>
              <li className={css.item}>
                <Link className={css.link} to={route.getSignOutRoute()}>
                  Log Out ({me.nick})
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
      <div className={css.content} ref={layoutContentElRef}>
        <Outlet />
      </div>
    </div>
  );
};
