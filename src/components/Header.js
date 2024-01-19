import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
import styled from "styled-components"
import { selectUserName, selectUserPhoto, setSignoutState, setUserLoginDetails } from "../features/user/userSclice"
import { auth, provider } from "../firebase"

export default function Header(props){
    // onSnapshot(colRef, (snapshot) => console.log(snapshot.docs));
    // getDocs(colRef).then((data) => console.log(data.docs))

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    
    useEffect(() =>{
        onAuthStateChanged(auth, async (user) => {
            // console.log(user);
            if(user){
                setUser(user);
                history.push('/home');
            }
        })
    }, [userName]);

    const handleAuth = () => {
        if(!userName){
            signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            })
        .catch(err => alert(err.message))
        }else if (userName){
            signOut(auth)
            .then(() =>{
                dispatch(setSignoutState())
                history.push('/');
            })
            .catch((err) => alert(err.message))
        }
    }
    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
        
    }
    return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            {
                !userName ? 
                    <LoginBtn onClick={() => handleAuth()}>Login</LoginBtn>
                :
                <>
                    <NavMenu>
                        
                    <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                    </a>
                    <a>
                    <img src="/images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                    </a>
                    <a>
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                    </a>
                    <a>
                    <img src="/images/original-icon.svg" alt="ORIGINALS" />
                    <span>ORIGINALS</span>
                    </a>
                    <a>
                    <img src="/images/movie-icon.svg" alt="MOVIES" />
                    <span>MOVIES</span>
                    </a>
                    <a>
                    <img src="/images/series-icon.svg" alt="SERIES" />
                    <span>SERIES</span>
                    </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName}/>
                        <Dropdown>
                            <span onClick={handleAuth}>Log Out</span>
                        </Dropdown>
                    </SignOut>
                </>
            }
        </Nav>
    )
}
const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #040714;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    z-index: 999;
`
const Logo = styled.a`
    width: 80px;
    padding: 0;
    max-height: 70px;
    marging-top: 4px;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

   @media (max-width: 768px) {
    display: none;
  } 
}
`;

const LoginBtn = styled.a`
    padding: 4px 12px;
    font-size: 23px;
    border: 1px solid #f2f2f2;
    padding: 8px 28px;
    text-transform: uppercase;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.3s ease;
    &:hover{
        background: #f2f2f2;
        color: #000;
        border-color: transparent;
    }
`


const UserImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
`
const Dropdown = styled.div`
    position: absolute;
    top: 60px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px 16px;
    display: none;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
`
const SignOut = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover ${Dropdown} {
        display: block;
    }
`