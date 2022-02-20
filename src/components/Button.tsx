import styled from 'styled-components'

interface PropType {
    text : string;
    functionCallback : Function;
}

const ButtonLogin = styled.button`
    padding: 10px 30px;
    font-weight: bold;
    background: rgb(238, 110, 6);
    border: 1px solid rgb(216, 101, 6);
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        transform: scale(0.99);
    }
`

const Button = (props : PropType) => {
    return (
        <ButtonLogin onClick={ () => props.functionCallback() }>
            { props.text }
        </ButtonLogin>
    )
}

export default Button