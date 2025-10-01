import style from "./Sidebar.module.scss"

export default function Sidebar() {
    return (
        <div className={style.root}>
            <div className={style.header}>
                <h1 className={style.logo}>
                    Fileserver
                </h1>
                <div className={style.controls}>

                </div>
            </div>

        </div>
    )
    }