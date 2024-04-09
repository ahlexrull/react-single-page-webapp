import Hero from "./Hero";

/**
 * Static page which talks about the purpose of the movie browser app.
 * @returns JSX React Element
 */

const AboutView = () => {
  const websiteName = "Movie Browser"; // TODO: Move to constant.js
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="Lead">
              Welcome to {websiteName}, your ultimate destination for
              everything related to movies! Whether you're a casual viewer or a
              die-hard cinephile, we're here to enhance your cinematic
              experience. At {websiteName}, we're passionate about films in all
              their forms - from Hollywood blockbusters to indie gems, from
              timeless classics to the latest releases. Our mission is to
              provide a platform where movie enthusiasts can discover, explore,
              and discuss their favorite films with like-minded individuals.
              <br />
              <br />
              What sets us apart is our dedication to curating a diverse and
              extensive collection of movies. We believe in celebrating the
              richness of cinema from around the world, showcasing a wide range
              of genres, cultures, and perspectives. Whether you're craving a
              thrilling action-packed adventure, a heartwarming romance, a
              mind-bending sci-fi epic, or a thought-provoking documentary,
              you'll find something to captivate your imagination here. But
              {websiteName} is more than just a movie database - it's a
              community. We encourage interaction and engagement among our
              users, fostering discussions, sharing recommendations, and
              exchanging insights.
              <br />
              <br />
              Our user-friendly interface makes it easy to
              navigate through our vast catalog, discover hidden gems, and stay
              up-to-date with the latest releases and industry news. Whether
              you're looking for your next movie night pick, researching a film
              for academic purposes, or simply indulging your love for cinema,
              {websiteName} is your go-to destination. Join us on this
              cinematic journey, and let's explore the magic of movies together.
              <br />
              <br />
              Happy browsing!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
