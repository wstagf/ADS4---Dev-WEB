import { useState } from "react";
function inputCustomizado({label, placeholder, type}: {label: string, placeholder: string, type: string}) {
    const [customType, setCustomType] = useState(type);    
    
    return (
        <div className="input-group">
            <label >{label}</label>
            <div style={{display: "flex", flexDirection: "row"}}>
  <input type={customType} id="senha"  placeholder={placeholder} required />
            { (type === "password" && customType == "password") && <span onClick={() => setCustomType("text")} >o</span>}
             { (type === "password" && customType == "text") && <span onClick={() => setCustomType("password")}>%</span>}
            </div>
          
        </div>
    )
}

export default inputCustomizado;