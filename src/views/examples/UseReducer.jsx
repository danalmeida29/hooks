import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer } from '../../store'
import {numberAdd2, login} from'../../store/actions'

const UseReducer = (props) => {
    const [state, dispathc] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exemplo #01"/>
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span>
                    : <span className="text">User Not Find</span>
                }
                
                <span className="text"> {state.number} </span>

                <div>
                    <button className="btn" onClick={() => login(dispathc, 'João')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispathc)}>+2</button>
                </div>
            </div>
            <SectionTitle title="Desafio: #useReducer"/>
            <div className="center">

                <div>
                    <button className="btn" onClick={() => dispathc({type:'numberMulti7'})}>*7</button>
                    <button className="btn" onClick={() => dispathc({type:'numberDiv25'})}>/25</button>
                    <button className="btn" onClick={() => dispathc({type:'numberInt'})}>Int</button>
                    <button className="btn" onClick={() => dispathc({type:'numberAddN', payload: -9})}>N</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
