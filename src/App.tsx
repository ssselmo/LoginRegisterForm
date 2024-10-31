import { randomInt } from "crypto";
import React, { useState, useEffect, useRef, FC } from "react";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";

// import {Task1} from "./components/Task1";
// import {Task2} from "./components/Task2";
// import {Task3} from "./components/Task3";
// import {Task4} from "./components/Task4";
// import {Task5} from "./components/Task5";
export const App: FC = () => {
  return (
<><Login/>
<Registration/></>
);};
/*//   const [email,setEmail] =useState("");
//   const [name,setName] =useState("");
//   const [password,setPassword] =useState("");
//   const [gender,setGender] =useState("");
//   const [country,setCountry] =useState("");




  // const [stateBrojac, postaviBrojac] = useState(0);
  // const refBrojac = useRef(0);

  // function uvecajRef()
  // {
  //   refBrojac.current = refBrojac.current +1;
  //   console.log("Uvecali smo brojac");
  // }
  // function uvecajState()
  // {
  //   postaviBrojac((b) => b+1);
  // }

  // const prva = useRef<HTMLImageElement | null>(null);
  // const zadnja = useRef<HTMLImageElement | null>(null);

  // function naZadnju()
  // {
  //   if(zadnja.current)
  //   {
  //     zadnja.current.scrollIntoView({behavior:"smooth"});
  //   }
  // }
  // function naPrvuu()
  // {
  //   if(prva.current)
  //   {
  //     prva.current.scrollIntoView({behavior:"smooth"});
  //   }
  // }
// function spasi()
// {
//   console.log(`Email : ${email}, Name : ${name}, Gender : ${gender}, Country : ${country}`);
// }
return(<div></div>);};
  
//     <div>
//       {/* <p>Ref brojac : {refBrojac.current}</p>
//       <button onClick={uvecajRef}>+</button>
//       <p>State brojac : {stateBrojac}</p>
//       <button onClick={uvecajState}>+</button> */
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
//       </div> */}
//       <label>Name:
//       <input type="text" value={name} onChange={(e)=>setName((e.target.value))}></input>
//       </label>
//       <p></p>
//       <label>Password:
//       <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword((e.target.value))}></input>
//       </label>
//       <p></p>
//       <label>Email:
//       <input type="email" value={email} onChange={(e)=>setEmail((e.target.value))}></input>
//       </label>
//       <p></p>
//       <label>Gender:
//       <input type="radio" value="other" checked={gender==="other"} onChange={(e)=>setGender((e.target.value))}></input>Other
//       <input type="radio" value="male" checked={gender==="male"} onChange={(e)=>setGender((e.target.value))}></input>Male
//       <input type="radio" value="female" checked={gender==="female"} onChange={(e)=>setGender((e.target.value))}></input>Female
//       </label>
//       <p></p>
//       <label>Country:
//       <select value={country} onChange={(e)=>setCountry((e.target.value))} required >
//       <option value="">Select your country</option>
//       <option value="us">United States</option>
//       <option value="uk">UK</option>
//       <option value="bih">BIH</option>

//       </select>
//       </label>

//       <p></p>
    
//       <button onClick={spasi}>Spasi</button>

//     </div>
//   );
// };
  // const [prvi, postaviPrvi] = useState(0);
  // const [drugi, postaviDrugi] = useState(0);
  // const [count, setCount] = useState(0);
  // const [count, setCount] = useState(0);
  // const [button, setButton] = useState(false);

//   const countRef = useRef(0);
//   const handleClick = () =>
// {
//   countRef.current+=1;
//   alert(`Kliknuli ste ${countRef.current} puta`);
// }
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [value,setValue] = useState("");
// const handleClick = () => {
//   if (inputRef.current)
//     setValue(inputRef.current.value);

// }

//useEffect(() => {
    // console.log(`Broj klikova : ${count}`);
    // if(count>5)
    // {
    //   setButton(true);
    // }
    // inputRef.current?.focus();},[]);
  

  // useEffect(() => {
  //   console.log(`Trenutni broj: ${count}`);
  // }, [count]);,
  // return () => {
    
  //   console.log("Čišćenje efekata"); };
  // },);
  // return(
  //     <div>
        
  //     {/* <label htmlFor="input">Unesite tekst</label>
  //     <input ref={inputRef} id="input" type="text"/>
  //     <button onClick={handleClick}>Prikazi</button>
  //     <p>{inputRef.current?.value}</p> */}
  //     <button onClick={handleClick}>Kliknite me</button>
  //     <p>{countRef.current}</p>
      
  //     </div>
  //   );

    /* <h1> Kliknuli smo {count} puta</h1>
        <h2> {count<=2? "Kliknuli ste manje od 2" : "Kliknuli ste vise od 2 puta"} </h2>
        <button className="btn" onClick={() => setCount(count + 1)} disabled={button}>Povećaj</button>
   */
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Povećaj</button>
  //     <button onClick={() => setCount(0)} >Resetiraj</button>
  //   </div>
  // );



  // const [ime, setIme] = useState("Ime");
  // const [prezime, setPrezime] = useState("Prezime");
  
    // const [darkMode, setDarkMode] =useState (false);
    // const toggleTheme = () => { setDarkMode(!darkMode);

    // };
  
    // <div className={darkMode? 'dark-theme' : 'light-theme'}>
      
      
    //   <button onClick={toggleTheme}>{darkMode? 'Prebaci na svijetlu temu' : 'Prebaci na tamnu temu'}</button>
      

    // </div>


// export default App;*/





