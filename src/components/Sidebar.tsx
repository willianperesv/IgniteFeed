import {PencilLine} from 'phosphor-react'
import style from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img 
            className={style.cover}
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D"
            />

            <div className={style.profile}>
                 <Avatar src="https://github.com/willianperesv.png"/>
                <strong>Willian Peres</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size='20'/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}