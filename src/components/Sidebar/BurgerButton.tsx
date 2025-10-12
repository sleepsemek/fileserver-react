import './BurgerButton.scss';

interface BurgerButtonProps {
    onClick?: () => void,
    isActive?: boolean
}

export default function BurgerButton({onClick, isActive}: BurgerButtonProps) {
    return (
        <button className={`burger-button visible-mobile ${isActive ? 'is-active' : ''}`} onClick={onClick}>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
        </button>
    )
}