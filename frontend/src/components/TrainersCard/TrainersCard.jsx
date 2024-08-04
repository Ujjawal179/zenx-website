import React from 'react';
import styles from './TrainersCard.module.css';

const TrainerCard = ({ title, description, image }) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.card__background}
        src={image}
        alt={title}
      />
      <div className={styles.card__content}>
        <div className={styles.card__content__container}>
          <h2 className={styles.card__title}>{title}</h2>
          <p className={styles.card__description}>{description}</p>
        </div>
        <button className={styles.card__button}>Read more</button>
      </div>
    </article>
  );
};

const TrainerCardContainer = () => {
  const cardsData = [
    {
      title: 'Trainer 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.',
      image: 'https://img.freepik.com/premium-photo/handsome-athletic-man-smiling-looking-camera-fitness-trainer-gym-jock_826801-5750.jpg'
    },
    {
      title: 'Trainer 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.',
      image: 'https://img.freepik.com/premium-photo/young-woman-fitness-trainer-gym_926199-2749700.jpg'
    },
    {
      title: 'Trainer 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.',
      image: 'https://img.freepik.com/premium-photo/handsome-athletic-man-smiling-looking-camera-fitness-trainer-gym-jock_826801-5750.jpg'
    }
  ];

  return (
    <div className={styles.cardContainer}>
      {cardsData.map((card, index) => (
        <TrainerCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default TrainerCardContainer;
