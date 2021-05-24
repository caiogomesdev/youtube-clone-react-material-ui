import styled from 'styled-components'

export const Header = styled.header`
height: 35px;
width: 100%;
position: fixed;
left: 0px;
top: 0px;
right: 0px;
display: flex;
align-items: center;
margin: 0px;
background-color: #fff;
border-bottom: solid 0.8px rgba(0,0,0,0.1);

.MenuIcon{
    margin: 0px 15px;
    color: #606060;
    font-size: 16px;
    cursor: pointer;
}
`

export const Logo = styled.div`
width: 65px;

img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin-top: 5px;

}

`

export const SeachDiv = styled.div`
margin-left: 40px;
width: 30vw;
display: flex;



`

export const SearchInput = styled.input`
border: solid 1px rgba(0,0,0,0.1);
height: 22px;
width: 85%;

padding: 5px;
padding-top: 7px;
border-radius: 1px;
font-size: 12px;
align-items: center;

:focus {
    outline: none;
    border: solid 1.2px rgba(25, 98, 185, 0.5);

}

`
export const Btn = styled.button`
cursor: pointer;
width: 15%;
background-color: #f8f8f8;
border: solid 1px rgba(0,0,0,0.1);
border-radius: 1px;
display: flex;
justify-content: center;
align-items: center;

:hover{
    background-color: #f0f0f0;

}

.SearchIcon{
    color: #606060;
    font-size: 14px;
}
`