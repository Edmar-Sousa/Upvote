import styled from 'styled-components'
import { VoteDatabaseType, updateLikeVote } from '../services/database'

const VoteCardContainer = styled.div`
    padding: 20px 10px;
    border-radius: 3px;
    border: 1px solid rgb(51, 51, 51);
`

const TitleCard = styled.h3`
    margin-bottom: 10px;
`

const DescriptionCard = styled.p`
    margin-bottom: 20px;
`

const FooterCard = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: right;
    align-items: center;
`

const HeaderCard = styled.div`
    padding: 10px 0;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ButtonLike = styled.button`
    font-size: 15pt;
    background: none;
    border: none;

    margin: 0 10px;

    &:hover {
        transform: scale(0.90);
    }
`

const UserName = styled.h5`
    color: rgb(75, 75, 75);
`

interface PropsType {
    value : VoteDatabaseType
}

const VoteCard = (props : PropsType) => {

    function likeUpFunction() {
        const dbKey = props.value.dbKey
        const likeValue = Number(props.value.likeUp) + 1

        if (typeof dbKey !== 'undefined')
            updateLikeVote(dbKey, 'likeUp', likeValue)
    }

    function likeDownFunction() {
        const dbKey = props.value.dbKey
        const likeValue = Number(props.value.likeDown) + 1

        if (typeof dbKey !== 'undefined')
            updateLikeVote(dbKey, 'likeDown', likeValue)
    }

    return (
        <VoteCardContainer>
            <HeaderCard>
                <TitleCard>{ props.value.title }</TitleCard>
                <UserName>{props.value.userName}</UserName>
            </HeaderCard>

            <DescriptionCard>
                { props.value.description }
            </DescriptionCard>

            <FooterCard>
                <ButtonLike onClick={ likeUpFunction }>
                    <i className="far fa-thumbs-up"></i> { props.value.likeUp }
                </ButtonLike>

                <ButtonLike onClick={ likeDownFunction }>
                    <i className="far fa-thumbs-down"></i> { props.value.likeDown }
                </ButtonLike>
            </FooterCard>            
        </VoteCardContainer>
    )
}

export default VoteCard