import { useParams } from "react-router-dom";
import type { viewRouteParams } from "../../lib/route";
import { trpc } from "../../lib/trpc";
import css from "./index.module.scss";

export const ViewIdeaPage = () => {
  const { ideasNick } = useParams() as viewRouteParams;

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({ ideaNick: ideasNick });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data || !data.idea) {
    return <span>Idea not found</span>;
  }

  return (
    <div>
      <h1 className={css.title}>{data.idea.name}</h1>
      <p className={css.description}>{data.idea.description}</p>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </div>
  );
};
