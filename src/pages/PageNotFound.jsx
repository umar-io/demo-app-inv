import PageNotFoundImage from '../assets/404.svg'

export default function PageNotFound(){
    return(
        <div className="pagenotfound">
           <img src={PageNotFoundImage} alt="404"/>
        </div>
    )
}