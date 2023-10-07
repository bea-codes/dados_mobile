import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import uuid from "react-native-uuid";

export const useStore = create((set) =>
  persist(
    (set) => ({
      jogadas: [],



      addJogada: (jogada) =>
        set((state) => {
          jogadas: [
            ...state.jogadas,
            {
              resultado: jogada.resultado,
              data: jogada.data,
              id: uuid.v4(),
            },
          ];
        }),
    }),
    {
      name: "diceStorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);