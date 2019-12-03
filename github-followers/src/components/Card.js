import React from 'react';
import styled from 'styled-components';

let Thecard = styled.div`
    height: auto;
    max-width: 400px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
    background-color: pink;
    border: 1px solid red;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

let Fit = styled.img`
    height: auto;
    max-width: 100px;
`


function Card({ user }) {
    const {login, avatar_url} = user;
    return (
      <Thecard>
        <h2>{login}</h2>
        <Fit src={avatar_url} alt="The user's face" />
      </Thecard>
    )
  }

export default Card