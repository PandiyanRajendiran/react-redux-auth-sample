import * as React from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/components/AppBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { IPLSchedule } from '../../../data';

export function IPLTablePage() {
  return (
    <>
      <Helmet>
        <title>IPL Table</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <table>
          <tbody>
            <tr>
              <TableDataHead>
                <strong>Match No</strong>
              </TableDataHead>
              <TableDataHead>
                <strong>Match</strong>
              </TableDataHead>
              <TableDataHead>
                <strong>Date</strong>
              </TableDataHead>
              <TableDataHead>
                <strong>Time</strong>
              </TableDataHead>
            </tr>
            {IPLSchedule.map(match => {
              return (
                <tr key={match.matchNo}>
                  <TableData>{match.matchNo}</TableData>
                  <TableData>{match.team}</TableData>
                  <TableData>{match.date}</TableData>
                  <TableData>{match.time}</TableData>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
}

const TableData = styled.td`
  border: 1px solid black;
  text-align: center;
`;
const TableDataHead = styled.td`
  text-align: center;
  border: 1px solid black;
  min-width: 150px;
`;

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
  margin-top: 5rem;
`;
