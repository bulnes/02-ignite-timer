import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInSeconds } from "date-fns";
import { HandPalm, Play } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  StopCountdownButton,
  TaskInput,
} from "./Home.styles";

const newCycleFormSchema = zod.object({
  task: zod
    .string()
    .min(1, "O nome do projeto deve ter pelo menos 1 caractere."),
  minutesAmount: zod
    .number()
    .min(5, "O tempo mínimo é de 5 minutos.")
    .max(60, "O tempo máximo é de 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>;

interface Cycle extends NewCycleFormData {
  id: string;
  startedAt: Date;
  interruptedAt?: Date;
  finishedAt?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [currentCycleId, setCurrentCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormSchema),
      defaultValues: {
        task: "",
        minutesAmount: 25,
      },
    });

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(Date.now());

    const cycle: Cycle = {
      id,
      startedAt: new Date(),
      ...data,
    };

    setCycles((prevCycles) => [...prevCycles, cycle]);
    setCurrentCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  }

  function handleInterruptCycle() {
    const updatedCycles = cycles.map((cycle) => {
      if (cycle.id === currentCycleId) {
        return {
          ...cycle,
          interruptedAt: new Date(),
        };
      }

      return cycle;
    });

    setCycles(updatedCycles);
    setCurrentCycleId(null);
  }

  const activeCycle = cycles.find((cycle) => cycle.id === currentCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  // Retorna os erros de validação do formulário
  console.log(formState.errors);

  // Retorna o valor do input em tempo real, transformando o form em controlled
  const task = watch("task");
  const isSubmitDisabled = !task;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const now = new Date();
        const startedAt = activeCycle.startedAt!;
        const difference = differenceInSeconds(now, startedAt);

        if (difference >= totalSeconds) {
          const updatedCycles = cycles.map((cycle) => {
            if (cycle.id === currentCycleId) {
              return {
                ...cycle,
                finishedAt: now,
              };
            }

            return cycle;
          });

          setCycles(updatedCycles);
          setCurrentCycleId(null);
          setAmountSecondsPassed(0);
        } else {
          setAmountSecondsPassed(difference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval); // Assistir novamente a aula para entender melhor
    };
  }, [activeCycle]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle.task}`;
    }
  }, [activeCycle, minutes, seconds]);

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="tasks-suggestions"
            placeholder="Dê um nome para seu projeto"
            disabled={Boolean(activeCycle)}
            {...register("task")}
          />

          <datalist id="tasks-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            disabled={Boolean(activeCycle)}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
