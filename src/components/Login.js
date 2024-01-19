import styled from "styled-components"

export default function Login () {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTAlogoOne src="/images/cta-logo-one.svg" alt="" />
                    <Signup>GET ALL THERE</Signup>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTAlogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImg />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    text-align: center;
`
const Content = styled.div`
    margin-bottom: 100vw;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 40px;
`
const BgImg = styled.div`
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
`
const CTA = styled.div`
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    transition-timing-function: ease-out;
    transition: opacity .2s;
    width: 100%;
`
const CTAlogoOne = styled.img`
    max-width: 600px;
    width: 100%;
    min-height: 1px;
    display: block;
    margin-bottom: 12px;
`
const Signup = styled.a`
    width: 100%;
    background: #0063e5;
    padding: 16px 0;
    border-radius: 4px;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 1.5px;
    border: 1px solid transparent;
    margin-bottom: 12px;
    transition: all .3s ease;
    &:hover{
        background: #0483ee;
    }
`
const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px; 
    line-height: 1.5;
    letter-spacing: 1.5px;
`
const CTAlogoTwo = styled.img`
    max-width: 600px;
    width: 100%;
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: 20px;
`