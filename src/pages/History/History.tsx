import { HistoryContainer, HistoryList, StatusColor } from "./History.styles";

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
              <td>
                <StatusColor statusType="green">Concluído</StatusColor>
              </td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>
                <StatusColor statusType="yellow">Em andamento</StatusColor>
              </td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>25 minutos</td>
              <td>10:00</td>
              <td>
                <StatusColor statusType="red">Interrompido</StatusColor>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
