import Button from "../components/Button"
import { Home } from "lucide-react"


function Navbar(){
    return (
        <nav className="w-24 flex flex-col gap-2">
            <div className="bg-primary-default rounded-lg flex flex-col justify-center items-center">
                <Button size={"icon"} variant={"ghost"}><Home/></Button>
            </div>
            <div className="bg-neutral-800 rounded-lg flex-grow">3</div>
        </nav>
    )
}

export default Navbar