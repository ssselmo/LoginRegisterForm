import { randomInt } from "crypto";
import React, { useState, useEffect, useRef } from "react";
// import {Task1} from "./components/Task1";
// import {Task2} from "./components/Task2";
// import {Task3} from "./components/Task3";
// import {Task4} from "./components/Task4";
// import {Task5} from "./components/Task5";
 export const Login: React.FC = () => {
  const [email,setEmail] =useState("");
  const [name,setName] =useState("");
  const [password,setPassword] =useState("");
  const [gender,setGender] =useState("");
  const [country,setCountry] =useState("");

function spasi()
{
  console.log(`Email : ${email}, Name : ${name}, Gender : ${gender}, Country : ${country}`);
}
return(
  
//     <div>
//       {/* <p>Ref brojac : {refBrojac.current}</p>
//       <button onClick={uvecajRef}>+</button>
//       <p>State brojac : {stateBrojac}</p>
//       <button onClick={uvecajState}>+</button> */}
//       {/* <Task1/>
//       <Task2/>
//       <Task3/>
//       <Task4/>
//       <Task5/> */}
//       {/* <div>
//         <button onClick={naZadnju}>Zadnja</button>
//         <button onClick={naPrvuu}>Prva</button>
//       </div>
//       <div className="okvir">
//         <img src="https://http.cat/204" ref={prva}></img>
//         <img src="https://http.cat/401" ></img>
//         <img src="https://http.cat/404" ></img>
//         <img src="https://http.cat/409" ></img>
//         <img src="https://http.cat/413" ref={zadnja}></img>
      //</div> */}
      <div>
      <label>Name:
      <input type="text" value={name} onChange={(e)=>setName((e.target.value))}></input>
      </label>
      <p></p>
      <label>Password:
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword((e.target.value))}></input>
      </label>
      <p></p>
      <label>Email:
      <input type="email" value={email} onChange={(e)=>setEmail((e.target.value))}></input>
      </label>
      <p></p>
      <label>Gender:
      <input type="radio" value="other" checked={gender==="other"} onChange={(e)=>setGender((e.target.value))}></input>Other
      <input type="radio" value="male" checked={gender==="male"} onChange={(e)=>setGender((e.target.value))}></input>Male
      <input type="radio" value="female" checked={gender==="female"} onChange={(e)=>setGender((e.target.value))}></input>Female
      </label>
      <p></p>
      <label>Country:
      <select value={country} onChange={(e)=>setCountry((e.target.value))} required >
      <option value="">Select your country</option>
      <option value="us">United States</option>
      <option value="uk">UK</option>
      <option value="bih">BIH</option>

      </select>
      </label>

      <p></p>
    
      <button onClick={spasi}>Spasi</button>

    </div>
  );
};