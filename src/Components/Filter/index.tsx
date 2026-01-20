import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { CircleCheck } from "lucide-react-native"

import { styles } from "./styles";
import { FilterStatus } from "@/Types/FilterStatus";

type Props = TouchableOpacityProps & {
    status: FilterStatus;
    isActive: boolean;
}

export function Filter({ status, isActive, ...rest }: Props) {

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
        >
            <CircleCheck size={18} color="#000" />
            <Text style={[
                { ...styles.title },
                { opacity: isActive ? 1 : 0.5 }
            ]} >
                {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}