import "./ResumeItem.css"

export default function ResumeItem({title, Icon, value}){
    return(
        <div className="ContainerItem">
            <div className="HeaderItem">
                <p>{title}</p>
                <Icon/>
            </div>
            <p className="Total">{value}</p>
        </div>
    )
}