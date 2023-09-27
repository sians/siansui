import { Carousel } from 'components';


const ITEMS = [
  { src: 'https://images.unsplash.com/photo-1695512294611-80be329e683b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80' },
  { src: 'https://images.unsplash.com/photo-1695548043715-feb22ef40436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80' },
  { src: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80' },
]

const CarouselExample = () => {
  return (
    <>
      <Carousel 
        items={ITEMS}
      />
    </>
  )
}

export default CarouselExample;