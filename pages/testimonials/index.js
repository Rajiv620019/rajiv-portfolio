import TestimonialSlider from '../../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-white text-center xl:text-left'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        <h2 className='h2'>
          What clients say <span className='text-accent'>.</span>
        </h2>
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
