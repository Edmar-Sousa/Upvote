import styled from 'styled-components'
import { useContext, useState } from 'react'

import ButtonComponent from '../components/Button'
import { createNewVote, VoteDatabaseType } from '../services/database'
import { AppContext } from '../context'

const CreateFormContainer = styled.div`
    width: 100%;
    height: 100%;
`

const InputForm = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    outline: none;
`

const FormDescription = styled.textarea`
    width: 100%;
    height: 200px;
    outline: none;
    margin-top: 10px;
    resize: none;
    padding: 5px;
`

const FooterForm = styled.div`
    width: 100%;

    display: flex;
    justify-content: right;
`

const CreateForm = () => {
    const contextAplication = useContext(AppContext)
    const [voteToCreate, setVoteToCreate] = useState<VoteDatabaseType>({
        title : '',
        userName : contextAplication.userName,
        description : '',
        likeDown : 0,
        likeUp : 0
    })

    function createVoteInDatabase() {
        if (voteToCreate.title === '' || voteToCreate.description === '') {
            alert('preencha todos os campos!')
            return
        }

        createNewVote(voteToCreate)
            .then(() => { 
                setVoteToCreate({
                        title : '',
                        userName : contextAplication.userName,
                        description : '',
                        likeDown : 0,
                        likeUp : 0
                    })
                
                alert('Votação criada!')
            })
            .catch(() => {
                // console.log('não ok')
            })
    }


    function setValueFromKeyInVoteState(keyUpdate : string, value : string) {
        const fieldUpdate = {}
        fieldUpdate[keyUpdate] = value
        
        const updateVote = {
            ...voteToCreate,
            ...fieldUpdate
        }

        setVoteToCreate(updateVote)
    }

    return (
        <CreateFormContainer>
            <InputForm type="text" placeholder="Titulo" 
                onChange={ (element) => setValueFromKeyInVoteState('title', element.target.value) }
                value={ voteToCreate.title }
            />

            <FormDescription 
                onChange={ (element) => setValueFromKeyInVoteState('description', element.target.value) }
                value={ voteToCreate.description }
            >
            </FormDescription>

            <FooterForm>
                <ButtonComponent 
                    functionCallback={ createVoteInDatabase } 
                    text="criar votação" />
                
            </FooterForm>
        </CreateFormContainer>
    )
}

export default CreateForm