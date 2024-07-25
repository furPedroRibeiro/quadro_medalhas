interface ItemList{
  position: number;
  flagOfCountry: string;
  country: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

export function ItemListTop3(props: ItemList){
  return(
    <div className="flex flex-row justify-between">
      <div className="flex gap-4 items-center">
        <p className="font-paris2024 font-semibold text-xl md:text-2xl w-5">{props.position}</p>
        <img src={props.flagOfCountry} alt="" className='w-6 md:w-10' />
        <p className="font-paris2024 font-semibold text-xl md:text-2xl">{props.country}</p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-paris2024 font-semibold text-xl md:text-2xl w-4 md:w-10 text-center">{props.gold}</p>
        <p className="font-paris2024 font-semibold text-xl md:text-2xl w-4 md:w-10 text-center">{props.silver}</p>
        <p className="font-paris2024 font-semibold text-xl md:text-2xl w-4 md:w-10 text-center">{props.bronze}</p>
        <p className="font-paris2024 font-semibold text-xl md:text-2xl w-10 md:w-16 text-center">{props.total}</p>
      </div>
    </div>
  )
}
export function ItemList(props: ItemList){
  return(
    <div className="flex flex-row justify-between">
      <div className="flex gap-4 items-center">
        <p className="font-paris2024 font-regular text-xl md:text-2xl w-5">{props.position}</p>
        <img src={props.flagOfCountry} alt="" className='w-4 md:w-9'/>
        <p className="font-paris2024 font-regular text-xl md:text-2xl">{props.country}</p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-paris2024 font-regular text-xl md:text-2xl w-4 md:w-10 text-center">{props.gold}</p>
        <p className="font-paris2024 font-regular text-xl md:text-2xl w-4 md:w-10 text-center">{props.silver}</p>
        <p className="font-paris2024 font-regular text-xl md:text-2xl w-4 md:w-10 text-center">{props.bronze}</p>
        <p className="font-paris2024 font-regular text-xl md:text-2xl w-10 md:w-16 text-center">{props.total}</p>
      </div>
    </div>
  )
}