
const ShoeCard = ({imgUrl,changeBigShoeImage,bigShoeImg}) => {
    
    const handleClick = () => {
    if(bigShoeImg !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
    }
    }

  return (
    <div className={`border-2
    rounded-xl
    ease-in-out duration-300
    ml-10
    
    ${bigShoeImg===imgUrl.bigShoe
        ? 'border-coral-red'
        : 'border-transparent'
    }
    cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
    
        <div className="flex justify-center items-center bg-card
        bg-center  bg-cover sm:h-40 rounded-xl max-sm:p-4">
            <img
             src={imgUrl.thumbnail} alt="imgurl" 
             width={127} height={103}
             className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard