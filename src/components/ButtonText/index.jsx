import { ContainerButtonText } from "./styled";

export function ButtonText({ title,children, isActive = false, ...rest }) {
  return (
    <ContainerButtonText type="button" {...rest} isActive={isActive}>
      {title}
      {children}
    </ContainerButtonText>
  );
}
