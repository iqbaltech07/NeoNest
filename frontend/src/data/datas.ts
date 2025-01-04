interface Statistic {
    id: number;
    label: string;
    value: number | string;
}

const counts: Statistic[] = [
    {
        id: 1,
        label: "Klien Terlayani",
        value: 300,
    },
    {
        id: 2,
        label: "Kepuasan Pelanggan",
        value: 98,
    },
    {
        id: 3,
        label: "Pelanggan Setia",
        value: 1400,
    },
    {
        id: 4,
        label: "Ulasan Positif",
        value: 900,
    }
]

export {counts}