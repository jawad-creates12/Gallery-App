const Card = (props) => {

    
  return (
    <div>
      <a href={props.elem.url} target='_black'>
        <div className='h-40 w-44  overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]  ' >
        <img className=' h-full w-full object-cover' src={props.elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Card
