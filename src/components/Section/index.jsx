import { ContainerSection } from "./styled";

export function Section({ title, children }) {
  return (
    <ContainerSection>
      <h3>{title}</h3>
      {children}
    </ContainerSection>
  );
}
