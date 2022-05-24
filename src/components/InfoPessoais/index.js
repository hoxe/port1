import React from 'react';
import {
  FaDev, FaYoutube, FaLinkedin, FaGithub, FaMapMarkerAlt,
  FaRegEnvelope
} from 'react-icons/fa';

import {
  Container, Informacoes, DadosPerfil, Funcao ,RedeSociais,
  Detalhes,DadosEndereco
} from './styles';

export default function InfoPessoais() {
  return (
    <Container>
      <Informacoes>
        <DadosPerfil>
          <img src="https://github.com/DanielSandrin.png" alt="Imagem perfil" />
          <h1>Daniel Sandrin</h1>
        </DadosPerfil>
        <Funcao>
          <FaDev size={20} />
          <span>Web Developer</span>
        </Funcao >
        <RedeSociais>
          <div>
            <a href='https://www.youtube.com/channel/UC83GEXrk084TeDcHayLkN-A' target={'_blank'}><FaYoutube size={25} /></a>
            <a href='https://www.linkedin.com/in/daniel-sandrin/' target={'_blank'}><FaLinkedin size={25} /></a>
            <a href='https://github.com/DanielSandrin' target={'_blank'}><FaGithub size={25} /></a>
          </div>
        </RedeSociais>
        <DadosEndereco>
          <Detalhes>
            <FaMapMarkerAlt size={20} />
            <span>Pato Branco - PR, Brasil</span>
          </Detalhes>
          <Detalhes>
            <FaRegEnvelope size={20}/>
            <span>danielsandrin32@hotmail.com</span>
          </Detalhes>
        </DadosEndereco>
      </Informacoes>
    </Container>
  );
}
