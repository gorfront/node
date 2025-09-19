import { useParams } from "react-router-dom";

export const ViewIdeaPage = () => {
  const { ideasNick } = useParams() as { ideasNick: string };

  return (
    <div>
      <h1>{ideasNick}</h1>
      <p>Description of idea 1...</p>
      <div>
        <p>Text paragraph 1 of idea 1...</p>
        <p>Text paragraph 2 of idea 1...</p>
        <p>Text paragraph 3 of idea 1...</p>
      </div>
    </div>
  );
};
