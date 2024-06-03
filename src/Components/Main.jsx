import { useState } from "react";

export default function Main() {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const [listaContatos, setListaConstatos] = useState([])

    const registrar = (event) => {

        event.preventDefault();

        setListaConstatos([...listaContatos,
            {
                nomeSalvo: nome,
                telefoneSalvo: telefone
            }
        ]);
    };

    const Remover = (id) => {
        alert(id);
    }

    const remover = (id) => {
        const novaLista = listaContatos.filter(
            (contato, index) =>{
                if(index !== id){
                    return contato
                }else{
                    return null
                }
            }
        );
        setListaConstatos(novaLista)
    }

    return(
        <main className="container">
            <form onSubmit={registrar}>
           <p><label htmlFor="nome">Nome:</label>
            <input 
            type="text" 
            name="nome" 
            id="nome" 
            value={nome}
            onChange={(event) => setNome(event.target.value)} /></p>

            <label>Telefone:</label>
            <input 
            type="tel" 
            name="telefone-contato" 
            id="telefone" 
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)} />
            </form>

            {listaContatos.map((contato, index) =>
        <div key={index}>
            <p>{contato.nomeSalvo}</p>
            <p>{telefoneSalvo}</p>
            <p><button onClick={() => Remover(index)}>X</button></p>

        </div>
        )}
        </main>
    )
}