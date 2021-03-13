import React from "react"

export function JobDesc(props) {
  return (
    <div style={{ ...props.style }}>
      { /* General job information */ }
      <div style={{ display: "flex" }}>
        <p>{props.companyName} - {props.jobPosition}</p>
        <div style={{ display: "flex", marginLeft: "auto" }}>
          <p>{props.startDate} - {props.endDate}</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {props.languages.map(lang => {
          return <p style={{ marginRight: "5px" }}>{lang}</p>
        })}
      </div>

      { /* Job description */ }
      <div style={{ border: "1px solid black", padding: "10px 30px 10px" }}>
        <ul style={{ listStyleType: "disc" }}>
          {props.tasks.map(value => {
            return (
              <li>{value}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}