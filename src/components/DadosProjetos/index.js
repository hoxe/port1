import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SkillsItem } from '../../services/data/skill';
import { Projetos } from '../../services/data/projetos';

import {
  Container, Menu, Cabecalho, OpcoesMenu, Dados, InfoDados,
  Skills, ItemSkill, Card, Itens, ProgressBar, Progress
} from './styles';


export default function DadosProjetos() {
  const ItensSkill = SkillsItem;
  const [showDados, setShowDados] = useState(true);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  function handleClickMenu(isTrue) {
    if (isTrue) {
      setShowDados(true);
    } else {
      setShowDados(false);
    }
  }

  return (
    <Container>
      <nav>
        <Menu>
          <Cabecalho>
            <span>Menu</span>
            <div></div>
          </Cabecalho>
          <OpcoesMenu>
            <span onClick={() => handleClickMenu(false)}>Projetos</span>
            <span onClick={() => handleClickMenu(true)}>Sobre</span>
          </OpcoesMenu>
        </Menu>
      </nav>
      <Dados>
        {showDados ? (
          <>
            <InfoDados initial="hidden" animate="visible" variants={variants}>
              <span>
                Me chamo Daniel Sandrin de Campos, tenho 23 anos e atuo a dois anos
                como desenvolvedor FullStack. Estou na área de técnologia desde os 17 anos de idade.
                Trabalho com técnologias como ASP, VbNet, SqlServer, Ionic. Sou Bacharel em Sistemas
                de informação pela faculdade Mater Dei. Gosto muito da área de sistemas e sou apaixonado
                por FrontEnd, onde já dedico meus estudos a mais de um ano. Entrei na área de desenvolvimento
                por ser facinado em poder criar "A quelas telas bonitas de jogos online" que via quando era
                criança e desde então fiz varios cursos que me despertaram mais ainda a curiosidade sobre
                a área de Sistemas. Caso queira saber mais sobre mim, pode estar entrando em contato atráves
                do Linkedin, <b><a href='https://www.linkedin.com/in/daniel-sandrin/' target={'_blank'}>Clicando aqui!</a></b>
              </span>
            </InfoDados>
            <h1>Hard Skills</h1>
            <Skills>
              {ItensSkill.map((Item) =>
                <ItemSkill animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}>
                  {Item.icon}
                  <div>
                    <h3>{Item.titulo}</h3>
                    <ProgressBar>
                      <Progress percentual={Item.Percentual}>
                        <span>{Item.Percentual}</span>
                      </Progress>
                    </ProgressBar>
                  </div>
                </ItemSkill>
              )}
            </Skills>
          </>
        ) : (
          <>
            <Itens>
              {Projetos.map((projetos) =>
                <Card initial="hidden" animate="visible" variants={variants}>
                  <h3>{projetos.nome}</h3>
                  <img src={projetos.img} alt="" />
                  <a href={projetos.github} target={'_blank'}>
                    <FaGithub size={20} />
                    Git Hub
                  </a>
                </Card>
              )}
            </Itens>
          </>
        )}
      </Dados>
    </Container >
  );
}