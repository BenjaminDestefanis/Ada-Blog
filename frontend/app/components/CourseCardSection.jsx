import CourseCard from "./CourseCard"

export default function CourseCardSection({ block }) {
  const { title, courses } = block

  return (
    <section className="py-16 container mx-auto">
      {title && (
        <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
            href={`/cursos/${course.slug?.current}`}
          />
        ))}
      </div>
    </section>
  )
}
