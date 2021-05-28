import React, {useEffect} from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserEmail, selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';
import { selectPok } from '../features/pok/pokSlice';


const Header = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const userEmail = useSelector(selectUserEmail);
    const poke = useSelector(selectPok);

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,  
            photo: user.photoURL,
        }))
    }

    const handleAuth = () => {
        if (!username) {
            auth.signInWithPopup(provider).then((response) => {
                setUser(response.user)
            }).catch((error) => {
                alert(error.message)
            })
        } else if (username) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push('/')
            }).catch((error) => alert(error.message))
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history.push('/home');
            }
        })
    },[username])

    return (
        <Nav>
            <Logo>
                <img src="/images/pokemonLogo.jpeg" alt="Pokemon Logo"/>
            </Logo>
            <LogoHider />
            {!username ? <Login onClick={handleAuth}>LOGIN</Login> : 
              <>
                <NavMenu>
                    <a  className="active" href="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path></svg>
                        <span>Pokemon Store</span>
                    </a>
                    <a href={poke ==! null ? `/details/${poke.data.id}` : `/details/1`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M5 18v2H3v-2H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5zM3 2H2v14h1V2zm2 0v14h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zm1 2h5v2H6V4zm0 3h5v2H6V7z"></path></svg>
                        <span>Pokemon Details</span>
                    </a>
                </NavMenu>
                <SignOut>
                    <UserImage src={userPhoto} alt={username}/>
                    <DropDown>
                        <span onClick={handleAuth}>LOG OUT</span>
                    </DropDown>
                </SignOut>
              </>
            }
        </Nav>
    )
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #231d1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  /* overflow: hidden; */
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 2px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
      display: block;
      width: 80%;
      height: 80%;
      object-fit: scale-down;
      /* margin-top: 3px; */
  }
`;


const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: auto;

  a {

      display: flex;
      align-items: center;
      padding: 0 12px;

      svg {
          height: 20px;
          min-width: 20px;
          width: 20px;
          z-index: auto;
          fill: #fff;
          margin-right: 2px;
      }
      span{
          display: flex;
          color: rgb(249, 249, 249);
          font-size: 13px;
          letter-spacing: 1.42px;
          line-height: 1.08;
          padding: 2px 0;
          white-space: nowrap;
          position: relative;

          &:before {
              content: "";
              background-color: rgb(249, 249, 249);
              border-radius: 0px 0px 4px 4px;
              bottom: -6px;
              height: 2px;
              left: 0px;
              opacity: 0;
              position: absolute;
              right: 0px;
              transform-origin: left center;
              transform: scaleX(0);
              transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 0.94) 0s;
              visibility: hidden;
              width: auto;
          }
      }

      &:hover {
          span:before {
              transform: scaleX(1);
              visibility: visible;
              opacity: 1;
          }
          svg {
              transform: scaleX(1.1) scaleY(1.1);
          }
      }

      @media only screen and (max-width: 768px) {
          span {
              display: none;
           }
              svg {
                height: 30px;
                min-width: 30px;
                width: 30px;
                z-index: auto;
                fill: #bc202d;
                margin-right: 5px;
                margin-left: 5px;
                &:hover {
                    fill: #fff;
                    transform: scaleX(1.1) scaleY(1.1);
                }
              }
          }

  }

`;

const Login = styled.a`
 background-color: rgba(0, 0, 0, 0.6);
 padding: 8px 16px;
 text-transform: uppercase;
 letter-spacing: 1.5px;
 border: 1px solid #bc202d;
 border-radius: 4px;
 transition: all .2s ease 0s;
 cursor: pointer;
 color: #bc202d;

 &:hover {
     background-color: #bc202d;
     color: #231d1f;
     border-color: transparent;
 }
`;

const UserImage = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  color: #bc202d;
  background: #231d1f;
  border: 1px solid #bc202d;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 110px;
  opacity: 0;

  &:hover {
    background: #bc202d;
    color: #231d1f;
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImage} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const LogoHider = styled.div`
width: 100px;
height: 5px;
background: #231d1f;
position: absolute;
top: 65px;
left: 20px;
`;

export default Header
