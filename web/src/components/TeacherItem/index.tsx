import React from 'react';
import './style.css';
import WhatsappIcon from'../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return ( <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/54816886?s=400&u=1b7694797609283d341be598349afe49472b3a55&v=4" alt="Kauã Maia Aquino" />  
    <div>
        <strong> Kauã Maia Aquino </strong>
        <span> Ionic </span>
    </div>
    </header>
    <p>
    Programador e Designer
    <br/>
    <br/>
    Apaixonado em codar desde sempre, disposto a ajudar a todos e ensinar novas tecnologias.
    </p>

    <footer>
        <p>
            Preço/Hora
            <strong>R$ 50,00</strong>
            
        </p>
        <button type="button">
                <img src={WhatsappIcon} alt="WhatsApp Icone"/>
                Entrar em Contato
            </button>
    </footer>
</article>)
}

export default TeacherItem;