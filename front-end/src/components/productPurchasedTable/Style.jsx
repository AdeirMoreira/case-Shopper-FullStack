import styled from "styled-components";

export const ProducPurchasedTable = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductPurchaseTitleTableGrid = styled.div`
  display: grid;
  grid-template:
    "product product price quantity totalPrice" 4em
    / 4em 20em 10em 10em 10em;
`;
export const Product = styled.div`
  grid-area: product;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(249, 249, 249);
`;
export const Price = styled.div`
  grid-area: price;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgb(249, 249, 249);
`;
export const Quantity = styled.div`
  grid-area: quantity;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(249, 249, 249);
`;
export const TotalPrice = styled.div`
  grid-area: totalPrice;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(249, 249, 249);
`;
export const Photo = styled.div`
  grid-area: photo;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.2em solid rgb(211, 211, 211);
`;
export const ProductPurchasedTableRowGrid = styled.div`
  display: grid;
  grid-template:
    "photo productName productPrice productQuantity productTotalPrice" 6em
    / 4em 20em 10em 10em 10em;
`;
export const ProductName = styled.div`
  grid-area: productName;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.2em solid rgb(211, 211, 211);
`;
export const ProductPrice = styled.div`
  grid-area: productPrice;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.2em solid rgb(211, 211, 211);
`;
export const ProductQuantity = styled.div`
  grid-area: productQuantity;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.2em solid rgb(211, 211, 211);
`;
export const ProductTotalPrice = styled.div`
  grid-area: productTotalPrice;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.2em solid rgb(211, 211, 211);
`;
export const GrayText = styled.span`
  color: rgb(122, 122, 123);
  font-size: 1.2em;
  text-align: center;
  margin: 0;
`;
export const BlueText = styled.span`
  color: rgb(0, 45, 98);
  font-size: 1.2em;
  text-align: center;
  margin: 0;
`;
export const ShopperLogo = styled.img`
  width: 100%;
  height: 100%;
`;
