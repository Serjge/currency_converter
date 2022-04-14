import styled from 'styled-components';

export const WrapperItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

type ItemPropsType = {
  width?: string;
};

export const Item = styled.div<ItemPropsType>`
  height: 25px;
  width: ${({ width }) => width};
`;
