import Icon, {type IconComponentType} from "../ui/Icon/Icon.tsx";
import type {PropsWithChildren} from "react";
import "./Section.scss"

type SectionProps = PropsWithChildren<{
    title: string
    icon: IconComponentType
}>

export default function Section({ title, icon, children }: SectionProps) {
    return (
        <section className="section" aria-labelledby={title}>
            <div className="section__header">
                <Icon icon={icon} />
                <h2 className="section__title" id={title}>{title}</h2>
            </div>
            <div className="section__content">
                {children}
            </div>
        </section>
    )
}