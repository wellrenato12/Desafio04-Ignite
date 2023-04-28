import { Handbag } from "phosphor-react";
import { CartButtonContainer } from "./styles";
import { ComponentProps } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  quantity?: number;
}

export function CartButton({ quantity = 0, ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      {quantity > 0 && <span>{quantity}</span>}
      <Handbag weight="bold" />
    </CartButtonContainer>
  )
}