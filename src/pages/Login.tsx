import styled from 'styled-components'
import ButtonComponent from '../components/Button'

const LoginPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitlePage = styled.h1`
    margin-bottom: 20px;
`

const LegendTitle = styled.p`
    margin-bottom: 40px;
    color: rgb(51, 51, 51);
`

interface PropType {
    LoginFunctionCallback : Function
}


const LoginPage = (props : PropType) => {
    return (
        <LoginPageContainer>
            <TitlePage>UpVote</TitlePage>
            <LegendTitle>Fazer login com uma conta do google!</LegendTitle>

            <ButtonComponent 
                functionCallback={props.LoginFunctionCallback} 
                text='Fazer Login com o Google' />
        </LoginPageContainer>
    )
}

export default LoginPage
