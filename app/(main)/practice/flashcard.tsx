import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Flashcard = () => {
  return (
    <Carousel className="max-w-md mx-auto">
      <CarouselContent className="flex justify-center items-center">
        <CarouselItem className="w-72 flex justify-center">
          <div className="w-72 h-44 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-3 text-center">안녕하세요</h2>
            <p className="text-gray-700 text-center text-lg">Hello (in Korean)</p>
          </div>
        </CarouselItem>
        <CarouselItem className="w-72 flex justify-center">
          <div className="w-72 h-44 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-3 text-center">Merci</h2>
            <p className="text-gray-700 text-center text-lg">Thank you (in French)</p>
          </div>
        </CarouselItem>
        <CarouselItem className="w-72 flex justify-center">
          <div className="w-72 h-44 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-3 text-center">Hola</h2>
            <p className="text-gray-700 text-center text-lg">Hello (in Spanish)</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious variant="primaryOutline" />
      <CarouselNext variant="primaryOutline" />
    </Carousel>
  )
}

export default Flashcard;