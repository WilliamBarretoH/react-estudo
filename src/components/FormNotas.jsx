import React, { Component } from 'react';

class FormNotas extends Component {
    
    render() { 
        return ( 
            <form>
                <input type="text" placeholder="Titulo"/>
                <textarea placeholder="Escreva sua nota..."></textarea>
                <button > Criar Nota</button>
        </form>
         );
    }
}
 
export default FormNotas;