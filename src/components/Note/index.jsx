import { Tags } from "../Tags";
import { ContainerNotes } from "./styled";

export function Note({ data, onClick, ...rest }) {
  return (
    <ContainerNotes onClick={onClick}>
      <h2> {data.title} </h2>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tags key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </ContainerNotes>
  );
}
