
import { useRouter } from "next/navigation"



export default function Header()
{
    const router = useRouter()
    const handleNavigate = () => {
        router.push('')
    }
    return <h1>Header Page</h1>
}