import CourseCard from "./CourseCard"
import "./CourseList.css"

const CourseList = ({ courses }) => {
  return (
    <section className="courses">
      <div className="container">
        <h2 className="section-title">Наши курсы</h2>

        <div className="courses__grid">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseList