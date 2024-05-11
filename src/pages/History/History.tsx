import { HistoryContainer, HistoryList } from "./History.styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
