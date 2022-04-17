import { gql } from "@apollo/client";

const NAMES_QUERY = gql`
  {
    categories {
      name	
      products {
      id
      name
      brand
      inStock
      category
      description
      gallery
      prices {
        currency {
          symbol
          }
        amount
        }
      attributes {
      id
      name
      type
      items{
        displayValue
      	value
        id
          }
        }  
      }
    }

    currencies {
      label
      symbol
    }
  }
`;

export default NAMES_QUERY;