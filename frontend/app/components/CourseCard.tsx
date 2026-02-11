import { urlFor } from "@/sanity/lib/sanityImage"

type CourseCardProps = {
  title: string
  description: string
  image?: string
  href: string
  buttonText?: string
}

export default function CourseCard({
  title,
  description,
  image,
  href,
  buttonText = "Ver curso",
}: CourseCardProps) {
  return (
    <a
      href={href}
      className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl hover:shadow-md transition"
    >
      {image && (
        <img
          className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
          src={urlFor(image).width(500).height(300).url()}
          alt={title}
        />
      )}

      
      <div className="flex flex-col justify-between md:p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
          {title}
        </h5>

        <p className="mb-6 text-body">{description}</p>

        <span className="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5">
          {buttonText}
        </span>
      </div>
    </a>
  )
}
