import './App.css'
import React, {FormEvent, KeyboardEventHandler, useEffect, useRef, useState} from 'react'
import List from "./List";

const App = () => {
    const textInput = useRef(null);
    const [newWho, setNewWho] = useState<string>("")
    const [newWhat, setNewWhat] = useState<string>("")
    const [characters, setCharacters] = useState<Array<any>>([])

    //TOOO:
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/1')
    //         .then(res => res.json())
    //         .then(json => setCharacters(json))
    // }, []);


    const handleWho = (e: FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        setNewWho(e.target.value)
    }

    const handleWhat = (e: FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        setNewWhat(e.target.value)
    }

    const handleCool = (dude: Object) => (e: FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        const cool = Number(e.target.value)

        setCharacters(
            characters.map(item =>
                item === dude ? {...dude, cool} : item
            ))
    }

    const removeDude = (dude: Object) => {
        setCharacters(
            characters.filter(item => item !== dude)
        )
    }

    const handleSubmit = (e: KeyboardEventHandler<HTMLFormElement>) => {
        // @ts-ignore
        if (e.key === 'Enter' && newWho && newWhat) {
            setCharacters(characters => {
                const newItem = {
                    id: characters.length + 1,
                    who: newWho,
                    what: newWhat,
                    cool: 0
                }
                return [...characters, newItem]
            });
            resetForm()
        }
    }

    const resetForm = () => {
        setNewWho("")
        setNewWhat("")
        // @ts-ignore
        textInput.current.focus()
    }

    return (
        <>
            <List characters={characters} handleCool={handleCool} handleRemove={removeDude}/>
            {/*@ts-ignore*/}
            <form className="add-new" onKeyDown={handleSubmit}>
                <input
                    autoFocus
                    type="text"
                    ref={textInput}
                    value={newWho}
                    onChange={handleWho}
                />

                <input
                    type="text"
                    value={newWhat}
                    onChange={handleWhat}
                />
            </form>
        </>
    )
}


export default App
