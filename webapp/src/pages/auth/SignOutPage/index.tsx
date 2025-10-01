import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { trpc } from "../../../lib/trpc";
import { getSignInRoute } from "../../../lib/route";

export const SignOutPage = () => {
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();
  useEffect(() => {
    Cookies.remove("token");
    void trpcUtils.invalidate().then(() => {
      navigate(getSignInRoute());
    });
  }, []);

  return <p>Loading...</p>;
};
