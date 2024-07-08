export interface Ticket {
  id: string;
  title: string;
  price: number;
  date: string;
  titleSector: string;
}

export interface DayEvent {
  title: string;
  date: string;
  sectors: {
    title: string;
    tickets: Ticket[];
  }[];
}

export const dataWebsite: DayEvent[] = [
  {
    title: "Sábado",
    date: "14/09/2024 19:00",
    sectors: [
      {
        title: "PISTA - 2° LOTE",
        tickets: [
          {
            id: "1323",
            title: "INTEIRA",
            price: 400,
            date: "14 Sep 24 19:00",
            titleSector: "PISTA - 2° LOTE",
          },
          {
            id: "12",
            title: "MEIA",
            price: 200,
            date: "14 Sep 24 19:00",
            titleSector: "PISTA - 2° LOTE",
          },
          {
            id: "2222",
            title: "MEIA SOCIAL",
            price: 210,
            date: "14 Sep 24 19:00",
            titleSector: "PISTA - 2° LOTE",
          },
        ],
      },
      {
        title: "ÁREA VIP - 3° LOTE",
        tickets: [
          {
            id: "133124234234323",
            title: "MEIA",
            price: 390,
            date: "14 Sep 24 19:00",
            titleSector: "ÁREA VIP - 3° LOTE",
          },
          {
            id: "23423",
            title: "MEIA SOCIAL",
            price: 400,
            date: "14 Sep 24 19:00",
            titleSector: "ÁREA VIP - 3° LOTE",
          },
          {
            id: "11312",
            title: "INTEIRA",
            price: 770,
            date: "14 Sep 24 19:00",
            titleSector: "ÁREA VIP - 3° LOTE",
          },
        ],
      },
    ],
  },
];
