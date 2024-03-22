import Hero from './Hero';

const AboutView = () => {
  return (
    <>
      <Hero text='About Us' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='Lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ad dolorem nostrum sed corporis illum sit expedita veritatis,
              vitae totam atque accusamus eveniet labore enim laboriosam neque
              accusantium ipsa, id consequatur distinctio, in asperiores odit
              ipsum. Deleniti architecto consequatur voluptas porro vel, officia
              iusto in cupiditate, beatae, inventore dicta sit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
