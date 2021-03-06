import { FC } from 'react'
import style from './PlayerName.module.scss'

interface PlayerNameProps {
    name: string,
    tag: string,
    level: number,
    role: string
}


const PlayerName: FC<PlayerNameProps> = ({ name, tag, level, role }) => {

    return (
        <>
            <div className={style.name}>
                <div className={style.nick}>
                    <div className={style.level}>
                        <div className={style.level_star}></div>
                        <span className={style.level_amount}>{level}</span>
                    </div>
                    <div className={style.wrapper}>
                        <h3 title={name}>
                            {name}
                            {role && <span><span className={style.symbol}>/</span>{role}</span>}
                        </h3>
                        <a 
                            href={`https://link.clashroyale.com/ru?playerInfo?id=${tag}`} 
                            className={style.tag}
                            target='_blank'
                        >
                            {tag}
                        </a>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default PlayerName