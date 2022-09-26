import './List.css';
import React from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import DeleteIcon from "./icons/DeleteIcon";

const List = ({
                  characters,
                  handleRemove,
                  handleCool
              }: { characters: any, handleRemove: Function, handleCool: Function }) => {

    return (
        <TransitionGroup component="ul">
            {characters.map((item: any) => {
                return <CSSTransition key={item.id} timeout={200} classNames="list">
                    <li key={item.id} className="list">
                        <input
                            className="cool"
                            type="number"
                            value={item.cool}
                            onChange={handleCool(item)}
                        />

                        <article
                            className={
                                item.cool < 10 ? 'faded' : item.cool > 50 ? 'gold' : ''
                            }
                        >
                            {item.who}
                            <span>{item.what}</span>
                        </article>

                        <a className="delete" onClick={() => handleRemove(item)}>
                            <DeleteIcon key={item.id} fill="#fff"/>
                        </a>
                    </li>
                </CSSTransition>
            })}
        </TransitionGroup>
    )
}
export default List;