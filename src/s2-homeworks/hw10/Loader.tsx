import s from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loader}>
            <div className={s.fake_loader}></div>
        </div>    
    )
}
