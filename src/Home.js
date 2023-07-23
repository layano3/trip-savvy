import React from 'react';
import NavigationBar from './NavigationBar';
import { Card } from 'react-bootstrap';
import img from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from './footer';
import { useLanguage } from './LanguageContext';

const testimonialsEn = [
  {
    id: 1,
    name: 'John Doe',
    testimonial: 'Barb and I want to thank both of you for your help in organizing our trip. We thoroughly enjoyed visiting Portugal again, after 32 years.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    testimonial: 'We have just checked in and we are thrilled with the resort and our lovely room.  Once again, thank you for your great advice!',
  },
  {
    id: 3,
    name: 'Mary Jane',
    testimonial: 'We are back from Peru and wanted to send you a sincere thank you for helping us organize our trip.  It was indeed the trip of a lifetime and we are so grateful and appreciative of the work you did to help make it so magical.',
  },
];

const testimonialsFr = [
  {
    id: 1,
    name: 'Jean Dupont',
    testimonial: 'Barb et moi voulons vous remercier tous les deux pour votre aide dans l\'organisation de notre voyage. Nous avons beaucoup apprécié notre visite au Portugal, après 32 ans.',
  },
  {
    id: 2,
    name: 'Marie Dubois',
    testimonial: 'Nous venons de nous enregistrer et nous sommes ravis de la station et de notre belle chambre. Encore une fois, merci pour vos excellents conseils!',
  },
  {
    id: 3,
    name: 'Sophie Martin',
    testimonial: 'Nous sommes de retour du Pérou et voulions vous remercier sincèrement de nous avoir aidés à organiser notre voyage. C\'était vraiment le voyage d\'une vie et nous sommes si reconnaissants du travail que vous avez accompli pour le rendre si magique.',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <h3>{testimonial.name}</h3>
      <p>{testimonial.testimonial}</p>
    </div>
  );
};

const FeaturedAttractions = () => {
  const { language } = useLanguage();

  const featuredAttractionsTexts = {
    en: {
      title: 'Featured Attractions',
      cards: [
        {
          title: 'Paris',
          text: 'Lingering over pain au chocolat in a sidewalk café, relaxing after a day of marveling at icons like the Eiffel Tower… the perfect Paris experience',
          image: img,
        },
        {
          title: 'Dubai',
          text: 'From luxury hospitality and cutting-edge architecture to world-class shopping, culture and nature, discover what makes Dubai the best of the best',
          image: img2,
        },
        {
          title: 'Maldives',
          text: 'Want to make your co-workers insanely jealous? Just casually drop "Im vacationing in the Maldives this year" into conversation, preferably in the dead of winter',
          image: img3,
        },
      ],
    },
    fr: {
      title: 'Attractions Vedettes',
      cards: [
        {
          title: 'Paris',
          text: 'Singer du pain au chocolat dans un café en bordure de trottoir, se détendre après une journée passée à admirer des icônes comme la Tour Eiffel… l\'expérience parfaite à Paris',
          image: img,
        },
        {
          title: 'Dubai',
          text: 'De l\'hospitalité de luxe et une architecture de pointe à des achats de classe mondiale, à la culture et à la nature, découvrez ce qui fait de Dubai le meilleur du meilleur',
          image: img2,
        },
        {
          title: 'Maldives',
          text: 'Vous voulez rendre vos collègues fous de jalousie? Lâchez simplement "Je passe des vacances aux Maldives cette année" dans la conversation, de préférence en plein hiver',
          image: img3,
        },
      ],
    },
  };

  const currentLanguageTexts = featuredAttractionsTexts[language] || featuredAttractionsTexts['en'];

  return (
    <div className="featured-attractions">
      <h2 className="featured-title">{currentLanguageTexts.title}</h2>
      <div className="card-container">
        {currentLanguageTexts.cards.map((card, index) => (
          <Card className="featured-card" key={index}>
            <div className="image-container">
              <Card.Img variant="top" src={card.image} alt={`Attraction ${index + 1}`} />
            </div>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

function Home() {
  const { language, toggleLanguage } = useLanguage();

  const testimonialsData = language === 'en' ? testimonialsEn : testimonialsFr;

  return (
    <div className="Home">
      <NavigationBar />
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'French' : 'English'}
      </button>
      <FeaturedAttractions />
      <div className="testimonial-section">
        <h2>{language === 'en' ? 'Testimonials' : 'Témoignages'}</h2>
        <div className="testimonial-card-container">
          {testimonialsData.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

