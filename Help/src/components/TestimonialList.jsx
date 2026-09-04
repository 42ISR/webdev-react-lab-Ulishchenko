import ReviewCard from "./ReviewCard"
import "./TestimonialList.css"

const TestimonialList = ({ reviews }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Отзывы студентов</h2>

        <div className="testimonials__grid">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialList