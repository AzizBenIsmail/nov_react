import logo from "./logo.svg";
import React, {useState , useEffect} from "react";
import "./App.css";
import New from './New';
// import Footer from './composant/Footer';
function App() {
  //js
  const name = "Aziz";

  const elemet = (
    <h1>
      Bonjour <h2> {name} </h2>{" "}
    </h1>
  );

  function getEtudiant(objet) {
    return objet;
  }

  function getEtudiantV2(objet) {
    return "marahbe bik " + objet + " fi notre formation ReactJS";
  }

  const etudiant = {
    nom: "Aziz",
    age: 25,
    ville: "Tunis",
  };

  const listEtudiants = [
    { nom: "Aziz", age: 25, ville: "Tunis", ObjectID: 0 },
    { nom: "Sara", age: 22, ville: "Sfax", ObjectID: 1 },
    { nom: "Omar", age: 28, ville: "Sousse", ObjectID: 2 },
  ];

const newStyle = {
  color: 'red',
  fontSize: '20px',
}

//const count = 0;
const [count, setCount] = useState(0);
console.log("Render App", count);

const [email, setEmail] = useState("");

// useEffect( () => {} ); //componentDidMount
// useEffect( () => {} , [] ); //componentDidMount
// useEffect( () => {} , [count] ); //componentDidMount

    //  useEffect(() => {
    //   console.log('cette fonction va etre execute chaque re-render');
    //   console.log('car pas de deuxieme argument passer');
    //   });

      //     useEffect(() => {
      // console.log('cette fonction va etre execute une fois seulement ');
      // console.log('car le deuxieme argument est un tableau vide ');
      // return () => {
      // console. log(' cette partie va etre execute seulement lors de loperation unmounting ')
      // }
      
      // }, [])

      //     useEffect(() => {
      // console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable color ');
      // console.log('car le deuxieme argument est color ');
      // return () => {
      // console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
      // }
      // }, [email])

  return (
    <div>
      {/* jsx     */}
      <div className="App">
        <header className="App-header">
          Bonjour {name}
          {elemet}
          {getEtudiant("etudiant 1")}
          <br></br>
          <div className="App-link"> 
            {getEtudiantV2("etudiant 2")}
          <br />
          V0 {etudiant.nom} - {etudiant.age} - {etudiant.ville}
          <br />
          <div style={{ color : 'red', fontSize: '18px' }}>
          V1 {listEtudiants[0].nom} - {listEtudiants[0].age} -{" "}
          {listEtudiants[0].ville}
          </div>
          </div>
          <br />
          Map
          {listEtudiants.map((item) => (
            <div key={item.ObjectID}>
              {item.nom} - {item.age} - {item.ville}
            </div>
          ))}
          <table border="1">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Age</th>
                <th>Ville</th>
              </tr>
            </thead>
            <tbody>
              {listEtudiants.map((item) => (
                <tr key={item.ObjectID}>
                  <td>{item.nom}</td>
                  <td>{item.age}</td>
                  <td>{item.ville}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <New etudiant={etudiant}/>
          <br/>
          {count}
          <button onClick={ () => setCount(count + 1) }>Click</button>          
          {email}
          <input type="email" onChange={(e)=>{
            setEmail(e.target.value)
          }} ></input>
        </header>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
