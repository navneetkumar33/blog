export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string
}[]

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const DateFunction=(date:Date)=>{
  return `${monthNames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
}
