import Header from "./components/Header"
import Hero from "./components/Hero"
import CourseList from "./components/CourseList"
import TestimonialList from "./components/TestimonialList"
import Footer from "./components/Footer"

const coursesData = [
  {
    id: 1,
    title: "React с нуля",
    category: "Frontend",
    image: "https://placehold.co/400x220?text=React",
    duration: "8 недель",
    level: "Начальный уровень",
    price: 15000,
    rating: 4.8
  },
  {
    id: 2,
    title: "Node.js для бэкенда",
    category: "Backend",
    image: "https://placehold.co/400x220?text=Node.js",
    duration: "10 недель",
    level: "Средний уровень",
    price: 18000,
    rating: 4.6
  },
  {
    id: 3,
    title: "Python для анализа данных",
    category: "Data Science",
    image: "https://placehold.co/400x220?text=Python",
    duration: "12 недель",
    level: "Начальный уровень",
    price: 20000,
    rating: 4.9
  },
  {
    id: 4,
    title: "UX/UI дизайн интерфейсов",
    category: "Дизайн",
    image: "https://placehold.co/400x220?text=UX%2FUI",
    duration: "6 недель",
    level: "Начальный уровень",
    price: 13500,
    rating: 4.7
  },
  {
    id: 5,
    title: "Java Enterprise",
    category: "Backend",
    image: "https://placehold.co/400x220?text=Java",
    duration: "14 недель",
    level: "Продвинутый уровень",
    price: 24000,
    rating: 4.5
  },
  {
    id: 6,
    title: "Тестирование ПО",
    category: "QA",
    image: "https://placehold.co/400x220?text=QA",
    duration: "6 недель",
    level: "Начальный уровень",
    price: 11000,
    rating: 4.6
  }
]

const reviewsData = [
  {
    id: 1,
    name: "Анна К.",
    avatar: "https://placehold.co/64x64?text=A",
    text: "Курс по React дал мне уверенные знания, через 2 месяца после выпуска нашла работу.",
    course: "React с нуля"
  },
  {
    id: 2,
    name: "Дмитрий С.",
    avatar: "https://placehold.co/64x64?text=D",
    text: "Отличные менторы, всегда помогали с код-ревью. Рекомендую курс по Node.js.",
    course: "Node.js для бэкенда"
  },
  {
    id: 3,
    name: "Мария П.",
    avatar: "https://placehold.co/64x64?text=M",
    text: "Была без опыта в дизайне, а теперь собираю портфолио и беру первые заказы.",
    course: "UX/UI дизайн"
  }
]

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CourseList courses={coursesData} />
      <TestimonialList reviews={reviewsData} />
      <Footer />
    </div>
  )
}

export default App