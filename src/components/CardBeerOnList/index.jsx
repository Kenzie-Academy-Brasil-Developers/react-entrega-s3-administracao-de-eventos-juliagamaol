import React, { useContext, useState } from "react";
import { ConfraternizationContext } from "../../Providers/confraternization";
import { GraduationContext } from "../../Providers/graduation";
import { WeedingContext } from "../../Providers/weeding";
import { Card, Container } from "./styles";

export default function CardBeerOnList({ item, event }) {
  const [selected, setSelected] = useState(false)
  const { id, image_url, name, first_brewed, volume } = item;

  const { removeFromListWeeding } = useContext(WeedingContext);
  const { removeFromListGraduation } = useContext(GraduationContext);
  const { removeFromListConfraternization } = useContext(
    ConfraternizationContext
  );

  return (
    <Card>
      <Container key={id}>
        <figure>
          <img src={image_url} alt={name} />
        </figure>
        <section className="info">
            <h4><b>Nome: </b>{name}</h4>
            <p><b>Data Inicio de fabricação: </b>{first_brewed}</p>
            <button onClick={()=>setSelected(!selected)}><b>Descrição</b></button>
            <p><b>Quantidade de litros: </b>{volume.value} {volume.unit}</p>
          </section>

        <div className="btns">
          {event === "weeding" ? (
            <button onClick={() => removeFromListWeeding(item)}>
              Remover da lista de casamento
            </button>
          ) : event === "graduation" ? (
            <button onClick={() => removeFromListGraduation(item)}>
              Remover da lista de formatura
            </button>
          ) : (
            event === "confraternization" && (
              <button onClick={() => removeFromListConfraternization(item)}>
                Remover da lista de confraternização
              </button>
            )
          )}

        </div>
      </Container>
    </Card>
  );
}
