import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#FFB800"
              stroke="#FFB800"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p className="italic text-gray-500 mb-4">{content}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
