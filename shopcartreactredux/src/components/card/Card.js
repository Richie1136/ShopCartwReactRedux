import './Card.css';

const Card = ({ className, children }) => {
  return (
    <section
      className={`card ${className ? className : ''}`}
    >
      {children}
    </section>
  );
};

export default Card;
