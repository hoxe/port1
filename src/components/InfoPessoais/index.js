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
          <img src="https://github.com/hoxe.png" alt="Imagem perfil" />
          <h1>Ernandes Joaquim</h1>
        </DadosPerfil>
        <Funcao>
          <FaDev size={20} />
          <span>Web Developer/Analista de Redes</span>
        </Funcao >
        <RedeSociais>
          <div>
            <a href='https://www.youtube.com/channel/UCtaRAA3LGx_w7rNOpqiSwnw' target={'_blank'}><FaYoutube size={25} /></a>
            <a href='https://www.linkedin.com/in/ernandes-da-costa-joaquim-000b9b196' target={'_blank'}><FaLinkedin size={25} /></a>
            <a href='https://github.com/hoxe' target={'_blank'}><FaGithub size={25} /></a>
          </div>
        </RedeSociais>
        <DadosEndereco>
          <Detalhes>
            <FaMapMarkerAlt size={20} />
            <span>Cuiabá - MT, Brasil</span>
          </Detalhes>
          <Detalhes>
            <FaRegEnvelope size={20}/>
            <span>nandy.com.br@gmail.com</span>
          </Detalhes>
        </DadosEndereco>
      </Informacoes>
    </Container>
  );
}
