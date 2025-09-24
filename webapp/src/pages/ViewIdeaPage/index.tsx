import { useParams } from "react-router-dom";
import type { viewRouteParams } from "../../lib/route";
import { trpc } from "../../lib/trpc";
import { Segment } from "../../components/Segment";
import { format } from "date-fns";
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
    <Segment title={data.idea.name} description={data.idea.description}>
      <div className={css.createdAt}>Created At: {format(data.idea.createdAt, "yyyy-MM-dd")}</div>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  );
};
