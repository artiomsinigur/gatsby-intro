import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderTag = styled.header`
  background: #eee;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 550px - 0.25rem) / 2);
`;

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.frontweight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &:last-of-type {
    margin-right: 0;
  }

  &.current {
    border-bottom: 2px solid #ddd;
  }
`;

export default function Header() {
  return (
    <HeaderTag>
      <NavLink to="/" frontweight="bold">
        Gatsby
      </NavLink>
      <nav>
        <NavLink to="/" activeClassName="current">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current">
          About
        </NavLink>
        <NavLink to="/contact/" activeClassName="current">
          Contact
        </NavLink>
      </nav>
    </HeaderTag>
  );
}
