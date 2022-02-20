import { getDatabase, ref, push, onValue, set } from 'firebase/database'

import { SetStateAction, Dispatch } from 'react'
import firebaseApp from '../firebase'

export interface VoteDatabaseType {
    dbKey ?: string;
    title : string;
    userName : string;
    description : string;

    likeUp  : Number;
    likeDown: Number;
}


export function createNewVote(vote : VoteDatabaseType) {
    const database = getDatabase(firebaseApp)

    return push(ref(database, 'votes'), {
        ...vote
    })
}

export function createNewVoteListaner(setVoteListState : Dispatch<SetStateAction<Array<VoteDatabaseType>>>) {
    const database = getDatabase(firebaseApp)
    const referenceToDatabase = ref(database, 'votes')

    return onValue(referenceToDatabase, (snapshot) => {
        const voteList = snapshot.val()

        setVoteListState(Object.keys(voteList).map(value => {
            return { ...voteList[value], dbKey : value }
        }))
    })
}

export function updateLikeVote(dbKey : string, like : 'likeUp' | 'likeDown', likeValue : Number) {
    const database = getDatabase()
    set(ref(database, `votes/${dbKey}/${like}`), likeValue)
}
