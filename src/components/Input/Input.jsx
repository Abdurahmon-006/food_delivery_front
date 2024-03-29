import cls from "./styles.module.scss";

export const Input = ({name, register = () => {}, placeholder, type, ariaLabel, id, ...props}) => {

    return(
        <input
            className={cls.input} 
            type={type} 
            id={id}
            placeholder={placeholder}
            aria-label={ariaLabel}
            {...register(name)}
            {...props}
        />
    )
}