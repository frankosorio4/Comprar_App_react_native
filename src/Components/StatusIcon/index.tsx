import { FilterStatus } from "@/Types/FilterStatus";
import { CircleDashed, CircleCheck } from "lucide-react-native"


export function StatusIcon({ status }: { status: FilterStatus }) {

    return status === FilterStatus.DONE ? (
        <CircleCheck size={18} color="#2C4681" />
    ) : (
        <CircleDashed size={18} color="#000000" />
    )
}