export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string
}[]

export const DateFunction=(date:Date)=>{
  return `${date.getMonth()} ${date.getDay()}, ${date.getFullYear()}`
}
