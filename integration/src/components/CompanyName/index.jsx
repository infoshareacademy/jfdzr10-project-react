import style from "./CompanyName.module.css"

function CompanyName({name}) {
  

  return (
    <span className={style['company-name']}>{name}</span>
  )
}

export default CompanyName
