type User = {
  id: string
  name: string
  email: string
  role: string
  company: string
  country: string
}

type DataBase = {
  users: User[]
}

export const db: DataBase = {
  users: [
    {
      id: '1',
      name: 'Julia Roberts',
      email: 'julia@roberts.com',
      role: 'Estimator',
      company: 'Dietrich, Heller and Williamson',
      country: '🇵🇹 Protugal',
    },
    {
      id: '2',
      name: 'Brandy Oxton',
      email: 'boxton1@aol.com',
      role: 'Engineer',
      company: 'Padberg Inc',
      country: '🇹🇭 Thailand',
    },
    {
      id: '3',
      name: 'Malanie Tiltman',
      email: 'mtiltmana@sun.com',
      role: 'Construction Foreman',
      company: 'Ritchie, Kshlerin and Langosh',
      country: '🇦🇱 Albania',
    },
    {
      id: '4',
      name: 'Leupold Bauman',
      email: 'lbaumanc@admin.ch',
      role: 'Engineer',
      company: 'Daniel, Ortiz and Becker',
      country: '🇨🇳 China',
    },
    {
      id: '5',
      name: 'Ariela Dowdle',
      email: 'adowdled@boston.com',
      role: 'Construction Worker',
      company: 'Davis-Cronin',
      country: '🇮🇩 Indonesia',
    },
  ],
}
