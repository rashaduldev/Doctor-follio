import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
      <div className='mx-10 my-5'>
          <div className="hero min-h-screen bg-base-200  rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-1/2 relative'>
          <img src={img1} className="max-w-lg rounded-lg shadow-2xl" />
          <img className='absolute max-w-sm top-1/2 right-0 border-white border-8 rounded-lg' src={img2} alt="" />
          </div>
         <div className='w-1/2 space-y-5'>
            <h3 className='text-2xl text-orange-600'>About</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
      <button className="btn btn-outline btn-secondary">Get More Info</button>
    </div>
  </div>
    </div>
      </div>
    );
};

export default About;