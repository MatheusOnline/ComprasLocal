import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text } from '../Text';
import { Flex } from '../Flex';
type BreadcrumbItem = {
  category: string;
  name: string;
}

export const Breadcrumbs = ({ category, name }: BreadcrumbItem ) => {



  return (
    <Flex gap="8px" alignItems="center" >
      <Links to="/"><Text  fontSize="small">Home</Text></Links  > 
      <Text fontSize="small">&gt;</Text>
      <Links to={`/${category}`}><Text fontSize="small">{category}</Text></Links> 
      <Text fontSize="small">&gt;</Text>  
      <Text fontSize="small" color="brand">{name}</Text>
    </Flex>
  );
}



const Links = styled(Link)`
  text-decoration: none;
  `

