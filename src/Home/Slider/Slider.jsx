import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'


const Slider = () => {
    return (
        <div className='px-10'>
            <div className="carousel w-full rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
   <div>
   <img src={img1} className="w-full" />
   </div>
   <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full text-white  pl-12 py-52">
   <div className='space-y-7'>
   <h1 className='text-7xl w-1/3'>Affordable Price For Car Servicing</h1>
     <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
     <div className=''>
        <button className="btn btn-active btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
     </div>
   </div>
    </div>
    <div className="absolute flex justify-between bottom-5 right-5">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
   <div>
   <img src={img2} className="w-full" />
   </div>
   <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full text-white  pl-12 py-52">
   <div className='space-y-7'>
   <h1 className='text-7xl w-1/3'>Affordable Price For Car Servicing</h1>
     <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
     <div className=''>
        <button className="btn btn-active btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
     </div>
   </div>
    </div>
    <div className="absolute flex justify-between bottom-5 right-5">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
   <div>
   <img src={img3} className="w-full" />
   </div>
   <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full text-white  pl-12 py-52">
   <div className='space-y-7'>
   <h1 className='text-7xl w-1/3'>Affordable Price For Car Servicing</h1>
     <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
     <div className=''>
        <button className="btn btn-active btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
     </div>
   </div>
    </div>
    <div className="absolute flex justify-between bottom-5 right-5">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
   <div>
   <img src={img4} className="w-full" />
   </div>
   <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full text-white  pl-12 py-52">
   <div className='space-y-7'>
   <h1 className='text-7xl w-1/3'>Affordable Price For Car Servicing</h1>
     <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
     <div className=''>
        <button className="btn btn-active btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
     </div>
   </div>
    </div>
    <div className="absolute flex justify-between bottom-5 right-5">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
        </div>
        </div>
    );
};

export default Slider;