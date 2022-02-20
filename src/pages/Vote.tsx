import { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'


import ButtonComponent from '../components/Button'
import CreateForm from '../components/CreateForm'
import VoteCard from '../components/VoteCard'
import { createNewVoteListaner, VoteDatabaseType } from '../services/database'

import { AppContext } from '../context'


const VotePageContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const VoteArea = styled.div`
    max-width: 1100px;
    width: 100%;
    padding: 20px 10px;
`

const HeaderPage = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImgUser = styled.img`
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
`

const DivInline = styled.div`
    display: flex;
    align-items: center;
`

const VoteContainer = styled.div`
    max-height: 400px;
    overflow-y: scroll;
    padding: 20px;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const VotePage = () => {
    const userLogin = useContext(AppContext)
    const [showCreateVote, setShowCreateVote] = useState(false)
    const [voteList, setVoteList] = useState<Array<VoteDatabaseType>>([])

    useEffect(() => {
        createNewVoteListaner(setVoteList)
        return () => {
            setVoteList([])
        }
    }, [])

    function showVotesCards() {
        return (
            <>
                { voteList.map((item, i) => (<VoteCard value={item} key={i} />)) }
            </>
        )
    }

    function showCreateVoteForm() {
        return (
            <CreateForm></CreateForm>
        )
    }

    function showOrHiddenCreateForm() {
        setShowCreateVote(!showCreateVote)
    }

    return (
        <VotePageContainer>
            <VoteArea>
                <HeaderPage>
                    <DivInline>
                        <ImgUser src={userLogin.photoURL} />
                        <h3>{ userLogin.userName }</h3>
                    </DivInline>

                    <ButtonComponent 
                        functionCallback={ showOrHiddenCreateForm } 
                        text={ showCreateVote ? 'Cancelar' : 'Criar nova votação?' } 
                    />

                </HeaderPage>

                <VoteContainer>
                    { showCreateVote ? showCreateVoteForm() : showVotesCards() }
                </VoteContainer>
            </VoteArea>
        </VotePageContainer>
    )
}

export default VotePage
